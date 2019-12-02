module.exports = input =>
  input.reduce((value, input) => {
    return value + Math.floor(input / 3) - 2;
  }, 0);
