function numbers(num1, num2){
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);
    let result = 0;
for(i = firstNumber; i <= secondNumber; i++){
    result += i;
   
}return result;
}

numbers(1, 5);