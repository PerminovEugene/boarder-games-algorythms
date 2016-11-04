var shuffling = require("./../index").shuffling;
var validators = require("./../helpers/validators");
var assert = require("assert");

describe('#cards shuffling', function(){
    it('should return false if shuffling returned not empty array when pass empty', function(){
        var testData = [];
        var resultData = shuffling(testData);
        var result = validators.isArray(resultData) && resultData.length == 0;
        assert.equal(true, result );
    });

    it('should return false if shuffling returned not array with one element like in testData', function(){
        var testData = ["test"];
        var resultData = shuffling(testData);
        var result = validators.isArray(resultData) && resultData.length == 1 && resultData[0] == testData[0];
        assert.equal(true, result );
    });
    
    it('should return false if shuffling returned array whose not contain all source elements', function(){
        var testData = ["test", 'lop', 12, {"foo": "bar"}, 12.33];
        var resultData = shuffling(testData);
        var result = validators.isArray(resultData) && resultData.length == 1 && resultData[0] == testData[0];
        assert.equal(true, result );
    });
    
});