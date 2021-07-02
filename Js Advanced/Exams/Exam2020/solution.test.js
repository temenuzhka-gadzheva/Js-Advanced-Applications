let { Repository } = require("./solution.js");
let { expect, assert } = require('chai');

describe("Tests Repository functionallity", () => {

    describe("Test class Repository functionallity", () => {

        let rep = '';
        let prop = { name: 'string', age: 'number' };
        obj = { name: 'Gogicha', age: 1 };

        beforeEach(() => {
            rep = new Repository(prop);
        });

it('Should correct value when create valid instance of class',()=>{
   
    expect(rep.getId,0);
    rep.add(obj);
    rep.add(obj);
    rep.add(obj);
    rep.add(obj);
    let sizeOfData = rep.data.size;
    assert.equal(sizeOfData,4);
});

        it("Should return count of saved objects", () => {
            assert.equal(rep.count, 0);
        });

        it("Should return correct value when test add method with one parameter", () => {
            assert.equal(rep.add(obj), 0);
        });

        it("Should return correct value when test add method with two parameters", () => {
            rep.add(obj);
            assert.equal(rep.add(obj), 1);
        });

        it('Should throw exception when handing null arg of add method', () => {
            let objNull = null;
            function actualResult() {
                return rep.add(objNull);
            }
            expect(actualResult).to.throw();
        });

        it('Should throw exception when type of arg is invalid', () => {
            let invalidObj = { name: 'Gogicha', age: 'S' };
            function actualResult() {
                return rep.add(invalidObj);
            }
            expect(actualResult).to.throw();
        });

        it('Should throw exception when  arg miss', () => {
            let missObj = { age: 16 };

            function actualResult() {
                return rep.add(missObj);
            }
            expect(actualResult).to.throw();
        });

        it('Should return correct value when get ID job correct', () => {
            rep.add(obj);

            let actualResult = rep.getId(0);

            assert.equal(actualResult, obj);
        });

        it('Should throw exception when get ID have invalid paraameter', () => {
            rep.add(obj);

            function actualResult() {
                return rep.getId(4);
            }
            expect(actualResult).to.throw();
        });

        it('Should return correcly value when update work correct', () => {
            let myObj = { name: 'Marty', age: 20 };

            rep.add(obj);
            rep.update(0, myObj);

            let actualResult = rep.getId(0);
            assert.equal(actualResult, myObj);
        });

        it('Should throw exception  when update dont work', () => {
            let myObj = { name: 'Marty', age: 2 };

            rep.add(obj);

            function actualResult() {
                return rep.update(56, myObj);
            }

            expect(actualResult).to.throw();
        });

        it('Should correct value when del method work correct', () => {
            rep.add(obj);
            rep.add(obj);
            rep.add(obj);

            let index = 0;
            rep.del(index);

            let actualResult = rep.count;
            assert.equal(actualResult, 2);

        });
        it('Should throw exception when del method contains invalid  id as arg', () => {

            rep.add(obj);
            rep.add(obj);
            rep.add(obj);
            rep.add(obj);
            function actualResult() {
                return rep.del(45);
            }
            expect(actualResult).to.throw();
        });
    });
});
