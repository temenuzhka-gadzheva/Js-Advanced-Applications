function solve(matrix){

let counter = 0;

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {

        let currentEl = matrix[row][col];
        if (isValidPosition(matrix, row, col - 1)) {

            if (matrix[row][col - 1] === currentEl) {
                counter++;
              
                matrix[row][col] = -1;
            }
        }

        if (isValidPosition(matrix, row, col + 1)) {

            if (matrix[row][col + 1] === currentEl) {
                counter++;
                matrix[row][col] = -1;
            }
        }

        if (isValidPosition(matrix, row - 1, col)) {

            if (matrix[row - 1][col] === currentEl) {
                counter++;
                matrix[row][col] = -1;
            }
        }
        if (isValidPosition(matrix, row + 1, col)) {

            if (matrix[row + 1][col] === currentEl) {
                counter++;
                matrix[row][col] = -1;
            }
        }
    }
}
return counter;

function isValidPosition(matrix, row, col) {
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix.length) {
        return true
    }

    return false
}
}

/*console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));*/

console.log(solve([['2', '2', '5', '7', '4'],
                   ['4', '0', '5', '3', '4'],
                   ['2', '5', '5', '4', '2']]
));
