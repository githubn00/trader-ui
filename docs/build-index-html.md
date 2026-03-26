# Building index.html

`index.html` is a truly serverless single-file artifact — it can be opened directly from `file://` with no web server. WebSocket connects to whatever host is typed into the login form.

## Prerequisites

```bash
npm install          # installs esbuild (the only dev dependency)
```

Node.js must be available on PATH.

## Run the build

```bash
node build.js
```

Output: `index.html` (~7 MB) in the repo root.

---

## What `build.js` does (four steps)

### Step 1 — Download missing modules
Scans all `.js` files in `terminal/` for `import "./foo.js"` references. Any dependency not already present on disk is fetched from the remote CDN (`https://mt5-6.xm-bz.com/terminal`) and saved to `terminal/`. Idempotent — already-present files are never re-downloaded.

### Step 2 — Prepare source files
One file may be modified **in-place** before bundling:

| File | Patch |
|---|---|
| `terminal/CRNNNCwz.js` | Sets `preferWorkers: !1, preferCreateImageBitmap: !1` in PIXI's `loadTextures` to force the `new Image()` path (bypasses Web Workers which don't have access to the `fonts://` polyfill) |

The patch is idempotent (checked before applying).

> **Important:** `terminal/CezRPkQL.js` must stay on `/terminal/font/*.fnt` in git and on the dev server. `build.js` now rewrites those paths only inside the generated `_bundle.js`, so the dev source no longer needs to be restored after a build.
>
> `terminal/CRNNNCwz.js` is still patched in-place. Restore it after a build if you don't want the worker override committed:
> ```bash
> git checkout terminal/CRNNNCwz.js
> ```
> Committing a `fonts://`-patched `terminal/CezRPkQL.js` causes `URL scheme "fonts" is not supported` errors on the dev server. See [svelte-minified-component-guide.md](svelte-minified-component-guide.md) for details.

### Step 3 — Bundle with esbuild
Entry point: `terminal/CQSQNu0h.js`. esbuild resolves all local `./` imports into a single IIFE bundle (`_bundle.js`, deleted after assembly). Format: `--format=iife --platform=browser`.

Immediately after bundling, `build.js` rewrites the bundled `/terminal/font/*.fnt` URLs to `fonts://*.fnt` so the inlined font polyfill can serve them inside the single-file artifact.

### Step 4 — Assemble HTML
Starting from `terminal.html`:

1. Removes the `<script type="module">` entry tag.
2. Inlines `terminal/CpQrds23.css` as a `<style>` block.
3. Injects a `<script>` font polyfill that:
   - Embeds all six `.fnt` XML files and their `.png` atlases (base64) as a registry object.
   - Overrides `window.fetch` to serve `fonts://` requests from the registry.
   - Overrides `HTMLImageElement.prototype.src` to redirect `fonts://` PNG requests to base64 data URIs.
4. Injects a history patch that stubs `replaceState`/`pushState` when running from `file://` (avoids SecurityError).
5. Inlines the esbuild bundle as a `<script>` block before `</body>`.
6. Applies two post-inline Router context guards so the Link component doesn't crash without a parent Router.

Writes `index.html` and deletes `_bundle.js`.

---

## Typical workflow

```bash
# 1. Make source changes (CSS, JS patches, etc.)
# 2. Test on dev server first (node server.js)
# 3. Build
node build.js
# 4. Optionally restore the PIXI worker patch
git checkout terminal/CRNNNCwz.js
# 5. Commit everything
git add index.html
git commit -m "Build index.html"
```

## esbuild warnings

The build produces two harmless `duplicate-case` warnings from a `switch` statement in `Bte0Q9TL.js` (upstream code, not ours). They don't affect the output.
