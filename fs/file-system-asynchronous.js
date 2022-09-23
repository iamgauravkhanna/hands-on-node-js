const fs = require('fs');

// For Asynchronous functions, callback is neccessary
fs.writeFile("fileUsingAsync.txt","data for async file",(err)=>{
    console.log('*** Any Error encountered? ' + err)
    console.log('*** File created successfully')
});

// append file
fs.appendFile("fileUsingAsync.txt","\n\nthis is second file", ()=> {
    console.log('*** File appended successfully')
});