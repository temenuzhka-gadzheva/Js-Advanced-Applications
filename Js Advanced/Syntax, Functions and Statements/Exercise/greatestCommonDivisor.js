function greatestNumberDivision(first, second){
    first = Math.abs(first);
    second = Math.abs(second);

    while(second){
        let result = second;
        second = first % second;
        first = result;

    }
    return first;
}
console.log(greatestNumberDivision(9, 3));