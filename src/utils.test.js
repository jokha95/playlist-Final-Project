import { getAccumulationOfArray } from "./utils";

describe("Testing src/utils.js", () => {
  it("should return sum of array elements", () => {
    let array = [1, 2, 3];
    let expectedResult = 6;
    expect(getAccumulationOfArray(array, 0, (a, b) => a + b)).toBe(
      expectedResult
    );
  });
});
