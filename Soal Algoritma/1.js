function reverseAlphabet(word) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let reverseWord = '';
    let numbers = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (/[a-zA-Z]/.test(char)) {
            reverseWord = char + reverseWord;
        } else {
            numbers += char;
        }
    }
    return reverseWord + numbers;
}

// main
let string = "NEGIE1";
let hasil = reverseAlphabet(string);
console.log("Hasil =", hasil);
