let assert = require('chai').assert;
let lookupChar = require('../07. JS-Advanced-Unit-Testing-and-Error-Handling-Exercise-Resources/03.CharLookup');

describe('lookupChar function', () => {
    it('Should return undefined  when  types are int', () => {
        assert.isUndefined(lookupChar(5, 12));
    });
    it('Should return undefined  when  type of second argument is  double', () => {
        assert.isUndefined(lookupChar('Hey', 2.67));
    });
    it('Should return undefined when  types are  string ', () => {
        assert.isUndefined(lookupChar('Hey', 'Gog'));
    });
    it('Should return undefined when  argumets are swapped ', () => {
        assert.isUndefined(lookupChar(2, 'Gog'));
    });
    it('Should return Incorrect when lenght of string is less than index', () => {
        assert.equal(lookupChar('yeeeps', 49), "Incorrect index");
    });
    it('Should return Incorrect when index is less than zero', () => {
        assert.equal(lookupChar('non', -2), "Incorrect index");
    });
    it('Should return Incorrect when index is invalid', () => {
        assert.equal(lookupChar('t', 1), "Incorrect index");
    });
    it('Should return correct  when arguments should be  valid', () => {
        assert.equal(lookupChar('noow', 2), "o");
    });
});

