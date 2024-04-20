const http = require("http")
const myServer = http.createServer((req, res) => {
    res.writeHead(202, { 'Content-type': 'text/html' })//202 set own status number and content-type define which type response make here
    res.write(" <h1>I am your first server</h1>");
    res.end()
});
const port = 5000;
const hostname = "127.0.0.1"
myServer.listen(port, hostname, () => {
    console.log(`Server is running successfully at http ://${hostname}:${port}`)
})