

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