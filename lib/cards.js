"use strict";

var generateRandomInteger = require("./../helpers/generators").generateRandomInteger;

var shufflingObjects = function(array) {
    var n = array.length;
    for (var i = n - 1; 1; i--) {
        var j = generateRandomInteger(0, i)
        var buffer = array[j];
        array[j] = array[i];
        array[i] = buffer;
    }
    return array
};
module.exports.shuffling  = shufflingObjects;