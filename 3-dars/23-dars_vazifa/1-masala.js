const fs = require('fs');
function writeNumbers() {
    let numbers = '';
    for (let i = 1; i <= 100; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers += randomNumber + '\n';
    }
    fs.writeFileSync('sonlar.txt', numbers);
    console.log('Sonlar.txt fayliga tasodifiy sonlar muvaffaqiyatli yozildi.');
}
writeNumbers();
