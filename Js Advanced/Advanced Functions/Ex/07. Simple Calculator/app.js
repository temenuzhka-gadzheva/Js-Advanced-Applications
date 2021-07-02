function calculator() {
    let firstValue;
    let secondValue;
    let result;

    return {
        init: (value1, value2, value) => {
            firstValue = document.querySelector(value1);
            secondValue = document.querySelector(value2);
            result = document.querySelector(value);
        },

        add: () => {
            result.value = Number(firstValue.value) + Number(secondValue.value);
            firstValue.value = '';
            secondValue.value = '';
        },

        subtract: () => {
            result.value = Number(firstValue.value) - Number(secondValue.value);
            firstValue.value = '';
            secondValue.value = '';
        }
    }
}

let rest = calculator();
let [sumButtons, substractButtons] = document.querySelectorAll('button');

rest.init('#num1','#num2','#result');
sumButtons.addEventListener('click', rest.add);
substractButtons.addEventListener('click',rest.add);



