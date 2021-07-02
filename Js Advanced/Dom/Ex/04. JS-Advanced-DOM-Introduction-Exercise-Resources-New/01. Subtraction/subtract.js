function subtract() {
let getFirstEl = document.getElementById("firstNumber")
.value;
    getFirstEl = Number(getFirstEl);
let getSecondEl = document.getElementById("secondNumber")
.value;
getSecondEl = Number(getSecondEl);

let getResult = document.getElementById("result").textContent =getFirstEl - getSecondEl ;

console.log(getResult);
}