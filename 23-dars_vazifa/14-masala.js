const fs = require('fs');

const filename = './23-dars_vazifa/fileToRemove.txt';

fs.access(filename, fs.constants.F_OK, (accessError) => {
  if (accessError) {
    console.error('FS operation failed');
  } else {
    fs.unlink(filename, (unlinkError) => {
      if (unlinkError) {
        console.error('FS operation failed');
      } else {
        console.log('File deleted successfully!');
      }
    });
  }
});