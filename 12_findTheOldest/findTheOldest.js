const findTheOldest = function(arr) {
    const sortedArr = arr.sort((a,b) => {
        if (!("yearOfDeath" in a)) {
            a["yearOfDeath"] = new Date().getFullYear();
        };
        if (!("yearOfDeath" in b)) {
            b["yearOfDeath"] = new Date().getFullYear();
        };
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath - b.yearOfBirth;
        return bAge - aAge;
    });
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
