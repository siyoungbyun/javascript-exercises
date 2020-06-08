const removeFromArray = function(arr, ...rest) {
    for (let element of rest) {
        let index = arr.indexOf(element);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
}

module.exports = removeFromArray
