const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('Xato: Fayl topilmadi.');
    } else {
      console.error('Xato: Fayl o\'qishda xatolik yuz berdi.');
    }
  } else {
    console.log('Fayl tarkibi:');
    console.log(data);
  }
});