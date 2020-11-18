// Nodejs Timer functions are global functions. You do not need to use require() function in oder to use timer functions.
// List of Timer function:
//    Set timer functions:
//         ## setImmediate() : it is used to setImmediate.
//         ## setInterval()  : it is used to define a time interval.
//         ## setTimeout()   : it is used to execute a one-time callback after delay milliseconds.

//     Clear timer functions:
//         ## clearImmediate(immediateObject) : It is used to stop an immediateObject, as created by setImmediate
//         ## clearInterval(intervalObject)   : It is used to stop an intervalObject, as created by setInterval
//         ## clearTimeout(timeoutObject)     : It prevets a timeoutObject, as created by setTimeout

//setInterval0000000000000

// setInterval(function () {
//   console.log("setInterval: Hey 1000 milliseconds completed!...");
// }, 1000);

// var i = 0;
// console.log(i);
// setInterval(function () {
//   i++;
//   console.log(i);
// }, 1000);

// setTimeout(function () {
//   console.log("setTimeOut: Hey! 1000 milliseconds completed!...");
// }, 1000);

// var recursive = function () {
//   console.log("Hey! 1000 milliseconds completed!...");
//   setTimeout(recursive, 1000);
// };
// recursive();

function welcome() {
  console.log("Welcome to Learning NodeJS!..");
}
var id1 = setTimeout(welcome, 1000);
var id2 = setInterval(welcome, 1000);
clearTimeout(id1);
//clearInterval(id2);
