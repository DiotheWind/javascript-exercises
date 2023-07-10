const reverseString = function(string) {
    revS = [];
    for (let i = string.length - 1; i >= 0; i--) {
        revS.push(string.charAt(i));
    }   

    return revS.join("");
};

// Do not edit below this line
module.exports = reverseString;
