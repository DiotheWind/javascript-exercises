const convertToCelsius = function(fah) {
  const celsius = ((fah - 32) * 5) / 9;
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(cel) {
  const fahrenheit = (cel * 1.8) + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
