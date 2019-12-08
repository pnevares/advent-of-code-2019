const solution = require("./solution");

describe("solution 01", () => {
  describe("can draw a single line", () => {
    it("should handle paths that go right", () => {
      expect(solution([["R4"]])).toMatchSnapshot();
    });
    it("should handle paths that go left", () => {
      expect(solution([["L4"]])).toMatchSnapshot();
    });
    it("should handle paths that go up", () => {
      expect(solution([["U4"]])).toMatchSnapshot();
    });
    it("should handle paths that go down", () => {
      expect(solution([["D4"]])).toMatchSnapshot();
    });
  });
  describe("can draw two lines", () => {
    it("should handle [D4, R4]", () => {
      expect(solution([["D4", "R4"]])).toMatchSnapshot();
    });
  });
});
