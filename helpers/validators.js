function isArray (a) {
    return (typeof a == "object") && (a instanceof Array);
};
module.exports.isArray = isArray;

function checkEqualsArraysOnElements(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    // TODO fix it
    var arrayWithFoundedIndexes = [];
    var length = array1.length;
    for(var i = 0; i < length; i++) {
        var foundIndex = -1;
        for(var j = 0; j < length; j++) {
            if (array1[i] == array2[j]) {
                for(var t = 0; t < arrayWithFoundedIndexes.length; t++) {
                    if (j !== arrayWithFoundedIndexes[t]) {
                        foundIndex = j;
                        break;
                    }
                }
            }
        }
        if (foundIndex === -1) {
            return false;
        }
        arrayWithFoundedIndexes.push(foundIndex);
    }
};
module.exports.checkEqualsArrayElements = checkEqualsArraysOnElements;