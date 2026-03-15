// os module gives the information about the operating system 
// cpu details, memeory, platform, hostname, network info

// import OS module 
const os = require("os");
// get the os platform
const platform = os.platform();
console.log("operating system", platform)

// get the os architecture 
console.log(os.arch());

console.log(os.cpus())

console.log(os.totalmem())

console.log(os.freemem())

console.log(os.hostname())

console.log(os.type())

console.log(os.version())

console.log(os.uptime())

console.log(os.userInfo())