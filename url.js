// The Built-in URL Module
// The URL module splits up a web address into readable parts.

// To include the URL module, use the require() method:

// Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

const http = require('http');
const url = require('url');
const addr = "http:localhost:8080/default.htm?year=2020&month=february";
const q = url.parse(addr, true);

console.log(q.hostname); //returns 'localhost:8080
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2020&month=february'

const qdata = q.query; // returns an object: { year: 2020, month: 'february'}
console.log(qdata.month); //returns 'february'


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');