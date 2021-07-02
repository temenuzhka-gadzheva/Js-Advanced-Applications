function createFormatter(first, second, third, currencyFormatter) {
    return currencyFormatter.bind(null, first, second, third);
}

let formatter = createFormatter(',', '$', true, currencyFormatter);

function currencyFormatter(separetor, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separetor;
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

console.log(formatter(1234));