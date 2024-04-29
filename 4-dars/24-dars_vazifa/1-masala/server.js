import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/home') {
        fs.readFile(path.join(__dirname, 'public', 'home.html'), 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(content);
                res.end();
            }
        });
    }
    else if (url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(content);
                res.end();
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});