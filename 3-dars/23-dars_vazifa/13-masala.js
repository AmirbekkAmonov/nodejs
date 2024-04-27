const fs = require('fs');

const currentFilename = './23-dars_vazifa/as.txt';
const newFilename = './23-dars_vazifa/properFilename.md';

fs.access(currentFilename, fs.constants.F_OK, (accessError) => {
  if (accessError) {
    console.error('FS operation failed');
  } else {
    fs.access(newFilename, fs.constants.F_OK, (newFileAccessError) => {
      if (!newFileAccessError) {
        console.error('FS operation failed');
      } else {
        fs.rename(currentFilename, newFilename, (renameError) => {
          if (renameError) {
            console.error('FS operation failed');
          } else {
            console.log('File renamed successfully!');
          }
        });
      }
    });
  }
});