/**
 * @file exercises.js
 * @description A collection of exercises that practice working with arrays
 * using loops: searching, reversing, filtering, grouping, and reordering.
 */

/**
 * Finds the largest number in an array.
 *
 * @param {number[]} numbers - The array of numbers to search.
 * @returns {number|undefined} The largest value, or `undefined` if the array is empty.
 * @example
 * findMax([3, 9, 2]); // 9
 */
function findMax(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  // Start with the first element and replace it whenever a larger one is found.
  let max = numbers[0];
  for (const n of numbers) {
    if (n > max) {
      max = n;
    }
  }
  return max;
}

/**
 * Returns a new array with the elements in reverse order.
 * The original array is not modified.
 *
 * @param {Array} arr - The array to reverse.
 * @returns {Array} A new, reversed array.
 * @example
 * reverseArray([1, 2, 3]); // [3, 2, 1]
 */
function reverseArray(arr) {
  const result = [];
  // Walk the array from the last index back to the first.
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

/**
 * Returns a new array with duplicate values removed.
 * The first occurrence of each value is kept, preserving the original order.
 *
 * @param {Array} arr - The array to process.
 * @returns {Array} A new array containing only unique values.
 * @example
 * removeDuplicates([1, 2, 2, 3, 1]); // [1, 2, 3]
 */
function removeDuplicates(arr) {
  const result = [];
  for (const item of arr) {
    // Only add the item if it hasn't been added already.
    if (!result.includes(item)) result.push(item);
  }
  return result;
}

/**
 * Counts how many times a value appears in an array.
 * Uses strict equality (`===`) for comparison.
 *
 * @param {Array} arr - The array to search.
 * @param {*} value - The value to count.
 * @returns {number} The number of matching elements.
 * @example
 * countOccurrences(["a", "b", "a"], "a"); // 2
 */
function countOccurrences(arr, value) {
  let count = 0;
  for (const item of arr) {
    if (item === value) count++;
  }
  return count;
}

/**
 * Splits an array into smaller arrays of a given size.
 * The last chunk may be shorter if the elements don't divide evenly.
 *
 * @param {Array} arr - The array to split.
 * @param {number} size - The maximum length of each chunk.
 * @returns {Array[]} An array of chunks.
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 */
function chunk(arr, size) {
  const result = [];
  // Step through the array `size` elements at a time.
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Returns the values that appear in both arrays, without duplicates.
 *
 * @param {Array} a - The first array.
 * @param {Array} b - The second array.
 * @returns {Array} A new array of shared values, in the order they appear in `a`.
 * @example
 * intersection([1, 2, 2, 3], [2, 3, 4]); // [2, 3]
 */
function intersection(a, b) {
  const result = [];
  for (const item of a) {
    // Keep the item only if it's in `b` and hasn't already been added.
    if (b.includes(item) && !result.includes(item)) result.push(item);
  }
  return result;
}

/**
 * Flattens an array by one level of nesting.
 * Deeper nested arrays are left as they are.
 *
 * @param {Array} arr - The array to flatten.
 * @returns {Array} A new array with one level of nesting removed.
 * @example
 * flattenOnce([1, [2, 3], [4, [5]]]); // [1, 2, 3, 4, [5]]
 */
function flattenOnce(arr) {
  const result = [];
  for (const item of arr) {
    // Spread nested arrays into the result; push other values directly.
    if (Array.isArray(item)) result.push(...item);
    else result.push(item);
  }
  return result;
}

/**
 * Moves all zeros to the end of an array while keeping the order
 * of the non-zero elements.
 *
 * @param {number[]} arr - The array to reorder.
 * @returns {number[]} A new array with all zeros placed at the end.
 * @example
 * moveZeros([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]
 */
function moveZeros(arr) {
  const nonZeros = [];
  let zeroCount = 0;
  // First pass: collect non-zero values and count the zeros.
  for (const n of arr) {
    if (n === 0) {
      zeroCount++;
    } else {
      nonZeros.push(n);
    }
  }
  // Second pass: append the counted zeros to the end.
  for (let i = 0; i < zeroCount; i++) {
    nonZeros.push(0);
  }
  return nonZeros;
}

/**
 * Finds the second largest unique number in an array.
 *
 * @param {number[]} numbers - The array of numbers to search.
 * @returns {number|undefined} The second largest unique value, or `undefined`
 * if there are fewer than two unique values.
 * @example
 * secondLargest([5, 1, 5, 3]); // 3
 */
function secondLargest(numbers) {
  // Remove duplicates, then sort from largest to smallest.
  const unique = removeDuplicates(numbers).sort((a, b) => b - a);
  return unique[1];
}

module.exports = {
  findMax,
  reverseArray,
  removeDuplicates,
  countOccurrences,
  chunk,
  intersection,
  flattenOnce,
  moveZeros,
  secondLargest,
};