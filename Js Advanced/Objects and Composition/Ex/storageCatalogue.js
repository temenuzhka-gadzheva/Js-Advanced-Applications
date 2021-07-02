
function solve(input) {
    const products = {};
    for (const product of input.sort()) {
        const [productName, productPrice] = product.split(' : ');
        let firstCapitalLetter = productName[0];

        if (!products[firstCapitalLetter]) {
            products[firstCapitalLetter] = [];
        }
        products[firstCapitalLetter].push({ name: productName, price: Number(productPrice) })

    }

    let output = [];

    Object.entries(products).forEach(arg => {
        let prices = arg[1]
            .map(i => `  ${i.name}: ${i.price}`)
            .join('\n');

        let result = `${arg[0]}\n${prices}`;
        output.push(result);
    })
    return output.join('\n');
}
console.log(solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));