#!/usr/bin/env node
/**
 * Builds a single self-contained HTML file from the terminal assets.
 * - All local JS modules are embedded as source strings and loaded via blob URLs at runtime.
 * - Unknown (lazy/remote) module imports are rewritten to fetch from the remote CDN.
 * - Font/asset base path is patched to the remote server.
 * - CSS is inlined.
 */

const fs = require("fs");
const path = require("path");

const TERMINAL_DIR = path.join(__dirname, "terminal");
const OUT_FILE = path.join(__dirname, "index.html");
const REMOTE_BASE = "https://mt5-6.xm-bz.com/terminal";

// ── 1. Load all local JS modules ────────────────────────────────────────────

const jsFiles = fs
  .readdirSync(TERMINAL_DIR)
  .filter((f) => f.endsWith(".js"))
  .sort();

const sources = {};
for (const file of jsFiles) {
  sources[file] = fs.readFileSync(path.join(TERMINAL_DIR, file), "utf8");
}

// ── 2. Build dependency graph (static + dynamic imports) ───────────────────

const importRe = /(?:from\s+|import\s*\(\s*)["']\.\/([\w\-\.]+\.js)/g;

function getDeps(code) {
  const deps = new Set();
  let m;
  importRe.lastIndex = 0;
  while ((m = importRe.exec(code)) !== null) deps.add(m[1]);
  return deps;
}

const graph = {};
for (const file of jsFiles) {
  graph[file] = getDeps(sources[file]);
}

// ── 3. Topological sort (Kahn's algorithm) ──────────────────────────────────

function topoSort(graph) {
  const inDegree = {};
  const adj = {};
  for (const node of Object.keys(graph)) {
    inDegree[node] = inDegree[node] || 0;
    adj[node] = adj[node] || [];
    for (const dep of graph[node]) {
      if (graph[dep]) {
        // only local deps
        adj[dep] = adj[dep] || [];
        adj[dep].push(node);
        inDegree[node] = (inDegree[node] || 0) + 1;
      }
    }
  }
  const queue = Object.keys(graph).filter((n) => !inDegree[n]);
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const dependent of adj[node] || []) {
      inDegree[dependent]--;
      if (inDegree[dependent] === 0) queue.push(dependent);
    }
  }
  // Append any remaining (cycles / not reached)
  for (const node of Object.keys(graph)) {
    if (!order.includes(node)) order.push(node);
  }
  return order;
}

const order = topoSort(graph);
console.log("Module order:", order);

// ── 4. Escape source strings for embedding in JS ────────────────────────────

function escapeForTemplateLiteral(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

// ── 5. Patch font base path in CezRPkQL.js ──────────────────────────────────

if (sources["CezRPkQL.js"]) {
  sources["CezRPkQL.js"] = sources["CezRPkQL.js"].replace(
    /Rp\s*=\s*["']\/terminal["']\.replace\(.*?\)/,
    `Rp = "${REMOTE_BASE}"`
  );
}

// ── 6. Build embedded module map ─────────────────────────────────────────────

const moduleEntries = order
  .map((file) => `  ${JSON.stringify(file)}: \`${escapeForTemplateLiteral(sources[file])}\``)
  .join(",\n");

// ── 7. Build runtime bootstrap ───────────────────────────────────────────────

const REMOTE_ESCAPED = REMOTE_BASE.replace(/'/g, "\\'");

const bootstrap = `
<script>
(function() {
  var REMOTE = '${REMOTE_ESCAPED}';
  var order = ${JSON.stringify(order)};
  var rawSources = {
${moduleEntries}
  };

  var blobUrls = {};

  // Rewrite ./dep.js → blob URL (if local) or remote URL (if unknown)
  function rewrite(code) {
    // static: from "./X.js"  or  from './X.js'
    code = code.replace(/from\\s+(["'])\\.\\/([\\w\\-\\.]+\\.js)\\1/g, function(_, q, dep) {
      return 'from "' + (blobUrls[dep] || (REMOTE + '/' + dep)) + '"';
    });
    // dynamic: import("./X.js")  or  import('./X.js')
    code = code.replace(/import\\s*\\(\\s*(["'])\\.\\/([\\w\\-\\.]+\\.js)\\1\\s*\\)/g, function(_, q, dep) {
      return 'import("' + (blobUrls[dep] || (REMOTE + '/' + dep)) + '")';
    });
    // dynamic with .then: import("./X.js").then(...)
    return code;
  }

  // Process in topological order so deps are resolved first
  for (var i = 0; i < order.length; i++) {
    var name = order[i];
    var code = rewrite(rawSources[name]);
    var blob = new Blob([code], { type: 'application/javascript' });
    blobUrls[name] = URL.createObjectURL(blob);
  }

  // Dynamically import the entry point
  var entryBlob = blobUrls['CQSQNu0h.js'];
  if (!entryBlob) { console.error('Entry point not found'); return; }

  var script = document.createElement('script');
  script.type = 'module';
  script.src = entryBlob;
  document.head.appendChild(script);
})();
</script>`;

// ── 8. Read and patch terminal.html ──────────────────────────────────────────

let html = fs.readFileSync(path.join(__dirname, "terminal.html"), "utf8");

// Remove the original <script type="module"> entry point tag
html = html.replace(/<script\s+type="module"\s+src="[^"]*"><\/script>/, "");

// Inline the CSS (replace <link rel="stylesheet" href="/terminal/...css">)
html = html.replace(
  /<link\s+rel="stylesheet"\s+href="\/terminal\/([^"]+\.css)"[^>]*>/,
  (_, cssFile) => {
    const cssPath = path.join(TERMINAL_DIR, cssFile);
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, "utf8");
      return `<style>${css}</style>`;
    }
    return _;
  }
);

// Inject bootstrap before </head>
html = html.replace("</head>", bootstrap + "\n</head>");

// ── 9. Write output ──────────────────────────────────────────────────────────

fs.writeFileSync(OUT_FILE, html, "utf8");
const size = fs.statSync(OUT_FILE).size;
console.log(`\nBuilt: ${OUT_FILE} (${(size / 1024).toFixed(1)} KB)`);
