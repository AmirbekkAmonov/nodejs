const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'my_nodejs_files');
fs.mkdirSync(directoryPath);
console.log('my_nodejs_files katalogi yaratildi.');

const filePath = path.join(directoryPath, 'hello_world.txt');
fs.writeFileSync(filePath, 'Hello, world!');
console.log('hello_world.txt fayli yaratildi.');

const fileContent = fs.readFileSync(filePath, 'utf8');
console.log('hello_world.txt faylining tarkibi:');
console.log(fileContent);

const currentDate = new Date().toLocaleString();
fs.appendFileSync(filePath, '\n' + currentDate);
console.log('Faylga hozirgi sana va vaqtni qo\'shildi.');