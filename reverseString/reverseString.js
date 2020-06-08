const reverseString = function(phrase) {
    let phraseArray = phrase.split("");
    let result = "";
    for (let i = phraseArray.length - 1; i >= 0; i--) {
        result = result + phraseArray[i];
    }
    return result;
}

module.exports = reverseString
