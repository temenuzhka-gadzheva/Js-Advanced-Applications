class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = {};
    }

    loadProducts(products) {
        for (let i = 0; i < products.length; i++) {
            let [productName, productQuantity, productTotalPrice] = products[i].split(' ');

            if (Number(productTotalPrice) > this.budgetMoney) {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                continue;
            } else {
                this.budgetMoney -= Number(productTotalPrice);

                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += Number(productQuantity);

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        this.menu[meal] = {
            products: neededProducts,
            price: Number(price)
        }

        if (Object.keys(this.menu).length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else if (Object.keys(this.menu).length > 1) {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        let resultString = [];

        for (const meal in this.menu) {
            resultString.push(`${meal} - $ ${this.menu[meal].price}`);
         }

        return resultString.join('\n');
    }

    makeTheOrder(meal) {
        if (!Object.keys(this.menu).includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let mealCanBeCooked = true;

        this.menu[meal].products.forEach(x => {
            let [productName, productQuantity] = x.split(' ');

            if (!this.stockProducts[productName] || this.stockProducts[productName] < Number(productQuantity)) {
                mealCanBeCooked = false;
            }
        })
    }

}

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

