import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const __dirname = import.meta.dirname;

import dotenv from "dotenv";
dotenv.config();

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Hello World!");
        res.end();
    } else if (req.method === "GET" && req.url === "/file") {
        const myPath = path.join(__dirname, "files", "text.txt");
        fs.readFile(myPath, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } else if (req.method === "GET" && req.url === "/html") {
        const myPath = path.join(__dirname, "files", "index.html");
        fs.readFile(myPath, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } else {
        res.end();
    }
});
const PORT = process.env.PORT || 4400;
server.listen(PORT, () => { console.log("Server ishqa tushdi:", PORT) });

// server.listen(3000, () => {
//     console.log("Ishladi");
// });
