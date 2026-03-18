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

### Step 2 — Patch source files
Two files are modified **in-place** before bundling:

| File | Patch |
|---|---|
| `terminal/CezRPkQL.js` | Replaces `/terminal/font/*.fnt` paths with `fonts://` virtual URLs so the inlined font polyfill can serve them |
| `terminal/CRNNNCwz.js` | Sets `preferWorkers: !1, preferCreateImageBitmap: !1` in PIXI's `loadTextures` to force the `new Image()` path (bypasses Web Workers which don't have access to the `fonts://` polyfill) |

Both patches are idempotent (checked before applying).

> **Important:** these patches modify the dev-server source files. Always restore them after a build:
> ```bash
> git checkout terminal/CezRPkQL.js terminal/CRNNNCwz.js
> ```
> Committing the patched versions causes `URL scheme "fonts" is not supported` errors on the dev server. See [svelte-minified-component-guide.md](svelte-minified-component-guide.md) for details.

### Step 3 — Bundle with esbuild
Entry point: `terminal/CQSQNu0h.js`. esbuild resolves all local `./` imports into a single IIFE bundle (`_bundle.js`, deleted after assembly). Format: `--format=iife --platform=browser`.

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
# 4. Restore patched source files
git checkout terminal/CezRPkQL.js terminal/CRNNNCwz.js
# 5. Commit everything
git add index.html
git commit -m "Build index.html"
```

## esbuild warnings

The build produces two harmless `duplicate-case` warnings from a `switch` statement in `Bte0Q9TL.js` (upstream code, not ours). They don't affect the output.
