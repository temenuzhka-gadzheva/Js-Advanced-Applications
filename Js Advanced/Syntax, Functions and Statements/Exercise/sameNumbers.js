
function sameNumbers(number) {

    number = String(number);
 
    let isTrueOrFalse = true;
    let sumOfDigits = 0;
 
    let firstDigitOfNumber = number[0];

    for (let i = 0; i < number.length; i++) {
        
        sumOfDigits += +number[i];
 
        if (number[i] !== firstDigitOfNumber) {
            isTrueOrFalse = false;
        }
    }
 
    console.log(isTrueOrFalse);
    console.log(sumOfDigits);
}
sameNumbers(1234);
