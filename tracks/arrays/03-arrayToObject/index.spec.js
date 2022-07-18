import { arrayToObject } from "./solution/index.js";

describe("arrays/arrayToObject", () => {
  it("should transform array to object", () => {
    expect(arrayToObject).toBeDefined();
    expect(arrayToObject([])).toEqual({});
    expect(arrayToObject([{ id: 1, name: "Foo" }])).toEqual({
      1: { id: 1, name: "Foo" },
    });
    expect(
      arrayToObject([
        { id: 1, name: "Foo" },
        { id: 2, name: "Bar" },
        { id: 1, name: "Foo" },
      ])
    ).toEqual({
      1: { id: 1, name: "Foo" },
      2: { id: 2, name: "Bar" },
    });
  });
});
