const http = require("http")
// http.createServer((req, res) => {
//     res.end("I am your first server");
// }).listen(5000);

const myServer = http.createServer((req, res) => {
    res.end(" <h2>I am your first server</h2>");
});
const port = 5000;
const hostname = "127.0.0.1"
myServer.listen(port, hostname, () => {
    console.log(`Server is running successfully at http ://${hostname}:${port}`)
})