
  
function solve(input) {
    let all = new Map;
    for (let allPrices of input) {
        let [townName, productName, productPrice] = allPrices.split(/\s+\|\s+/g);
        if (!all.has(productName))
            all.set(productName, new Map);
        all.get(productName).set(townName, Number(productPrice));
    }

    for (let [productName, townsName] of all) {
        let minPrice = Number.MAX_VALUE;
        let minPriceOfTown = '';
        for (let [townName, productPrice] of townsName) {
            if (productPrice < minPrice) {
                minPrice = productPrice;
                minPriceOfTown = townName;
            }
        }

        console.log(`${productName} -> ${minPrice} (${minPriceOfTown})`);
    }
}


solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]
);


