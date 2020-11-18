var http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World");
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
console.log(__filename);
