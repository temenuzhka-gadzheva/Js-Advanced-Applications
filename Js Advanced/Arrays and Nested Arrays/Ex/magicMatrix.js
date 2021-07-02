function solve(matrix) {
    let isMatrixMagic = true;
    for (let row = 0; row < matrix.length - 1; row++) {
        let sumOfFisrtRow = matrix[row]
            .reduce((a, b) => a + b, 0);
        let sumOfSecondRow = matrix[row + 1]
            .reduce((a, b) => a + b, 0);
        let sumOfFirstCol = 0;
        let sumOfSecondCol = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumOfFirstCol += matrix[row][col];
            sumOfSecondCol += matrix[row + 1][col];
        }
       if (sumOfFisrtRow !== sumOfSecondRow
        ||sumOfFirstCol !== sumOfSecondCol ) {
     isMatrixMagic = false;
         
           return isMatrixMagic;
       }
    }
    return isMatrixMagic;

}
/*solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );*/
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
    ));