
let numberOperations = require('./numberOperations.js');
let { expect, assert } = require('chai');
//const numberOperations = require('./03. Number Operations');

describe('Test number operations', () => {
    describe('Test pow number functionallity', () => {
        it('Should return square of number', () => {

            let expectedResult = 36;
            let actualResult = numberOperations.powNumber(6);
            expect(actualResult).to.equal(expectedResult);

        });

        it('Should return square of  negative number', () => {

            let expectedResult = 36;
            let actualResult = numberOperations.powNumber(-6);
            expect(actualResult).to.equal(expectedResult);

        });

        it('Should return zero when number is zero', () => {

            let expectedResult = 0;
            let actualResult = numberOperations.powNumber(0);
            expect(actualResult).to.equal(expectedResult);

        });
    });

    describe('Test number checker functionallity', () => {

        it('Should throw exception when input is NaN', () => {
            function actualResult() {
                return numberOperations.numberChecker('Angelina');
            }
            let message = 'The input is not a number!';
            expect(actualResult).to.throw(message);
        });

        it('Should return correct message when paramenter is string  parsed by number less than 100', () => {
            let message = 'The number is lower than 100!';

            let actualResult = numberOperations.numberChecker('99');

            expect(actualResult).to.equal(message);
        });

        it('Should return correct message when paramenter is  number less than 100', () => {
            let message = 'The number is lower than 100!';

            let actualResult = numberOperations.numberChecker(99);

            expect(actualResult).to.equal(message);
        });

        it('Should return correct message when paramenter is string  parsed by number equal  to 100', () => {
            let message = 'The number is greater or equal to 100!';

            let actualResult = numberOperations.numberChecker('100');

            expect(actualResult).to.equal(message);
        });

        it('Should return correct message when paramenter is equal to 100', () => {
            let message = 'The number is greater or equal to 100!';

            let actualResult = numberOperations.numberChecker(100);

            expect(actualResult).to.equal(message);
        });

        it('Should return correct message when paramenter is string  parsed by number greather than 100', () => {
            let message = 'The number is greater or equal to 100!';

            let actualResult = numberOperations.numberChecker('107');

            expect(actualResult).to.equal(message);
        });

        it('Should return correct message when paramenter is greather than 100', () => {
            let message = 'The number is greater or equal to 100!';

            let actualResult = numberOperations.numberChecker(110);

            expect(actualResult).to.equal(message);
        });
    });

    describe('Test sum arrays functionallity', () => {

        it('Should return empty array when 2 parameters are empty arr', () => {
            let firstArr = [];
            let secondArr = [];
            let actualResult = numberOperations.sumArrays(firstArr, secondArr);
            expect(actualResult).to.eql([]);
        });

        it('Should begin with longer array', () => {
            let firstArr = [2,3,4];
            let secondArr = [5,6,7,8,9];
            let actualResult = numberOperations.sumArrays(firstArr, secondArr);
           let result = [7,9,11,8,9]
            expect(actualResult).to.eql(result);
        });

        it('Should begin with first array of numbers when lenght is equal', () => {
            let firstArr = [2,3,4];
            let secondArr = [5,6,7,];
            let actualResult = numberOperations.sumArrays(firstArr, secondArr);
           let result = [7,9,11]
            expect(actualResult).to.eql(result);
        });

        it('Should begin with longer array of numbers', () => {
            let firstArr = ['s','q','m'];
            let secondArr = ['d','f','w','s','q','m'];
            let actualResult = numberOperations.sumArrays(firstArr, secondArr);
           let result = ['sd','qf','mw','s','q','m']
            expect(actualResult).to.eql(result);
        });

        it('Should begin with first array of string when lenght is equal', () => {
            let firstArr = ['s','q','m'];
            let secondArr = ['d','f','w'];
            let actualResult = numberOperations.sumArrays(firstArr, secondArr);
           let result = ['sd','qf','mw']
            expect(actualResult).to.eql(result);
        });
    });
})