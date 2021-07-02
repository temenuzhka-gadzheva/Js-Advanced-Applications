function solve(arr,rotations){
    for (let i = 0; i <rotations; i++) {
       let firstNum = arr.pop();
       arr.unshift(firstNum);    
    }
    return arr.join(' ');
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));