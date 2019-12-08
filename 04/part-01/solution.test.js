const solution = require("./solution");

describe("solution 01 part 1", () => {
  describe("examples from problem", () => {
    it("111111", () => {
      expect(solution([111111, 111111])).toEqual(1);
    });
    it("223450", () => {
      expect(solution([223450, 223450])).toEqual(0);
    });
    it("123789", () => {
      expect(solution([123789, 123789])).toEqual(0);
    });
  });
});
