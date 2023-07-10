const removeFromArray = function(arr, toDelete) {
    const toRemove = Array.from(arguments)
    toRemove.shift();
    const newArr = [];

    outer:
    for (const elements of arr) {
        for (let i = 0; i <= toRemove.length - 1; i++) {
            if (elements === toRemove[i]) {
                continue outer;
            }
        }

        newArr.push(elements)
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;



