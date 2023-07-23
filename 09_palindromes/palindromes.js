const palindromes = function (str) {
    str = str.replace(/\W/g, "").split("");
    const strReverse = str.slice().reverse();
    return (str.join("").toLowerCase() === strReverse.join("").toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
