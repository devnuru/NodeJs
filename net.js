const net = require("net");

var server = net
  .createServer((socket) => {
    socket.end("GoodBye\n");
  })
  .on("err", (err) => {
    //handle err here
    throw err;
  });
//grab a random port.
server.listen(() => {
  address = server.address();
  console.log("opened server on %j", address);
});
