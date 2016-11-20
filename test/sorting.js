var sorting = require("./../lib/sorting");
var validators = require("./../helpers/validators");
var assert = require("assert");
var _ = require('lodash');

describe('Shuffling', function () {
    it('should return false if shuffling returned not empty array when pass empty', function () {
        var testData = [];
        var resultData = sorting.shuffling(testData);
        var result = validators.isArray(resultData) && resultData.length == 0;
        assert.equal(true, result);
    });
    
    it('should return false if shuffling returned not array with one element like in testData', function () {
        var testData = ["test"];
        var resultData = sorting.shuffling(testData);
        var result = validators.isArray(resultData) && resultData.length == 1 && resultData[0] == testData[0];
        assert.equal(true, result);
    });
    
    it('should return false if shuffling returned array whose not contain all source elements', function () {
        var testData = ["test", 'lop', 12, {"foo": "bar"}, 12.33, 123, 123, 123, 123];
        var resultData = sorting.shuffling(testData);
        var result = validators.isArray(resultData) && validators.checkEqualsElementsInArrays(testData, resultData);
        assert.equal(true, result);
    });
});

describe('Insertion sort', function () {
    it('Should return true if sort array with numbers correctly', function () {
        var A = [3, 35, 3, 51, 1, 414, 435, 5, 1531, 3, 35, 315, 35, 53, 13, 1, 13, 32, 3, 5, 35];
        var correctA = [ 1, 1, 3, 3, 3, 3, 5, 5, 13, 13, 32, 35, 35, 35, 35, 51, 53, 315, 414, 435, 1531 ];
        sorting.insertionSort(A);
        assert.equal(true, _.isEqual(A, correctA));
    });
    
    it('Should return true if sort array with objects correctly', function () {
        var A = [{a: 31}, {a: 2}, {a: 53}, {a: 22}];
        var correctA = [{a: 2}, {a: 22}, {a: 31}, {a: 53}];
        sorting.insertionSort(A, function (a, b) {
            return a.a >= b.a;
        });
        assert.equal(true, _.isEqual(A, correctA));
    });
});