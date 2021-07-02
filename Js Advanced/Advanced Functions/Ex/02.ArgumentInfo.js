function solve() {
    let result = {};

    Array.from(arguments).forEach(row => {
        let typeOfRow = typeof row;

        console.log((`${typeOfRow}: ${row}`));
        if (!result[typeOfRow]) {
            result[typeOfRow] = 0;
        }
        result[typeOfRow]++;
    });
    Object.keys(result)
        .sort((a, b) => result[b] - result[a])
        .forEach(k => console.log(`${k} = ${result[k]}`));

}
console.log(solve('cat', 42, function () { console.log('Hello world!'); }));

