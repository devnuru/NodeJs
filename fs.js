// Node.js as a File Server
// The Node.js file system module allow you to work with the file system on your computer.

// To include the File System module, use the require() method:

// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files

const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    fs.readFile("./fsdemo1.html", (err, data) => {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.write(data);
      return res.end();
    });
  })
  .listen(3768);
console.log("Server is running");
