const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, {
          "Content-Type": "text/html",
        });
        return res.end("404 Not Found");
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      return res.end();
    });
  })
  .listen(8030);
console.log("Server running at http://127.0.0.1:8030/");
