const input = require("../part-01/input.json");
const solution = require("../part-01/solution");

for (let noun = 0; noun <= 99; noun++) {
  for (let verb = 0; verb <= 99; verb++) {
    const mutatedInput = [...input];
    mutatedInput[1] = noun;
    mutatedInput[2] = verb;

    const result = solution(mutatedInput);

    if (result[0] === 19690720) {
      console.log({ noun, verb, "result[0]": result[0] });
      console.log(`100 * noun + verb = ${100 * noun + verb}`);
    }
  }
}
