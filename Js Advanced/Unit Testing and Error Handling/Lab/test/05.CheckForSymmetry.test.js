let isSymmetric = require('../05.CheckForSymmetry');
let assert = require('chai').assert;


describe('Test isSymmetric functionallity', () => {

    it('Should return true when input is symmetric', () => {
        let input = [1, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return false when input is not symmetric', () => {
        let input = [1, 5, 4, 1];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return false when input is different by array', () => {

        let input1 = [1, {}, 4];
        let input2 = ["", {}, [1]];
        let input3 = [1, 3, []];

        let expectedResult = false;

        let actualResult1 = isSymmetric(input1);
        let actualResult2 = isSymmetric(input2);
        let actualResult3 = isSymmetric(input3);


        assert.equal(expectedResult, actualResult1);
        assert.equal(expectedResult, actualResult2);
        assert.equal(expectedResult, actualResult3);
    });

    it('Sould return false when type of input is different!', () => {

        let input = ['1', 1];
        let input2 = ['', 0];
        let input3 = [[1], 1];
        let input4 = [{}, []];
        let expectedResult = false;
        let actualResult = isSymmetric(input);
        let actualResult2 = isSymmetric(input2);
        let actualResult3 = isSymmetric(input3);
        let actualResult4 = isSymmetric(input4);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
        assert.equal(expectedResult, actualResult3);
        assert.equal(expectedResult, actualResult4);
    });

    it('Shoud return true when arguments are symmetric', () => {
        let input = ['a', 'b', 'a'];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(expectedResult, actualResult);
    });

    it('Shoud return false when arguments are  not symmetric', () => {
        let input = ['a', 'b', 'c'];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(expectedResult, actualResult);
    });

    it('Should return false symmetric input', () => {
        let input = 'stringy';
        let expectedResult = false;
        let actualResult = isSymmetric(input);
        assert.equal(expectedResult,actualResult);
    });
})