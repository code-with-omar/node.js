const http = require("http")
const fs = require("fs")
const myServer = http.createServer((req, res) => {
    const handleFile = (statusCode, fileName) => {
        fs.readFile(fileName, (err, data) => {
            res.writeHead(200, { "content-type": "text/html" })
            res.write(data)
            res.end()
        })
    }
    if (req.url === '/') {
        handleFile(200, 'index.html')
    }
    else if (req.url === '/about') {
        handleFile(200, 'about.html')
    }
    else if (req.url === '/contact') {
        handleFile(200, 'contact.html')
    }
    else {
        handleFile(200, 'error.html')
    }
});
const port = 5000;
const hostname = "127.0.0.1"
myServer.listen(port, hostname, () => {
    console.log(`Server is running successfully at http ://${hostname}:${port}`)
})
