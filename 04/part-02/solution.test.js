const solution = require("./solution");

describe("solution 04 part 2", () => {
  describe("examples from problem", () => {
    it("112233", () => {
      expect(solution([112233, 112233])).toEqual(1);
    });
    it("123444", () => {
      expect(solution([123444, 123444])).toEqual(0);
    });
    it("111122", () => {
      expect(solution([111122, 111122])).toEqual(1);
    });
  });
});
