
let assert = require('chai').assert;
let sum = require('../04.SumOfNumbers');


describe('Test sum functionallity', () => {
    it('Should add positive numbers', () => {
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;

        let actualResult = sum(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should pass when adding negative numbers!', () => {
        let input = [-1, -2, -3, -5, -4];
        let expectedResult = -15;
        let actualResult = sum(input);
        assert.equal(actualResult, expectedResult);

    });
})