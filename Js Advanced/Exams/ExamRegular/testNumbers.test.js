let testNumbers = require('./testNumbers');
let { expect, assert } = require('chai');

describe('Test test Numbers functionallity', () => {

    describe('Test sum Numbers functionallity', () => {

        it('Should correct value when args are numbers', () => {
            let sum = 0;
            let first = 10;
            let second = 20.456;

            let actualResult = testNumbers.sumNumbers(first, second);

            sum = (first + second).toFixed(2);
            assert.equal(actualResult, sum);

        });


        it('Should return undefined when first arg is not a number', () => {
            let sum = 0;
            let first = '12';
            let second = 20.456;

            let actualResult = testNumbers.sumNumbers(first, second);

            sum = undefined;
            assert.equal(actualResult, sum);

        });

        it('Should return undefined when second arg is not a number', () => {
            let sum = 0;
            let first = 12;
            let second = '20.456';

            let actualResult = testNumbers.sumNumbers(first, second);

            sum = undefined;
            assert.equal(actualResult, sum);

        });

        it('Should return undefined when  args are not a number', () => {
            let sum = 0;
            let first = '12';
            let second = '20.456';

            let actualResult = testNumbers.sumNumbers(first, second);

            sum = undefined;
            assert.equal(actualResult, sum);

        });

    });
    describe('Test number Checker functionallity', () => {

        it('Should return correct message when number is odd', () => {
            let message = 'The number is odd!';
            let number = 13;
            let actualResult = testNumbers.numberChecker(number);

            assert.equal(actualResult, message);
        });

        it('Should return correct message when number is even', () => {
            let message = 'The number is even!';
            let number = 12;
            let actualResult = testNumbers.numberChecker(number);

            assert.equal(actualResult, message);
        });

        it('Should throw exception when  arg is string', () => {
            let message = 'The input is not a number!';
            let number = 'arf';

            function actualResult() {
                return testNumbers.numberChecker(number);
            }

            expect(actualResult).to.throw(message);

        });

        /*  it('Should throw exception when  arg isempty arr', () => {
              let message = 'The input is not a number!';
              let number = [];
  
              function actualResult() {
                  return testNumbers.numberChecker(number);
              }
  
              expect(actualResult).to.throw(message);
              
          });*/
    });
    describe('Test average Sum Array functionallity', () => {

        it('Should return correct value when arg is correct', () => {
            let arr = [2, 2, 6, 4, 6];
            let actualResult = testNumbers.averageSumArray(arr);
            let expectResult = 4;

            assert.equal(actualResult, expectResult);

        });

        it('Should return zero when arg is  not correct', () => {
            let arr = ['asdfghj', 'cvbn', 'dfghj', 'gjlkf', 'ytg'];

            let actualResult = testNumbers.averageSumArray(arr);
            let expectResult = NaN;

            expect(actualResult).to.eql(expectResult);
        });
    });

});