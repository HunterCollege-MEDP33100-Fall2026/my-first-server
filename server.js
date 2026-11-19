// Your server code goes here. Host your server on localhost:3000

const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/pinata.png") {

    fs.readFile("pinata.png", (err, data) => {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
    });
  } else {

    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});