import { expect } from "chai";
import concatArrays from "../concatArrays";
import { AuthorityResponseData } from "../types";
import { mockEstablishments } from "./mockData";
import { aggregateRatings } from "../ratingController";

describe("Array", function () {
  it("should concatenate arrays", function () {
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    const res = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(concatArrays(a, b)).to.eql(res);
  });

  it("testing aggregateRatings", () => {
    const expected: AuthorityResponseData = [
      { name: "Pass", value: 16.67 },
      { name: "Pass and Eat Safe", value: 33.33 },
      { name: "Improvement Required", value: 50.0 },
    ];

    expect(aggregateRatings(mockEstablishments)).to.deep.equal(expected);
  });
});
