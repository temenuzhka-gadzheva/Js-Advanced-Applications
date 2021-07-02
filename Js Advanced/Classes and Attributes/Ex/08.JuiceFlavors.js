function juiceStore(arr) {
    let bottles = new Map();

    arr.reduce((a, data) => {
        let [fruit, quantity] = data.split(' => ');
        quantity = Number(quantity);

        if (!a.hasOwnProperty(fruit)) {
            a[fruit] = 0;
        }
        a[fruit] += quantity;

        if (a[fruit] >= 1000) {
            if (!bottles.has(fruit)) {
                bottles.set(fruit, 0);
            }

            bottles.set(fruit, bottles.get(fruit) + parseInt(a[fruit] / 1000));
            a[fruit] %= 1000;
        }

        return a
    }, {});

    for (const [fruit, quantity] of bottles) {
        return `${fruit} => ${quantity}`;
    }
}

console.log(juiceStore(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
));

/*console.log(juiceStore(
    ['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549']
));*/