const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Hello World! My First Node Server");
  })
  .listen(3768);
console.log("Server is running");
