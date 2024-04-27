const fs = require('fs');

const filename = './23-dars_vazifa/fileToRead.txt';

fs.readFile(filename, 'utf8', (readError, data) => {
    if (readError) {
        console.error('FS operation failed');
    } else {
        console.log('File content:');
        console.log(data);
    }
});