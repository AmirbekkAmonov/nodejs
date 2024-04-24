//    4-masala...





// dependencies: Bu  loyihalar  uchun kerakli  paketlarni
// va ularning versiyalarini ifodalaydi.loyiha ishga tushirilganda avtomatik
// yuklanadi. dependencies qismidagi paketlar loyiha tomonidan ishlatiladi.

// devDependencies: Bu  esa loyihani rivojlanish va
// test qilish uchun kerakli paketlarni ifodalaydi. devDependenciesdagi
// paketlar faqat tarqatilgan loyiha rivojlanishida yoki testlarni bajarishda
// kerak bo'ladi.

// scripts: Bu  loyiha uchun kerakli skriptlarni ifodalaydi.
// BIz bu qismda o'zimizni maxsus komandalarimizni yaratishimiz mumkin. Masalan, test
// o'tkazish, loyiha ishga tushirish, loyihani rivojlantirish jarayonida ishlatishimiz mumkin.
// Skriptlarni boshqarish uchun npm run buyrug'i foydalaniladi. Skriptlar  loyiha
// boshqaruvini avtomatlashtirilgan qismini ta'minlaydi.

// license: Loyiha uchun litsenziyani ifodalaydi. U loyihang foydalanish shartlarini
// va cheklovlarini belgilaydi.












//    5-masala...


function flattenArray(arr, n) {
    if (n === 0) {
        return arr;
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flattenArray(arr[i], n - 1));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n1 = 0;
console.log(flattenArray(arr1, n1));
const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n2 = 1;
console.log(flattenArray(arr2, n2));
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n3 = 2;
console.log(flattenArray(arr3, n3));







//  6-masala...



function countWordOccurrences(arr) {
    const wordCount = {};
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        if (wordCount.hasOwnProperty(word)) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}
const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const wordOccurrences = countWordOccurrences(animals);
console.log(wordOccurrences);