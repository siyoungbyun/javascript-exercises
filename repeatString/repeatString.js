const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }
    let i;
    let result = "";
    for (i = 0; i < times; i++) {
        result = result + word;
    }
    return result;
}

module.exports = repeatString
