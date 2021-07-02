function solve(numbers){

numbers = numbers.map(Number);
let sortedNumbers = [];

for (const element of numbers) {

    if (element < 0) {
sortedNumbers.unshift(element);
} else{
sortedNumbers.push(element);
}
}

sortedNumbers.forEach(n => console.log(n));
}
//solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
/* ако имаме стринг names.sort(function(a,b){
return a.localCompare(b);
});*/