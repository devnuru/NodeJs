// Node.js TLS/SSL
// What is TLS/SSL
// TLS stands for Transport Layer Security. It is the successor to Secure Sockets Layer (SSL). TLS along with SSL is used for cryptographic protocols to secure communication over the web.

// TLS uses public-key cryptography to encrypt messages. It encrypts communication generally on the TCP layer.

// What is public-key cryptography
// In public-key cryptography, each client and each server has two keys: public key and private key. Public key is shared with everyone and private key is secured. To encrypt a message, a computer requires its private key and the recipient?s public key. On the other hand, to decrypt the message, the recipient requires its own
// You have to use require('tls') to access this module.

// Syntax:

// var tls = require('tls');
// The tls module uses OpenSSL to attain Transport Layer Security and Secure Socket Layer. TLS/SSL is a public/private key infrastructure. Each client and each server must have a private key.

// A private key can be created like this:

// openssl genrsa -out ryans-key.pem 1024
// All severs and some clients need to have a certificate. Certificates are public keys signed by a Certificate Authority or self-signed. To get certificate, you have to create a "Certificate Signing Request" (CSR) file.

// A certificate can be created like this:

// openssl req -new -key ryans-key.pem -out ryans-csr.pem
// To create a self-signed certificate with the CSR:

// openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
// const tls = require("tls");
// const http = require("http");

// function connected(stream) {
//   if (stream) {
//     // socket connected
//     stream.write("GET/HTTP/1.0\n\rHost:encrypted.google.com:443\n\r\n\r");
//   } else {
//     console.log("Connected Failed");
//   }
// }
// //Needed to keep socket variable in scope
// var dummy = this;
// // Try to connect to the server
// dummy.socket = tls.connect(443, "encrypted.google.com", () => {
//   // Callback call only after successful soket connection
//   dummy.connected = true;
//   if (dummy.socket.authorized) {
//     // authorized successful
//     dummy.socket.setEncoding("utf-8");
//     connected(dummy.socket);
//   } else {
//     // authorized failed
//     console.log(dummy.socket.authorizationError);
//     connected(null);
//   }
// });

// dummy.socket.addListener("error", (error) => {
//   if (!dummy.connected) {
//     // socket was not connected, notify callback
//     connected(null);
//   }
//   console.log("Fail");
//   console.log(error);
// });
// // dummy.socket.addListener("close", () => {
// //   //do something
// // });

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello World");
//   })
//   .listen(8081);

// console.log("Server running at http://127.0.0.1:8081/");

// var tls = require("tls"),
//   fs = require("fs"),
//   colors = require("colors"),
//   msg = [
//     ".-..-..-.  .-.   .-. .--. .---. .-.   .---. .-.",
//     ": :; :: :  : :.-.: :: ,. :: .; :: :   : .  :: :",
//     ":    :: :  : :: :: :: :: ::   .': :   : :: :: :",
//     ": :: :: :  : `' `' ;: :; :: :.`.: :__ : :; ::_;",
//     ":_;:_;:_;   `.,`.,' `.__.':_;:_;:___.':___.':_;",
//   ].join("\n").cyan;

// var options = {
//   key: fs.readFileSync("private-key.pem"),
//   cert: fs.readFileSync("public-cert.pem"),
// };

// tls
//   .createServer(options, function (s) {
//     s.write(msg + "\n");
//     s.pipe(s);
//   })
//   .listen(8000);

var tls = require("tls"),
  fs = require("fs");

var options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("public-cert.pem"),
};

var conn = tls.connect(8000, options, function () {
  if (conn.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + conn.authorizationError);
  }
  console.log();
});

conn.on("data", function (data) {
  console.log(data.toString());
  conn.end();
});
