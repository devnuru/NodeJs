// const fs = require("fs");

// let readStream = fs.createReadStream("./demofile.txt");

// //write to the console when the file is opened
// readStream.on("open", () => {
//   console.log("This file is open!");
// });

// The EventEmitter Object
// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

// To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

// To fire an event, use the emit() method.

const events = require("events");

let eventtEmitter = new events.EventEmitter();

//Create an event handler:

let myFirstEventHandler = () => {
  console.log("I hear a scream!");
};

// Assign the event handler to an event:

eventEmitter.on("scream", myFirstEventHandler);

//Fire The 'scream' event:

eventEmitter.emit("scream");
