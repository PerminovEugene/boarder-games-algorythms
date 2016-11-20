"use strict";

var generateRandomInteger = require("./../helpers/generators").generateRandomInteger;

var shuffling = function (array) {
    var n = array.length;
    if (n === 1) {
        return array
    }
    for (var i = n - 1; i >= 1; i--) {
        var j = generateRandomInteger(0, i);
        var buffer = array[j];
        array[j] = array[i];
        array[i] = buffer;
    }
    return array
};
module.exports.shuffling = shuffling;


/*
    Expected params:
      A = array,
      compareFunction = function(a, b) - return true if a >= b.
    Default compare it's operand >=;
 */
var defaultCompareFunction = function (a, b) {
    return a >= b;
};
var insertionSort = function (A, compareFunction = defaultCompareFunction) {
    for (var j = 1; j < A.length; j++) {
        var key = A[j];
        var i = j - 1;
        while (i >= 0 && compareFunction(A[i], key)) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
    }
};
module.exports.insertionSort = insertionSort;