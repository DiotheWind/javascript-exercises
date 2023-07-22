const add = function(n1,n2) {
  return n1 + n2;
};

const subtract = function(n1,n2) {
	return n1 - n2;
};

const sum = function(arr) {
	return arr.reduce((prev, currentN) => prev + currentN, 0);
};

const multiply = function(...num) {
  return num.reduce((prev, currentN) => prev * currentN);
};

const power = function(n,p) {
	return n**p;
};

const factorial = function(n) {
  if (n == 0) {
    return 1;
  } else return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
