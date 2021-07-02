function solve(number){
return (x) =>x + number;
}
let add = solve(6);
console.log(add(5));
console.log(add(2));