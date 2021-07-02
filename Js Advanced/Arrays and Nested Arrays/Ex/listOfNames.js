function solve(listOfNames){
listOfNames.sort()
.forEach((name,index) => {
    console.log(`${++index}.${name}`);
});
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));