const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
        return "ERROR";
    }
    if (first < 0 || second < 0) {
        return "ERROR";
    }
    let result = 0;
    let min;
    let max;
    if (first >= second) {
        min = second;
        max = first;
    } else {
        min = first;
        max = second;
    }
    for (let i = min; i < max + 1; i++) {
        result = result + i;
    }
    return result;
}

module.exports = sumAll
