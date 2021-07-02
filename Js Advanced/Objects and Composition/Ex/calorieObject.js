function solve(input){
   const obj = {};
   
   for (let i = 0; i < input.length; i+=2) {
        let productName = input[i];
        let calories = input[i +1];
        obj[productName] = Number(calories);
   }
   return obj;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));