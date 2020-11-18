// NodeJs global objects are global in nature and available in all builtinModules. We do not need to include these objects in our application; rather they can be used directly. These objects are modules, functions, stings and object etc. Some of these objects are not actually in the global scope but in the module scope.

// Global Objects List:

//  ## __dirname
// ## __filename
// ## Console
// ## Process
// ## Buffer
// ## setImmediate(callback[,arg][,...])
// ## setInterval(callback, delay[,arg][,...])
// ## setTimeout(callback, delay[,arg][,...])
// ## clearImmediate(immedateObject)
// ## clearInterval(intervalObject)
// ## clearTimeout(timeoutObject)

console.log(__dirname);
console.log(__filename);
