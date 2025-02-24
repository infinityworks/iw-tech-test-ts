import concatArrays from "../concatArrays";

describe("Array", function () {
  it("should concatenate arrays", function () {
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    const res = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(concatArrays(a, b)).toEqual(res);
  });
});
