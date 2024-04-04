function countOccurrences(INPUT, QUERY) {
    let occurrences = [];
    for (let i = 0; i < QUERY.length; i++) {
        let count = 0;
        for (let j = 0; j < INPUT.length; j++) {
            if (QUERY[i] === INPUT[j]) {
                count++;
            }
        }
        occurrences.push(count);
    }
    return occurrences;
}

// main
const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const jumlahKemunculan = countOccurrences(INPUT, QUERY);
console.log("OUTPUT =", jumlahKemunculan);
