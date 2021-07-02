let pizzUni = require('./pizzUni');
let { expect, assert } = require('chai');

describe('Test pizz Uni functionallity', () => {
    describe('Test make and order functionallity', () => {

        it('Should throw exception when have not order pizza', () => {

            let message = 'You must order at least 1 Pizza to finish the order.';
            let emptyOrder = { undefined };

            function actualResult() {
                return pizzUni.makeAnOrder(emptyOrder);
            }

            expect(actualResult).to.throw(message);
        });

        it('Should correct value when have some order pizza', () => {


            let order = { orderedPizza: 'Margarita' };
            let message = `You just ordered Margarita`;
            let actualResult = pizzUni.makeAnOrder(order);

            assert.equal(actualResult, message);

        });

        it('Should correct value when have  order pizza and drink', () => {


            let order = { orderedPizza: 'Margarita', orderedDrink: 'Cola' };
            let message = `You just ordered Margarita and Cola.`;
            let actualResult = pizzUni.makeAnOrder(order);

            assert.equal(actualResult, message);

        });
    });

    describe('Test get remaining work functionallity', () => {

        it('Should return correct message when all pizz are compete', () => {

            let pizzaArr = [{ orderedPizza: 'Margaritta', status: 'ready' },
            { orderedPizza: 'Margaritta', status: 'ready' }];

            let message = 'All orders are complete!';

            let actualResult = pizzUni.getRemainingWork(pizzaArr);

            assert.equal(actualResult, message);
        });

        it('Should return correct message when some  pizz not compete', () => {


            let pizzArr = [{ pizzaName: 'Margherita', status: 'ready' },
            { pizzaName: 'Ananas', status: 'preparing' }
            ];

            let message = 'The following pizzas are still preparing: Ananas.';

            let actualResult = pizzUni.getRemainingWork(pizzArr);

            assert.equal(actualResult, message)
        });

    });

    describe('Test order type functionallity', () => {
        it('Should return correct value when carry out work', () => {

            let totalSum = 50;
            let pizza = { orderedPizza: 'Margarita', typeOfOrder: 'Carry Out' };

            let actualResult = pizzUni.orderType(totalSum, pizza.typeOfOrder);
            let expectedResult = totalSum - 5;

            assert.equal(actualResult, expectedResult);
        });

        it('Should return correct value when delivery work', () => {

            let totalSum = 50;
            let pizza = { orderedPizza: 'Margarita', typeOfOrder: 'Delivery' };

            let actualResult = pizzUni.orderType(totalSum, pizza.typeOfOrder);
            let expectedResult = totalSum;

            assert.equal(actualResult, expectedResult);
        });
    });
});