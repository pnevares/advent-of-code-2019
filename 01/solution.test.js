const solution = require("./solution");

describe("solution 01", () => {
  describe("single examples", () => {
    it("should handle 12", () => {
      expect(solution([12])).toEqual(2);
    });
    it("should handle 14", () => {
      expect(solution([14])).toEqual(2);
    });
    it("should handle 1969", () => {
      expect(solution([1969])).toEqual(654);
    });
    it("should handle 100756", () => {
      expect(solution([100756])).toEqual(33583);
    });
  });
  describe("group example", () => {
    it("should handle [12, 14, 1969, 100756]", () => {
      expect(solution([12, 14, 1969, 100756])).toEqual(34241);
    });
  });
});
