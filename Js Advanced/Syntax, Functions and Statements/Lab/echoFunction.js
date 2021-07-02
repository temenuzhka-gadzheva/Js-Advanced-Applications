 /* let value = 'Hello, JavaScript!';
function leghtOfText(value){
    console.log(value.length);
    console.log(value);
}
leghtOfText(value); */
/*
function squareOfStars([star]){
    for( row =0; row < star; row++){
        if(row == 0 || row == star - 1){
            console.log('*', String.repeat(n));
            continue;
        }
        console.log(`*${' '.String.repeat(n - 2)}*`);
    }
}
console.log(squareOfStars(6));*/

function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b)=>a + b);
    aggregate(elements, 0, (a, b)=>a + 1 / b);
    aggregate(elements, "", (a, b)=>a + b);
 
    function aggregate(arr, initialValue, func) {
        let value = initialValue;
        for (let i = 0; i < arr.length; i++) {
            value = func(value, arr[i]);
        }
        console.log(value);
    }
}
 
aggregateElements([1, 2, 3]);



 

