function buyFruit(fruit,weightInGrams,moneyPerKilo){

    let weightInKilo = weightInGrams / 1000;
    let neededMoney = weightInKilo * moneyPerKilo;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}

buyFruit('orange', 2500, 1.80);
buyFruit('apple', 1563, 2.35);
