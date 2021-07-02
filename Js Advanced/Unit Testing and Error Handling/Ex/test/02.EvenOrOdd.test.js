let assert = require('chai').assert;
let isOddOrEven = require('../07. JS-Advanced-Unit-Testing-and-Error-Handling-Exercise-Resources/02.EvenOrOdd');

describe('Test even or odd functionallity', () => {

    it('Should return undefined when input is incorrect', () => {

        let input = 4;
        let actualResult = isOddOrEven(input);
        assert.isUndefined(actualResult);

    });

    it('Should return odd when input lenght is odd', () => {
        let input = 'gogicha';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'odd';
        assert.equal(actualResult, expectedResult);
    });

    it('Should return even when input lenght is even', () => {
        let input = 'gogicha1';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'even';
        assert.equal(actualResult, expectedResult);
    });
});