const ftoc = function(f) {
//[°C] = ([°F] − 32) × 5⁄9
//f = temp in Fahrenheit to be converted to celcius
let toCelcius = (f - 32) * (5/9);
let result = Math.round(toCelcius*10)/10;
return result;
};

const ctof = function(c) {
//[°F] = [°C] × 9⁄5 + 32
//c = temp in Celcius to be converted to Fahrenheit
let toFahrenheit = c * (9/5) + 32;
let result = Math.round(toFahrenheit*10)/10;
return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
