import http from "http";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(process.cwd(), "public", "index.html");
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        })
    }else if(req.method === 'POST' && req.url === '/user')
    filePath = path.join(process.cwd(), "public", "data.json");
});
server.listen(port, () => {
    console.log("Ishladii");
})