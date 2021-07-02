function solution() {

    let result = '';
   let print = function(){
       console.log(result);
    }
    return {
        append: text => result += text,
        removeStart: n => result = result.substr(n),
        removeEnd: n => result = result.substr(0, result.length - n),
        print,
    };

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
