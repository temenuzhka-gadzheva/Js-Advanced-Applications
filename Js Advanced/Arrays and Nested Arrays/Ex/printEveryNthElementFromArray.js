function solve(arr,number){
    let newArr =[];
for (let i = 0; i < arr.length; i+=number) {
   newArr.push(arr[i]);
}
return newArr;

}
console.log(solve(['1', 
'2', 
'3', 
'4', 
'5'], 
6
));