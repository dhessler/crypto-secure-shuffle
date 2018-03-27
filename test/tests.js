const test = require("ava");
const shuffle = require("../index");

test("should return a promise", async t => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const arrCopy = arr.slice(0);
  const result = shuffle(arrCopy);

  t.is(typeof result.then, "function");
  t.deepEqual(arrCopy, arr);
});

test("should handle empty array", async t => {
  const arr = [];
  const result = await shuffle(arr);

  t.deepEqual(arr, result);
  t.deepEqual(result, []);
});

test("should handle array with single element", async t => {
  const arr = [0];
  const result = await shuffle(arr);

  t.deepEqual(arr, result);
  t.deepEqual(result, [0]);
});

test("should shuffle array with two elements", async t => {
  const arr = [0, 1];
  const result = await shuffle(arr);

  t.deepEqual(arr, result);
  t.deepEqual(result, result[0] === 0 ? [0, 1] : [1, 0]);
});

test("should shuffle array with many elements", async t => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  for (let index = 0; index < 1000; index++) {
    const arrCopy = arr.slice(0);
    const result = await shuffle(arrCopy);

    t.deepEqual(arrCopy, result);
    t.notDeepEqual(arrCopy, arr);
    t.deepEqual(arrCopy.sort(), arr.sort());
  }
});
