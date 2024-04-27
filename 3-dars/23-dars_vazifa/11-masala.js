const fs = require('fs');

const directoryPath = './23-dars_vazifa';
const fileName = 'fresh.txt';
const content = 'I am fresh and young';

fs.writeFile(`${directoryPath}/${fileName}`, content, { flag: 'wx' }, (err) => {
    if (err) {
        console.error('FS operation failed');
        return;
    }
    console.log(`${fileName} muvaffaqiyatli yaratildi.`);
});