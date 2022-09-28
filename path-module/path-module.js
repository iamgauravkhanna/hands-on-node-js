const path = require('path')

console.log(path.dirname("/Users/gaurav.khanna/code/hands-on-node-js/path/path-module.js"))

console.log(path.extname("path-module.1.js"))

const pathJson = path.parse("/Users/gaurav.khanna/code/hands-on-node-js/path/path-module.js") ;

console.log(pathJson)
console.log(pathJson.dir)
console.log(pathJson.root)