const fs = require('fs');

const directoryPath = './'; 
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Xato yuz berdi: ' + err);
    return;
  }
  console.log('Fayllar ro\'yxati:');
  files.forEach(file => {
    console.log(file);
  });
});