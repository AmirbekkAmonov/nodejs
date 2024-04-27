const fs = require('fs');

const additionalContent = 'This is appended content.';
const fileName = 'message.txt';

try {
  fs.appendFileSync(fileName, additionalContent);
  console.log('Qo\'shimcha muvaffaqiyatli qo\'shildi: ' + fileName);
} catch (err) {
  console.error('Xato yuz berdi: ' + err);
}