function breakfastRobot() {
    let traceElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let robotsReceipesMeals = {
        apple: { carbohydrate: 1, flavour: 2 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
    }

    let robotsFunctionallity = {

        restock: (microelement, quantity) => {
            traceElements[microelement] += quantity;

            return `Success`;
        },

        prepare: (productName, quantity) => {
            let components = Object.keys(robotsReceipesMeals[productName]);

            for (const component of components) {

                if (traceElements[component] < robotsReceipesMeals[productName][component] * quantity) {
                    return `Error: not enough ${component} in stock`;
                }
            }
            components.forEach(component => {
                traceElements[component] -= robotsReceipesMeals[productName][component] * quantity;

            });
            return `Success`;
        },

        report: () => {
            return Object.keys(traceElements)
                .reduce((acc, item) => {
                    acc.push(`${item}=${traceElements[item]}`);
                    return acc;
                }, [])
                .join(' ');
        },
    };

    return function (commands){
        let [command,productName,quantity] = commands.split(' ');
        quantity = Number(quantity);

        return robotsFunctionallity[command](productName,quantity);
    };

}

let manager = breakfastRobot();
console.log(manager('restock carbohydrates 10 '));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10 '));
console.log(manager('prepare burger 1 '));
console.log(manager('report'));