const path = require("path");
//Nomalization
console.log(
  "normalization: " + path.normalize("/MERNStack&ReactNative/NodeJs/..")
);
//Join
console.log(
  "Joint Path: " +
    path.join("/NodeJs", "hello", "NodeJs/newfolder", "tab", "..")
);
//Resolve
console.log("Resolve: " + path.resolve("path.js"));

//Extension
console.log("File Extention Name: " + path.extname("path.js"));
//BaseName
const filename = path.basename("/users/user/path.js");
console.log(filename);
