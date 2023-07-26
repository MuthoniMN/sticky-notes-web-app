const http = require("http")

const app = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" })
    response.end("Heyyyyyyy")
})

const PORT = 4444