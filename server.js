const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const LOCAL_DIR = __dirname;
const REMOTE_HOST = "mt5-6.xm-bz.com";
const PORT = 3000;

const MIME = {
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".html": "text/html",
  ".png": "image/png",
  ".fnt": "application/xml",
  ".xml": "application/xml",
  ".wasm": "application/wasm",
};

function proxyToRemote(req, res) {
  const options = {
    hostname: REMOTE_HOST,
    port: 443,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      host: REMOTE_HOST,
      referer: `https://${REMOTE_HOST}/terminal`,
      "user-agent": "Mozilla/5.0",
    },
  };

  const proxy = https.request(options, (proxyRes) => {
    const headers = { ...proxyRes.headers };
    // Allow cross-origin for local dev
    headers["access-control-allow-origin"] = "*";
    res.writeHead(proxyRes.statusCode, headers);
    proxyRes.pipe(res);
  });

  proxy.on("error", (err) => {
    console.error(`Proxy error for ${req.url}:`, err.message);
    res.writeHead(502);
    res.end("Proxy error");
  });

  req.pipe(proxy);
}

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];

  // Serve terminal.html at root
  const filePath =
    urlPath === "/" ? path.join(LOCAL_DIR, "terminal.html") : path.join(LOCAL_DIR, urlPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "access-control-allow-origin": "*",
    });
    fs.createReadStream(filePath).pipe(res);
    console.log(`[local]  ${req.url}`);
  } else {
    console.log(`[proxy]  ${req.url} → ${REMOTE_HOST}`);
    proxyToRemote(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`\nServing at http://localhost:${PORT}/terminal.html`);
  console.log(`Missing files proxied to https://${REMOTE_HOST}\n`);
});
