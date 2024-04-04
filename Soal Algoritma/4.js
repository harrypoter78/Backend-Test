function diagonalDifference(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let primaryDiagonalElements = [];
    let secondaryDiagonalElements = [];

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonalSum += matrix[i][i];
        primaryDiagonalElements.push(matrix[i][i]);

        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
        secondaryDiagonalElements.push(matrix[i][matrix.length - 1 - i]);
    }

    const primaryDiagonalString = primaryDiagonalElements.join(" + ");
    const secondaryDiagonalString = secondaryDiagonalElements.join(" + ");

    const difference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    return { difference, primaryDiagonalString, secondaryDiagonalString };
}

// main
const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const { difference, primaryDiagonalString, secondaryDiagonalString } = diagonalDifference(matrix);
console.log("Diagonal Pertama:", primaryDiagonalString);
console.log("Diagonal Kedua:", secondaryDiagonalString);
console.log("Hasil dari pengurangan jumlah diagonal matriks:", difference);
