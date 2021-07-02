function solve(array,startIndex,lastIndex){
if (!Array.isArray(array)) {
    return NaN;
}
if (startIndex < 0) {
    startIndex = 0;
}
if (lastIndex > array.length - 1) {
    rnd = array.length -1;
    rnd = array.length -1;
}
return array.slice(startIndex,lastIndex +1)
.reduce((acc,num) => acc + Number(num),0);
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));