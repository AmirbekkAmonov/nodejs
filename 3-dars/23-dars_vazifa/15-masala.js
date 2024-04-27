const fs = require('fs');

const directoryPath = './23-dars_vazifa';

fs.readdir(directoryPath, (readError, files) => {
  if (readError) {
    console.error('FS operation failed');
  } else {
    console.log('Files in the directory:');
    files.forEach((file) => {
      console.log(file);
    });
  }
});