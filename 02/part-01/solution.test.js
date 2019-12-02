const solution = require("./solution");

describe("solution 02 part 01", () => {
  describe("handles an example where nothing changes", () => {
    it("should handle [2,2,0,2,99]", () => {
      expect(solution([2, 2, 0, 2, 99])).toEqual([2, 2, 0, 2, 99]);
    });
  });
  describe("handles simple examples", () => {
    it("should handle [1,0,0,0,99]", () => {
      expect(solution([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
    });
    it("should handle [2,3,0,3,99]", () => {
      expect(solution([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
    });
    it("should handle [2,4,4,5,99,0]", () => {
      expect(solution([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
    });
  });
  describe("handles complex examples", () => {
    it("should handle [1,1,1,4,99,5,6,0,99]", () => {
      expect(solution([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
        30,
        1,
        1,
        4,
        2,
        5,
        6,
        0,
        99
      ]);
    });
    it("should handle [1,9,10,3,2,3,11,0,99,30,40,50]", () => {
      expect(solution([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])).toEqual([
        3500,
        9,
        10,
        70,
        2,
        3,
        11,
        0,
        99,
        30,
        40,
        50
      ]);
    });
  });
  describe("handles unknown Opcodes", () => {
    it("should not handle Opcode 3", () => {
      expect(solution([3, 2, 0, 2, 99])).toEqual(null);
    });
  });
});
