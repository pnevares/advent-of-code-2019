module.exports = input => {
  const [min, max] = input;
  let result = 0;
  for (let number = min; number <= max; number++) {
    if (
      isSixDigits(number) &&
      hasDuplicateAdjacentDigits(number) &&
      hasIncreasingDigits(number)
    ) {
      result += 1;
    }
  }
  return result;
};

function isSixDigits(number) {
  return number.toString().length === 6;
}

function hasDuplicateAdjacentDigits(number) {
  const numbers = number.toString().split("");
  return numbers.some((digit, index) => {
    if (index === 0) return false;
    if (digit === numbers[index - 1]) return true;
    return false;
  });
}

function hasIncreasingDigits(number) {
  const numberString = number.toString();
  return (
    numberString ===
    numberString
      .split("")
      .sort()
      .join("")
  );
}
