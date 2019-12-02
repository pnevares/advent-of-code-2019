const OP_ADD = 1;
const OP_MULTIPLY = 2;
const OP_END = 99;

module.exports = input => {
  const result = [...input];
  for (let index = 0; index < result.length; index++) {
    if (index % 4 === 0) {
      switch (result[index]) {
        case OP_ADD: {
          result[result[index + 3]] =
            result[result[index + 1]] + result[result[index + 2]];
          break;
        }
        case OP_MULTIPLY: {
          result[result[index + 3]] =
            result[result[index + 1]] * result[result[index + 2]];
          break;
        }
        case OP_END: {
          return result;
          break;
        }
        default:
          return null;
      }
    }
  }
  return null;
};
