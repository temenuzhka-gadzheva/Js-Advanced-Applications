let assert = require('chai').assert;
let createCalculator = require('../07.AddSubtract');

describe('Test add and substract functionallity', () => {
    let calc = '';
    beforeEach(function () {
        calc = createCalculator();
    });

    it('Should return zero', () => {
        let expectResult = 0;
        let actualResult = calc.get();
        assert.equal(expectResult, actualResult);
    });

    it('Shoud correctly value when add numbers', () => {
        calc.add(2);
        calc.add(4);
        let expectResult = 6;
        let actualResult = calc.get();
        assert.equal(expectResult, actualResult);
    });

    it('Should correctly value when subtract numbers',()=>{
      calc.add(20);
        calc.subtract(7);
        let expectResult = 13;
        let actualResult = calc.get();

        assert.equal(expectResult,actualResult);
    });

    it('Should add  value as string',()=>{

        calc.add('Gogicha');
        let expectedResult = NaN;
        let actualResult = calc.get();

        assert.notEqual(expectedResult,actualResult);

    });

    
    it('Should subtract  value as string',()=>{

        calc.subtract('Gogicha');
        let expectedResult = NaN;
        let actualResult = calc.get();

        assert.notEqual(expectedResult,actualResult);

    });

    it('Should correct value when use all functionallity',()=>{
        calc.add(15);
        calc.subtract('4');
        calc.add('4');
        calc.subtract(5);
        let expectedResult = 10;
        let actualResult = calc.get();
        assert.equal(expectedResult,actualResult);
    });
});