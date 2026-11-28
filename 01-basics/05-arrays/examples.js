/**
 * @file examples.js
 * @description Demonstrates common JavaScript array operations: accessing
 * elements, adding and removing items, searching, sorting, iterating,
 * nested arrays, and type checking.
 * Run with: `node examples.js`
 */

// ---------------------------------------------------------------------------
// 1. Accessing elements
// ---------------------------------------------------------------------------
const colors = ["red", "blue", "green"];

console.log(colors[0]); // "red": the first element (index 0)
console.log(colors.length); // 3: the number of elements
console.log(colors.at(-1)); // "green": negative indexes count from the end

// ---------------------------------------------------------------------------
// 2. Adding and removing elements (these methods modify the original array)
// ---------------------------------------------------------------------------
colors.push("yellow"); // Add to the end
colors.unshift("black"); // Add to the start
console.log(colors); // ["black", "red", "blue", "green", "yellow"]

colors.pop(); // Remove from the end
colors.shift(); // Remove from the start
console.log(colors); // ["red", "blue", "green"]

// ---------------------------------------------------------------------------
// 3. slice vs. splice
//    slice(start, end) returns a copy of a section and leaves the array unchanged.
//    splice(start, deleteCount, ...items) removes or replaces items in place.
// ---------------------------------------------------------------------------
const nums = [10, 20, 30, 40, 50];
console.log(nums.slice(1, 3)); // [20, 30]: the end index is not included

nums.splice(1, 2, 99); // At index 1, remove 2 items and insert 99
console.log(nums); // [10, 99, 40, 50]

// ---------------------------------------------------------------------------
// 4. Searching
// ---------------------------------------------------------------------------
console.log(colors.includes("green")); // true
console.log(colors.indexOf("blue")); // 1
console.log(colors.indexOf("pink")); // -1: returned when the value isn't found
console.log([5, 12, 0].find((n) => n > 6)); // 12: the first element that matches

// ---------------------------------------------------------------------------
// 5. Sorting and reversing
//    The spread operator ([...array]) makes a copy, so the original stays unchanged.
// ---------------------------------------------------------------------------
const scores = [10, 2, 33, 1];

// Without a compare function, sort() compares values as strings.
console.log([...scores].sort()); // [1, 10, 2, 33]

// A compare function sorts the values numerically.
console.log([...scores].sort((a, b) => a - b)); // [1, 2, 10, 33]

console.log([...colors].reverse()); // ["green", "blue", "red"]

// ---------------------------------------------------------------------------
// 6. Iterating with forEach
//    The callback receives each element and its index.
// ---------------------------------------------------------------------------
colors.forEach((color, index) => console.log(index, color));

// ---------------------------------------------------------------------------
// 7. Nested arrays (2D grids)
//    Use one index for the row and a second for the column.
// ---------------------------------------------------------------------------
const grid = [
  [1, 2],
  [3, 4],
];
console.log(grid[1][0]); // 3: row 1, column 0

// ---------------------------------------------------------------------------
// 8. Checking the type
//    Arrays are objects in JavaScript, so use Array.isArray() to detect them.
// ---------------------------------------------------------------------------
console.log(typeof colors); // "object"
console.log(Array.isArray(colors)); // true