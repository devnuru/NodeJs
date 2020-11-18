const zlib = require("zlib");
const fs = require("fs");

var gzip = zlib.createGzip();
var r = fs.createReadStream("./demozip.txt");
var w = fs.createWriteStream("./mygip.gz");
r.pipe(gzip).pipe(w);
