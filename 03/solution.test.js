const solution = require("./solution");

describe("solution 03", () => {
  describe("can draw a single line", () => {
    it("path that goes right", () => {
      expect(solution([["R4"]])).toMatchSnapshot();
    });
    it("path that goes left", () => {
      expect(solution([["L4"]])).toMatchSnapshot();
    });
    it("path that goes up", () => {
      expect(solution([["U4"]])).toMatchSnapshot();
    });
    it("path that goes down", () => {
      expect(solution([["D4"]])).toMatchSnapshot();
    });
  });
  describe("can draw two lines", () => {
    it("[D4, R4]", () => {
      expect(solution([["D4", "R4"]])).toMatchSnapshot();
    });
    it("[R4, D4]", () => {
      expect(solution([["R4", "D4"]])).toMatchSnapshot();
    });
    it("[R4, U4]", () => {
      expect(solution([["R4", "U4"]])).toMatchSnapshot();
    });
    it("[U4, L4]", () => {
      expect(solution([["U4", "L4"]])).toMatchSnapshot();
    });
  });
  describe("can handle single examples", () => {
    it("[R8,U5,L5,D3]", () => {
      expect(solution([["R8", "U5", "L5", "D3"]])).toMatchSnapshot();
    });
    it("[U7,R6,D4,L4]", () => {
      expect(solution([["U7", "R6", "D4", "L4"]])).toMatchSnapshot();
    });
  });
  describe("can handle combined example", () => {
    it("[R8,U5,L5,D3] and [U7,R6,D4,L4]", () => {
      expect(
        solution([
          ["R8", "U5", "L5", "D3"],
          ["U7", "R6", "D4", "L4"]
        ])
      ).toMatchSnapshot();
    });
  });
});
