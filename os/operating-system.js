const os = require('os')

// Architecure Type - x64 or x86
console.log(os.arch())

// Platform
console.log(os.platform())

// Free Memory
console.log(os.freemem()/1024/1024/1024)

// Total Memory
console.log(os.totalmem()/1024/1024/1024)