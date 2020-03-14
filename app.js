const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
	console.log(`Request was me: ${req.url}`);
	res.writeHead(200, { "Content-Type": "text/html" });
});

server.listen(5050, "127.0.0.1");
console.log("Listening to port 5050");
