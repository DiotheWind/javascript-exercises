const repeatString = function(s, num) {
    let repeatString = "";
    if (num < 0) {
        return "ERROR";
    }
    
    for (let i = 1; i <= num; i++) {
        repeatString += s;
    }

    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
