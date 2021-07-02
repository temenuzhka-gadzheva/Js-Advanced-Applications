function Fib(){

    let [firstNum,secodnNum] = [0,1];
    return ()=>{
        let temp = firstNum+ secodnNum;
        firstNum = secodnNum;
        secodnNum  = temp;
        return firstNum;

    }
}

let fib = Fib();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());