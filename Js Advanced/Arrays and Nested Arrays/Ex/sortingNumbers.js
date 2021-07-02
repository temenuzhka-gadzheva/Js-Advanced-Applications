function solve(numbers){
   numbers.sort((a,b) => a-b);
 let newArr = [];

 while (numbers.length) {
     newArr.push(numbers.shift());
     newArr.push(numbers.pop());
 }
 return newArr.filter(n => n != undefined)
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));