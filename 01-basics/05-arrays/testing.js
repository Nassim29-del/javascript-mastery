/**
 * @file exercises.test.js
 * @description Jest unit tests for the array exercises in `exercises.js`.
 * Run with: `npx jest`
 */

const {
  findMax,
  reverseArray,
  removeDuplicates,
  countOccurrences,
  chunk,
  intersection,
  flattenOnce,
  moveZeros,
  secondLargest,
} = require("./exercises");

test("findMax returns the largest number", () => {
  expect(findMax([3, 9, 2])).toBe(9);
  expect(findMax([-5, -1, -9])).toBe(-1); // Works with all-negative arrays
  expect(findMax([])).toBeUndefined(); // Edge case: empty array
});

test("reverseArray does not change the input", () => {
  const input = [1, 2, 3];
  expect(reverseArray(input)).toEqual([3, 2, 1]);
  expect(input).toEqual([1, 2, 3]); // The original array is unchanged
  expect(reverseArray([])).toEqual([]);
});

test("removeDuplicates keeps only the first occurrence of each value", () => {
  expect(removeDuplicates([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  expect(removeDuplicates(["a", "a"])).toEqual(["a"]);
});

test("countOccurrences counts matching values", () => {
  expect(countOccurrences([1, 2, 1, 1], 1)).toBe(3);
  expect(countOccurrences(["a", "b"], "c")).toBe(0);
  expect(countOccurrences([1, "1"], 1)).toBe(1); // Strict equality: "1" !== 1
});

test("chunk splits an array into groups of a given size", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  expect(chunk([], 2)).toEqual([]);
});

test("intersection returns unique shared values", () => {
  expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  expect(intersection([1, 1, 2], [1])).toEqual([1]); // No duplicates in the result
  expect(intersection([1], [2])).toEqual([]);
});

test("flattenOnce removes one level of nesting", () => {
  expect(flattenOnce([1, [2, 3], [4]])).toEqual([1, 2, 3, 4]);
  expect(flattenOnce([[1, [2]]])).toEqual([1, [2]]); // Deeper levels are kept
});

test("moveZeros moves zeros to the end and keeps the order", () => {
  expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  expect(moveZeros([0, 0])).toEqual([0, 0]);
  expect(moveZeros([1, 2])).toEqual([1, 2]);
});

test("secondLargest returns the second largest unique number", () => {
  expect(secondLargest([5, 1, 5, 3])).toBe(3);
  expect(secondLargest([10, 20])).toBe(10);
  expect(secondLargest([7, 7])).toBeUndefined(); // Only one unique value
});