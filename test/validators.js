var validators = require("./../helpers/validators");
var assert = require("assert");

describe('#validators', function(){
    it('checkEqualsElementsInArrays strong array test. Should return false if checkEqualsElementsInArrays returned false', function(){
        var testData1 = ['q', 12, 31, {}, {}, {}, {a: 1}, {a: 1}, {a: 2}, '', 'longstring', 0, 0, 12, 12, 12, 'sem'];
        var testData2 = [ 0, 0, {}, {}, 12, {}, {a: 1}, '', 'longstring', 12, 'q', {a: 1}, {a: 2}, 12, 31,  12, 'sem'];
        var result = validators.checkEqualsElementsInArrays(testData1, testData2);
        assert.equal(true, result );
    });
    
    it('Equal with strong objects test. Should return false if equal returned false', function(){
        var testData1 = {"foo": "bar", 1: 2, "obj": {}};
        var testData2 = {"foo": "bar", 1: 2, "obj": {}};
        var result = validators.equal(testData1, testData2);
        assert.equal(true, result );
    });
    
    it('Equal with empty objects test. Should return false if equal returned true', function(){
        var testData1 = {};
        var testData2 = {};
        var result = validators.equal(testData1, testData2);
        assert.equal(true, result );
    });
});