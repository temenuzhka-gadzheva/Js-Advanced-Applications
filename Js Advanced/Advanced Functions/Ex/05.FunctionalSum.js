function solve(firstNumber) {

    function calculate(secondNumber) {
        firstNumber += secondNumber;
        return calculate;
    }
    calculate.toString = () => firstNumber;
    return calculate;
}
console.log(solve(1)(6)(-3));