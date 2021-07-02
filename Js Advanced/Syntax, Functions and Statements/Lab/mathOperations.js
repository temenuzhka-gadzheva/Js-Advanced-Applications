
function mathOperations(firstNum, secondNum, operation){
    let result;
 switch(operation){
    case'+': result = firstNum + secondNum; break;
    case'-': result = firstNum - secondNum;break;
    case'*': result = firstNum * secondNum; break;
    case'/': result = firstNum / secondNum; break;
    case'%':result  = firstNum % secondNum; break;
    case'**': result = firstNum ** secondNum; break;
    }
    console.log(result);
 }
mathOperations(5.5, 6, '+');
mathOperations(5.5, 6, '-');
mathOperations(5.5, 6, '*');
mathOperations(5.5, 6, '/');
mathOperations(5.5, 6, '%');
mathOperations(5.5, 6, '**');
