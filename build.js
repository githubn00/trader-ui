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

function makeFontDataUri(fntName, pngName) {
  const fontDir = path.join(TERMINAL_DIR, "font");
  // Base64-encode the PNG texture
  const pngData = fs.readFileSync(path.join(fontDir, pngName));
  const pngUri = `data:image/png;base64,${pngData.toString("base64")}`;
  // Patch the .fnt XML: replace file="xxx_0.png" with the data URI
  let fnt = fs.readFileSync(path.join(fontDir, fntName), "utf8");
  fnt = fnt.replace(/file="[^"]+\.png"/, `file="${pngUri}"`);
  // Encode the patched .fnt as a data URI
  return `data:text/xml;base64,${Buffer.from(fnt).toString("base64")}`;
}

function patchSources() {
  const fontFile = path.join(TERMINAL_DIR, "CezRPkQL.js");
  let src = fs.readFileSync(fontFile, "utf8");

  // Build data URIs for all 6 font variants (1x and 2x each)
  const fonts = {
    axis:    { "1x": makeFontDataUri("axis.fnt",    "axis_0.png"),
                "2x": makeFontDataUri("axis2x.fnt",  "axis2x_0.png") },
    axisb:   { "1x": makeFontDataUri("axisb.fnt",   "axisb_0.png"),
                "2x": makeFontDataUri("axisb2x.fnt", "axisb2x_0.png") },
    values:  { "1x": makeFontDataUri("values.fnt",  "values_0.png"),
                "2x": makeFontDataUri("values2x.fnt","values2x_0.png") },
  };

  // Replace the Fp object — keep the Wp HiDPI ternary but use data URIs.
  // Include the trailing comma since Fp is part of a multi-variable const chain.
  const fp = `Fp = {
    axis:   Wp ? "${fonts.axis["2x"]}"   : "${fonts.axis["1x"]}",
    axisb:  Wp ? "${fonts.axisb["2x"]}"  : "${fonts.axisb["1x"]}",
    values: Wp ? "${fonts.values["2x"]}" : "${fonts.values["1x"]}",
  },`;

  const patched = src.replace(
    /Fp\s*=\s*\{[\s\S]*?axis[\s\S]*?axisb[\s\S]*?values[\s\S]*?\},/,
    fp
  );

  if (patched === src) {
    console.warn("  WARNING: Fp pattern not found in CezRPkQL.js — fonts may not load");
  } else {
    fs.writeFileSync(fontFile, patched, "utf8");
    console.log("  Inlined all font assets as data URIs");
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

  // Polyfill fetch() for data: URIs — Chrome blocks fetch("data:...") from file://
  // origin. Intercept those calls and decode them synchronously via atob().
  const dataFetchPatch = `<script>
(function() {
  var _fetch = window.fetch;
  window.fetch = function(url, opts) {
    if (typeof url === "string" && url.startsWith("data:")) {
      try {
        var comma = url.indexOf(",");
        var meta  = url.slice(5, comma);          // e.g. "text/xml;base64"
        var body  = url.slice(comma + 1);
        var mime  = meta.replace(";base64", "").split(";")[0] || "text/plain";
        var isB64 = meta.includes("base64");
        var bytes = isB64 ? atob(body) : decodeURIComponent(body);
        var buf   = new Uint8Array(bytes.length);
        for (var i = 0; i < bytes.length; i++) buf[i] = bytes.charCodeAt(i);
        var blob  = new Blob([buf], { type: mime });
        var res   = new Response(blob, { status: 200, headers: { "Content-Type": mime } });
        return Promise.resolve(res);
      } catch(e) { return Promise.reject(e); }
    }
    return _fetch.apply(this, arguments);
  };
})();
</script>`;
  html = html.replace("</head>", dataFetchPatch + "\n</head>");

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
