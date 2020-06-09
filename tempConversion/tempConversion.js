const ftoc = function(fahrenheit) {
  let celcius = parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(1));
  return celcius;
}

const ctof = function(celcius) {
  let fahrenheit = parseFloat((celcius * 9 / 5 + 32).toFixed(1));
  return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
