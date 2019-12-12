const solution = require("./solution");

describe("solution 06", () => {
  describe("can handle examples", () => {
    it("[AAA)BBB]", () => {
      expect(solution(["AAA)BBB"])).toEqual(1);
    });
    it("[C)B,B)A]", () => {
      expect(solution(["C)B", "B)A"])).toEqual(3);
    });
    it("[COM)B,B)C,C)D,D)E,E)F,B)G,G)H,D)I,E)J,J)K,K)L]", () => {
      expect(
        solution([
          "COM)B",
          "B)C",
          "C)D",
          "D)E",
          "E)F",
          "B)G",
          "G)H",
          "D)I",
          "E)J",
          "J)K",
          "K)L"
        ])
      ).toEqual(42);
    });
  });
});
