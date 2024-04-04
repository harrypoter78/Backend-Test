function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = '';
    let longestLength = 0;
    for (let word of words) {
        if (word.length > longestLength) {
            longest = word;
            longestLength = word.length;
        }
    }
    return `${longest}: ${longestLength} character`;
}

// main
const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWordResult = longestWord(sentence);
console.log(longestWordResult);
