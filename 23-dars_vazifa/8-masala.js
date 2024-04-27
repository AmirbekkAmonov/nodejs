const fs = require('fs');

const message = 'Hello World!';
const fileName = 'message.txt';
try {
  fs.writeFileSync(fileName, message);
  console.log('Fayl muvaffaqiyatli yaratildi: ' + fileName);
} catch (err) {
  console.error('Xato yuz berdi: ' + err);
}