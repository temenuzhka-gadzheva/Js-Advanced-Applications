function solve(data, criterials) {
    function rowSplitted(row) {
        return row.split('|');
    }
    function convert([destination, price, status]) {
        return new Ticket(destination, Number(price), status);
    }
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const sorting = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return data
        .map(rowSplitted)
        .map(convert)
        .sort(sorting[criterials])

}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));