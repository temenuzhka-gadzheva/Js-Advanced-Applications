function solve(matrix) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;
   
    matrix.forEach(row => {
        leftDiagonal += row[firstIndex++];
        rightDiagonal += row[secondIndex--];
    });
    console.log(leftDiagonal + ' ' + rightDiagonal);
}

solve([[3, 5, 17],
      [-1, 7, 14],
      [1, -8, 89]]
);