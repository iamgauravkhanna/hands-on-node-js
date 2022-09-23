const fs = require("fs");

// create new file
fs.writeFileSync("fileUsingNodeJS.txt","this file is created via NodeJS");

// append file
fs.appendFileSync("fileUsingNodeJS.txt","\n\nthis is second file");

// read file
console.log(fs.readFileSync("fileUsingNodeJS.txt",'utf8'));

const bufferedData = fs.readFileSync("fileUsingNodeJS.txt")

const dataAsString = bufferedData.toString();

console.log("\n" + dataAsString);

// rename file
fs.renameSync("fileUsingNodeJS.txt","renamedFile.txt")