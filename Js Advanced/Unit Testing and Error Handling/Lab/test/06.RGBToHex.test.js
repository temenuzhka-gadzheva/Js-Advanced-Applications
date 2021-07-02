let assert = require('chai').assert;
let rgbToHexColor = require('../06.RGBToHex');

describe('Test rgbToHexColor functionallity',()=>{

    it('Should return black',()=>{

        let actualResult = rgbToHexColor(0,0,0);
        let expectedResult = '#000000';

        assert.equal(actualResult,expectedResult);
    });

    it('Should return white',()=>{
        let actualResult = rgbToHexColor(255,255,255);
        let expectedResult = '#FFFFFF';

        assert.equal(actualResult,expectedResult);
    });

    it('Should return undefined when some argument is out of range',()=>{
        let actualResult = rgbToHexColor(4,6,{});
        let actualResult2 = rgbToHexColor(12,34,[]);
        let actualResult3 = rgbToHexColor('1',12,45);
        let actualResult4 = rgbToHexColor(256,1,0);
        let actualResult5 = rgbToHexColor(-45,2,45);
        let actualResult6 = rgbToHexColor(6,-12,49);
        let actualResult10 = rgbToHexColor(6,12,-59);
        let actualResult7 = rgbToHexColor(1,1,256);
        let actualResult8 = rgbToHexColor(1,256,0);
        let actualResult9 = rgbToHexColor(0,1,256);

        let expectedResult = undefined;

        assert.equal(actualResult,expectedResult);
        assert.equal(actualResult2,expectedResult);
        assert.equal(actualResult3,expectedResult);
        assert.equal(actualResult4,expectedResult);
        assert.equal(actualResult5,expectedResult);
        assert.equal(actualResult6,expectedResult);
        assert.equal(actualResult7,expectedResult);
        assert.equal(actualResult8,expectedResult);
        assert.equal(actualResult9,expectedResult);
        assert.equal(actualResult10,expectedResult);

    })
});