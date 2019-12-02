const input = require("./input.json");
const solution = require("./solution");

const mutatedInput = [...input];
mutatedInput[1] = 12;
mutatedInput[2] = 2;

const result = solution(mutatedInput);

console.log(result[0]);
