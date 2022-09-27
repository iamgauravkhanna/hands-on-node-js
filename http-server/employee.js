const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile(`./employeeData.json`, "utf-8", (err, data) => {
            console.log(data);
            res.end(data);
        })
    }
});

server.listen(3008, '127.0.0.1', () => { console.log('http server started') });