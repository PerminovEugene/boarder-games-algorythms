"use stict";
var _ = require('lodash');

function validators() {}

var isArray  = function (a) {
    return (typeof a == "object") && (a instanceof Array);
};
validators.isArray = isArray;
module.exports.isArray = isArray;


var checkEqualsElementsInArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    var arrayWithFoundedIndexes = [];
    var length = array1.length;
    for(var i = 0; i < length; i++) {
        var foundIndex = -1;
        for(var j = 0; j < length; j++) {
            if (equal(array1[i], array2[j])) {
                if (_.indexOf(arrayWithFoundedIndexes, j) === -1) {
                    foundIndex = j;
                    break;
                }
            }
        }
        if (foundIndex === -1) {
            return false;
        }
        arrayWithFoundedIndexes.push(foundIndex);
    }
    return true;
};
validators.checkEqualsElementsInArrays = checkEqualsElementsInArrays;
module.exports.checkEqualsElementsInArrays = checkEqualsElementsInArrays;

// Algorithm for equals got from https://github.com/NekR/Sync/blob/master/core.js#L248
var equalRecursion = function(first, second, recursion) {
    if (isArray(first)) {
        return first.every(function(val, i) {
            return recursion(val, second[i]);
        });
    } else if (typeof first === 'object' && first !== null) {
        return Object.keys(first).every(function(val) {
            return recursion(first[val], second[val]);
        });
    } else {
        return first === second;
    }
};

var equal = function(first, second) {
    if (first === second) {
        return true;
    } else if (!first || !second || typeof first !== typeof second ||
        first.length !== second.length) {
        return false;
    } else {
        return equalRecursion(first, second, equal);
    }
};
validators.equal = equal;
module.exports.equal = equal;
module.exports = validators;
