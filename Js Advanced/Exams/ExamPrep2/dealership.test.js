let dealership = require('./dealership');
let { expect, assert } = require('chai');

describe("Test dealership functionallity", () => {
    describe("Test newCarCost functionallity", () => {

        it("Should return correct value when car is in list", () => {
            expect(dealership.newCarCost('Audi TT 8J', 24000)).to.equal(10000);
            expect(dealership.newCarCost('Audi A6 4K', 40000)).to.equal(20000);
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
            expect(dealership.newCarCost('Audi A8 D5', 40000)).to.equal(15000);
        });

        it('Should return correct value when car not is in list', () => {
            expect(dealership.newCarCost('Porsche Cayen', 1200000)).to.equal(1200000);
        });
    });
    describe('Test car equipment functionallity', () => {

        it('Should return correct value when work car equipment with 1', () => {
            let actualResult = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [3]);

            expect(actualResult).to.eql(['navigation']);

        });
        it('Should return correct value when work car equipment more than 1', () => {
            let actualResult = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [2, 3]);

            expect(actualResult).to.eql(['sport rims', 'navigation']);

        });
        it('Should return undefined  when index of car equipment is invalid', () => {
            let actualResult = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [7]);

            expect(actualResult).to.eql([undefined]);

        });
    });

    describe('Test euro category functionallity', () => {
        it('Should return message when euro category is less than 4', () => {
            let actualResult = dealership.euroCategory(2);
            let message = 'Your euro category is low, so there is no discount from the final price!';
            assert.equal(actualResult, message);
        });
        it('Should return message when euro category is equal to 4', () => {
            let actualResult = dealership.euroCategory(4);
            let message = `We have added 5% discount to the final price: 14250.`;
            assert.equal(actualResult, message);
        });
        it('Should return message when euro category is more than  4', () => {
            let actualResult = dealership.euroCategory(7);
            let message = `We have added 5% discount to the final price: 14250.`;
            assert.equal(actualResult, message);
        });
    });

});
