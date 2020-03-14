const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
	console.log(`Request was me: ${req.url}`);
	res.writeHead(200, { "Content-Type": "application/json" });
	let myObj = {
		name: "Ryu",
		job: "ninja",
		age: 29
	};
	res.end(JSON.stringify(myObj));
});

server.listen(5050, "127.0.0.1");
console.log("Listening to port 5050");
