class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        // _budget  е като поле в C#
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    shopping(product) {
        let [item, price] = product;
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(item);
        this._budget -= price;
        return `You have successfully bought ${item}!`;
    }

    recipes(recipe) {
        let productsList = recipe.productsList;
        let recipeName = recipe.recipeName;

        productsList.forEach(p => {
            if (!this.products.includes(p)) {
                throw new Error("We do not have this product");
            }
        });
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let currentDish = this.dishes.find(d => d.recipeName == dish);
        let indexAboutDish = this.dishes.indexOf(currentDish);

        if (indexAboutDish < 0) {
            throw new Error("We do not have this dish");
        }
        // ако вече съществува
        if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let output = [];
        for (const name in this.guests) {
            let dish = this.guests[name];
            let products = this.dishes.find((el) => el.recipeName == dish)
            output.push(`${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`);
        }
        return output.join('\n').trimEnd();
    }
}