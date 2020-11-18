// NodeJs OS provides some basic operating system related utility functions. Lets see the list generally used function or methods.

// 1. os.arch() => this method is used to fetch the operating system CPU architecture.
// 2. os.cpus() => this method is used to fetch an array of objects containing information about each cpu/core installed: model, speed(in MHz), and time (an object containing the number of milliseconds the cpu/core spent in: user, nice, sys, idle, and)

// 3.os.endianness() => this method return the endianness of the cpu. Its possible values are 'BE' for big endian or 'LE' for little endian.
// 4. os.freemem() => this method returns the amount of free system memory in Bytes.
// 5. os.homedir() => this method returns the home directory of the current user.
// 6.os.hostname() => this method is used to returns the host name of the operating system.
// 7.os.loadavg()  => thisa method returns an array containing the 1, 5 and 15 minute load average is a time fraction taken by system   activity, calculad by the oprating system and expressed as a fractional number.
// 8. os.networkInterfaces() => this method returns a list of network interfaces.
// 9. os.platform() => this method returns the running comuter i.e. 'darwin', 'win32', 'freebsd', 'linux', 'sunos' etc
// 10. os.release() => this method returns the operating system release.
// 11. os.tmpdir() => this method returns the operating systems default directory for temporary files.
// 12. os.totalmem() => this method returns the total amount of system memory in bytes .
// 13. os.type() => this method returns the operating system name. For example 'linux' on linux, 'darwin' on os x and 'windows_nt' on windows.
// 14. os.uptime() => this method returns the system uptime in seconds.
// 15. os.userInfo([options]) => This method returns a subset of the passward file entry for the current effective user.

const os = require("os");

console.log("os.arch(): \n", os.arch());
console.log("os.cpus(): \n", os.cpus());
console.log("os.endianness(): \n", os.endianness());
console.log("os.freemem(): \n", os.freemem());
console.log("os.homedir(): \n", os.homedir());
console.log("os.hostname(): \n", os.hostname());
console.log("os.loadavg(): \n", os.loadavg());
console.log("os.networkInterfaces(): \n", os.networkInterfaces());
console.log("os.platform(): \n", os.platform());
console.log("os.release(): \n", os.release());
console.log("os.tmpdir(): \n", os.tmpdir());
console.log("os.totalmem(): \n", os.totalmem());
console.log("os.type(): \n", os.type());
console.log("os.uptime(): \n", os.uptime());
console.log("os.userInfo(): \n", os.userInfo());
