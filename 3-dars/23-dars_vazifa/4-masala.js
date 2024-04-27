const os = require('os');

// kompyuteringizning host nomini olish
const hostname = os.hostname();

// foydalanuvchi nomini olish
const username = os.userInfo().username;

// Ma'lumotlarni konsolga chiqarish
console.log(`Hostname: ${hostname}, Username: ${username}`);