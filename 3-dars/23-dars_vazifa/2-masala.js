const fs = require('fs');
function readNumbers() {
    const data = fs.readFileSync('sonlar.txt', 'utf8');
    const numbers = data.trim().split('\n').map(Number);
    return numbers;
}
const numbersArray = readNumbers();
console.log('Sonlar.txt fayldan o\'qilgan sonlar:', numbersArray);