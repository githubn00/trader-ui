const http = require("http");
const fs = require("fs");
const path = require("path");

const LOCAL_DIR = __dirname;
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

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];

  // Serve terminal.html at root and /terminal
  const filePath =
    (urlPath === "/" || urlPath === "/terminal") ? path.join(LOCAL_DIR, "terminal.html") : path.join(LOCAL_DIR, urlPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "access-control-allow-origin": "*",
    });
    fs.createReadStream(filePath).pipe(res);
    console.log(`[local]  ${req.url}`);
  } else {
    console.log(`[404]    ${req.url}`);
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`\nServing at http://localhost:${PORT}/terminal`);
  console.log(`All files served locally\n`);
});
