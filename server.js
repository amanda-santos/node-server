const http = require('http')
const fs = require('fs').promises

const server = http.createServer(function(req, res) {
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html")
        res.writeHead(200)
        res.end(contents)
    })
    .catch(err => {
        res.writeHead(500)
        res.end(err)
        return
    });
})

const port = 3456
server.listen(port, function() {
  console.log(`Escutando a ${porta}`);
})