import * as assert from "assert";
import * as shuffle from "../src/index";

describe("Tests", () => {
  it("should return a promise", async () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const arrCopy = arr.slice(0);
    const result = shuffle(arrCopy);

    assert.equal(typeof result.then, "function");
    assert.deepEqual(arrCopy, arr);
  });

  it("should handle empty array", async () => {
    const arr = [];
    const result = await shuffle(arr);

    assert.deepEqual(arr, result);
    assert.deepEqual(result, []);
  });

  it("should handle array with single element", async () => {
    const arr = [0];
    const result = await shuffle(arr);

    assert.deepEqual(arr, result);
    assert.deepEqual(result, [0]);
  });

  it("should shuffle array with two elements", async () => {
    const arr = [0, 1];
    const result = await shuffle(arr);

    assert.deepEqual(arr, result);
    assert.deepEqual(result, result[0] === 0 ? [0, 1] : [1, 0]);
  });

  it("should shuffle array with many elements", async () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    for (let index = 0; index < 1000; index++) {
      const arrCopy = arr.slice(0);
      const result = await shuffle(arrCopy);

      assert.deepEqual(arrCopy, result);
      assert.notDeepEqual(arrCopy, arr);
      assert.deepEqual(arrCopy.sort(), arr.sort());
    }
  });
});
