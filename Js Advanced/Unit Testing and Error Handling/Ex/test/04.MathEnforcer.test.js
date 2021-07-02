let assert = require('chai').assert;
let mathEnforcer = require('../07. JS-Advanced-Unit-Testing-and-Error-Handling-Exercise-Resources/04.MathEnforcer');

describe('Test addFive functionallity', () => {

    it('Should return undefined when typeof parameter is string', () => {
        let input = 'Pesho';
        let expectedResult = undefined;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof parameter is emty  object', () => {
        let input = {};
        let expectedResult = undefined;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof parameter is object', () => {
        let input = {name:'Pesho', age: 20};
        let expectedResult = undefined;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof parameter is emty array', () => {
        let input = [];
        let expectedResult = undefined;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof parameter is array', () => {
        let input = [3,4,5];
        let expectedResult = undefined;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof parameter is undefined', () => {
        let input = undefined;
        let expectedResult = undefined;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return correctly value when typeof parameter is number', () => {
        let input = 6;
        let expectedResult = 11;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return negative value when typeof parameter is negative number', () => {
        let input = -35;
        let expectedResult = -30;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return correctly value when typeof parameter is double', () => {
        let input = 6.66;
        let expectedResult = 11.66;
        let actualResult = mathEnforcer.addFive(input);

        assert.equal(expectedResult, actualResult);
    });
});

describe('Test subtractTen functionallity', () => {

    it('Should return undefined when typeof parameter is string', () => {
        let input = 'Pesho';
        let expectedResult = undefined;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return negative double when typeof parameter is double', () => {
        let input = -14.55 ;
        let expectedResult = -24.55;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return undefined when typeof parameter is empty object', () => {
        let input = {} ;
        let expectedResult = undefined;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return undefined when typeof parameter is  object', () => {
        let input = {name:'Pesho', age:30} ;
        let expectedResult = undefined;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof parameter is empty array', () => {
        let input = [] ;
        let expectedResult = undefined;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return undefined when typeof parameter is  array', () => {
        let input = [3,4,5,6] ;
        let expectedResult = undefined;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return correctly value when typeof parameter is number', () => {
        let input = 21;
        let expectedResult = 11;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return correctly value when typeof parameter is double', () => {
        let input = 21.66;
        let expectedResult = 11.66;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return  value less than zero when typeof parameter is number', () => {
        let input = 6;
        let expectedResult = -4;
        let actualResult = mathEnforcer.subtractTen(input);

        assert.equal(expectedResult, actualResult);
    });
});

describe('Test sum functionallity', () => {

    it('Should return undefined when typeof parameters are string', () => {
        let input = 'Pesho';
        let input2 = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof first parameter is array', () => {
        let input = [1,2,3,4];
        let input2 = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof first parameter is empty array', () => {
        let input = [];
        let input2 = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof first parameter is object', () => {
        let input = {name:'Ivan',age:20};
        let input2 = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof first parameter is empty object', () => {
        let input = {};
        let input2 = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof first parameter is array', () => {
        let input2 = [1,2,3,4];
        let input = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof second parameter is empty array', () => {
        let input2 = [];
        let input = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof second parameter is object', () => {
        let input2 = {name:'Ivan',age:20};
        let input = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when typeof second parameter is empty object', () => {
        let input2 = {};
        let input = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined  when first parameter is correct, but second is not', () => {
        let input = 12;
        let input2 = 'Gosho';

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined  when second parameter is correct, but first is not', () => {
        let input = 'Pesho';
        let input2 = 14;

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when  have not  second parameter', () => {
        let input = 12;
        let input2 = undefined;

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when  have not  first parameter', () => {
        let input = undefined;
        let input2 = 13;

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return undefined when  parameters are undefined', () => {
        let input = undefined;
        let input2 = undefined;

        let expectedResult = undefined;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
    it('Should return correct  when  parameters are numbers', () => {
        let input = 13;
        let input2 = 14;

        let expectedResult = 27;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return correct  when  parameters are numbers of type double', () => {
        let input = 13.55;
        let input2 = 14.11;

        let expectedResult = 27.66;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return correct  when  parameters are negative double numbers', () => {
        let input = -13.55;
        let input2 = -14.11;

        let expectedResult = -27.66;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return correct  when  parameters are negative   numbers', () => {
        let input = -13.;
        let input2 = -14;

        let expectedResult = -27;
        let actualResult = mathEnforcer.sum(input,input2);

        assert.equal(expectedResult, actualResult);
    });
});