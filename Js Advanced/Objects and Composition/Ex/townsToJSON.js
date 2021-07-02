function solve(input) {

    let data = input.map(row => row.split('|')
        .filter(x => x != '').map(x => x.trim()));
    let prop = data.shift();

    let output = [];

    data.forEach(row => {
        let town = {
            'Town': row[0],
            'Latitude' : Number(Number(row[1]).toFixed(2)),
           'Longitude' : Number(Number(row[2]).toFixed(2)),
        }
        output.push(town);
    });
console.log(JSON.stringify(output));
}

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);