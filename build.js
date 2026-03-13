#!/usr/bin/env node
/**
 * Builds a truly serverless single-file HTML artifact.
 *
 * Steps:
 *  1. Recursively discover and download all missing JS modules from the remote CDN
 *  2. Apply local patches (WSS host, editable server field) to local modules
 *  3. Bundle everything from the entry point using esbuild (single IIFE, no modules)
 *  4. Inline CSS as <style> and bundled JS as <script> into terminal.html
 *
 * The result (index.html) can be opened directly from file:// — no server needed.
 * WebSocket connects to window.__mt5_host (editable in the login form).
 * Fonts/images are fetched from the remote CDN (mt5-6.xm-bz.com).
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const { execSync } = require("child_process");

const TERMINAL_DIR = path.join(__dirname, "terminal");
const OUT_FILE = path.join(__dirname, "index.html");
const REMOTE_BASE = "https://mt5-6.xm-bz.com/terminal";
const ENTRY = "CQSQNu0h.js";

// ── helpers ──────────────────────────────────────────────────────────────────

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "user-agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetch(res.headers.location).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

function getImports(code) {
  const re = /['"]\.\/([\w\-\.\+]+\.js)['"]/g;
  const deps = new Set();
  let m;
  while ((m = re.exec(code)) !== null) deps.add(m[1]);
  return deps;
}

// ── 1. Recursively download missing modules ──────────────────────────────────

async function downloadAll() {
  const local = new Set(fs.readdirSync(TERMINAL_DIR).filter((f) => f.endsWith(".js")));
  const queue = [...local]; // start by scanning what we already have
  const scanned = new Set();

  while (queue.length) {
    const file = queue.shift();
    if (scanned.has(file)) continue;
    scanned.add(file);

    const filePath = path.join(TERMINAL_DIR, file);
    let code;
    if (local.has(file)) {
      code = fs.readFileSync(filePath, "utf8");
    } else {
      const url = `${REMOTE_BASE}/${file}`;
      process.stdout.write(`  downloading ${file} ... `);
      try {
        code = await fetch(url);
        fs.writeFileSync(filePath, code, "utf8");
        local.add(file);
        process.stdout.write("ok\n");
      } catch (e) {
        process.stdout.write(`FAILED (${e.message})\n`);
        continue;
      }
    }

    for (const dep of getImports(code)) {
      if (!scanned.has(dep)) queue.push(dep);
    }
  }

  console.log(`\nTotal modules: ${local.size}`);
}

// ── 2. Patch source files before bundling ─────────────────────────────────────

// Font data embedded as a virtual "fonts://" URL scheme:
//   fonts://axis.fnt          → .fnt XML text (extname=".fnt" → passes PIXI parser test)
//   fonts://axis.fnt/axis_0.png → PNG data URI (PIXI constructs this via dirname+join)
// fetch() polyfill serves .fnt XML; Image.src setter polyfill serves PNG data URIs.

function buildFontRegistry() {
  const fontDir = path.join(TERMINAL_DIR, "font");
  const reg = {}; // url → content (string for xml, data-uri string for png)

  const variants = [
    { fnt: "axis.fnt",     png: "axis_0.png" },
    { fnt: "axis2x.fnt",   png: "axis2x_0.png" },
    { fnt: "axisb.fnt",    png: "axisb_0.png" },
    { fnt: "axisb2x.fnt",  png: "axisb2x_0.png" },
    { fnt: "values.fnt",   png: "values_0.png" },
    { fnt: "values2x.fnt", png: "values2x_0.png" },
  ];

  for (const { fnt, png } of variants) {
    const fntUrl = `fonts://${fnt}`;
    const pngUrl = `fonts://${fnt}/${png}`; // PIXI computes: join(dirname(fntUrl), png)

    // .fnt XML as raw text (keep original file="axis_0.png" — PIXI resolves it)
    reg[fntUrl] = fs.readFileSync(path.join(fontDir, fnt), "utf8");

    // PNG as base64 data URI
    const pngData = fs.readFileSync(path.join(fontDir, png));
    reg[pngUrl] = `data:image/png;base64,${pngData.toString("base64")}`;
  }
  return reg;
}

function patchSources() {
  // ── Patch CezRPkQL.js: replace font URLs with fonts:// virtual scheme ────
  const fontFile = path.join(TERMINAL_DIR, "CezRPkQL.js");
  let src = fs.readFileSync(fontFile, "utf8");

  // Replace the Fp object with fonts:// virtual URLs (preserve the Wp HiDPI ternary).
  // Include the trailing comma since Fp is part of a multi-variable const chain.
  const fp = `Fp = {
    axis:   Wp ? "fonts://axis2x.fnt"   : "fonts://axis.fnt",
    axisb:  Wp ? "fonts://axisb2x.fnt"  : "fonts://axisb.fnt",
    values: Wp ? "fonts://values2x.fnt" : "fonts://values.fnt",
  },`;

  if (src.includes("fonts://axis.fnt")) {
    console.log("  Fp already has fonts:// virtual URLs — skipping");
  } else {
    const patched = src.replace(
      /Fp\s*=\s*\{[\s\S]*?axis[\s\S]*?axisb[\s\S]*?values[\s\S]*?\},/,
      fp
    );
    if (patched === src) {
      console.warn("  WARNING: Fp pattern not found in CezRPkQL.js — fonts may not load");
    } else {
      fs.writeFileSync(fontFile, patched, "utf8");
      console.log("  Patched Fp with fonts:// virtual URLs");
    }
  }

  // ── Patch CRNNNCwz.js: disable worker/createImageBitmap for texture loading ─
  // PIXI's loadTextures uses a Web Worker (Xr) by default to fetch PNGs via
  // createImageBitmap. Workers use native fetch — bypassing our fonts:// polyfill.
  // Disabling preferWorkers + preferCreateImageBitmap forces the new Image() path
  // which IS intercepted by our HTMLImageElement.prototype.src setter polyfill.
  const pixiFile = path.join(TERMINAL_DIR, "CRNNNCwz.js");
  let pixiSrc = fs.readFileSync(pixiFile, "utf8");

  const pixiPatched = pixiSrc.replace(
    /preferWorkers:\s*!0,\s*preferCreateImageBitmap:\s*!0,/,
    "preferWorkers: !1, preferCreateImageBitmap: !1,"
  );

  if (pixiPatched === pixiSrc) {
    console.warn("  WARNING: preferWorkers pattern not found in CRNNNCwz.js — font textures may fail");
  } else {
    fs.writeFileSync(pixiFile, pixiPatched, "utf8");
    console.log("  Patched loadTextures: disabled worker/createImageBitmap (forces new Image() path)");
  }
}

// ── 3. Bundle with esbuild ────────────────────────────────────────────────────

function bundle() {
  const esbuild = path.join(__dirname, "node_modules", ".bin", "esbuild");
  const entryPath = path.join(TERMINAL_DIR, ENTRY);
  const bundlePath = path.join(__dirname, "_bundle.js");

  console.log("\nBundling with esbuild...");
  execSync(
    `"${esbuild}" "${entryPath}" --bundle --format=iife --outfile="${bundlePath}" ` +
      `--log-level=warning --platform=browser ` +
      `--define:process.env.NODE_ENV=\\"production\\"`,
    { stdio: "inherit", cwd: TERMINAL_DIR }
  );

  const size = fs.statSync(bundlePath).size;
  console.log(`Bundle: ${(size / 1024).toFixed(1)} KB`);
  return bundlePath;
}

// ── 3. Assemble HTML ──────────────────────────────────────────────────────────

function assemble(bundlePath) {
  let html = fs.readFileSync(path.join(__dirname, "terminal.html"), "utf8");

  // Remove original <script type="module"> entry tag
  html = html.replace(/<script\s+type="module"\s+src="[^"]*">\s*<\/script>/, "");

  // Inline CSS
  html = html.replace(
    /<link\s+rel="stylesheet"\s+href="\/terminal\/(CpQrds23\.css)"[^>]*>/,
    () => {
      const css = fs.readFileSync(path.join(TERMINAL_DIR, "CpQrds23.css"), "utf8");
      return `<style>${css}</style>`;
    }
  );

  // Fix WebSocket shim for file:// (location.host is "" so includes("") is always true,
  // corrupting URLs). Guard with a location.host truthiness check.
  html = html.replace(
    "url.includes(location.host)",
    "location.host && url.includes(location.host)"
  );

  // Build font registry: fonts:// virtual URLs → raw XML text or PNG data URIs.
  // fetch() polyfill serves the .fnt XML; Image src setter polyfill serves PNG data URIs.
  // This bypasses Chrome's block on fetch("data:...") from file:// origin AND the PIXI
  // parser's extname() test which rejects data: URIs (extname = "").
  const fontReg = buildFontRegistry();
  const fontRegJson = JSON.stringify(fontReg);

  const fontPatch = `<script>
(function() {
  var FONTS = ${fontRegJson};

  // Polyfill fetch() for fonts:// virtual URLs — PIXI uses fetch to load .fnt XML
  var _fetch = window.fetch;
  window.fetch = function(url, opts) {
    if (typeof url === "string" && url.startsWith("fonts://")) {
      var key = url.split("?")[0].split("#")[0];
      var val = FONTS[key];
      if (val) {
        var blob = new Blob([val], { type: "text/xml" });
        return Promise.resolve(new Response(blob, { status: 200, headers: { "Content-Type": "text/xml" } }));
      }
    }
    return _fetch.apply(this, arguments);
  };

  // Intercept Image.src for fonts:// PNG URLs — PIXI uses new Image() to load textures.
  // PIXI constructs the PNG URL as: join(dirname("fonts://axis.fnt"), "axis_0.png")
  // = "fonts://axis.fnt/axis_0.png". Map that to the actual PNG data URI.
  var imgDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
  Object.defineProperty(HTMLImageElement.prototype, "src", {
    configurable: true,
    get: imgDesc.get,
    set: function(val) {
      if (typeof val === "string" && val.startsWith("fonts://")) {
        var key = val.split("?")[0].split("#")[0];
        val = FONTS[key] || val;
      }
      imgDesc.set.call(this, val);
    }
  });
})();
</script>`;
  html = html.replace("</head>", fontPatch + "\n</head>");

  // Disable history.replaceState/pushState for file:// — the terminal calls
  // replaceState("/terminal") which resolves to file:///C:/terminal and throws
  // a SecurityError because that path differs from the actual file:// origin.
  const historyPatch = `<script>
if (location.protocol === "file:") {
  history.replaceState = history.pushState = function() {};
}
</script>`;
  html = html.replace("</head>", historyPatch + "\n</head>");

  // Inline the bundle
  const bundle = fs.readFileSync(bundlePath, "utf8");
  html = html.replace("</body>", `<script>${bundle}</script>\n</body>`);

  fs.writeFileSync(OUT_FILE, html, "utf8");
  const size = fs.statSync(OUT_FILE).size;
  console.log(`\nBuilt: ${OUT_FILE} (${(size / 1024 / 1024).toFixed(2)} MB)`);

  // Clean up temp bundle
  fs.unlinkSync(bundlePath);
}

// ── main ──────────────────────────────────────────────────────────────────────

(async () => {
  console.log("=== Step 1: downloading missing modules ===");
  await downloadAll();

  console.log("\n=== Step 2: patching sources ===");
  patchSources();

  console.log("\n=== Step 3: bundling ===");
  const bundlePath = bundle();

  console.log("\n=== Step 4: assembling HTML ===");
  assemble(bundlePath);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
