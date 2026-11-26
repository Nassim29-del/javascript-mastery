/**
 * @file exercises.js
 * @description A collection of beginner-friendly exercises that practice
 * JavaScript loops: `for`, `while`, `do...while`, and `for...of`.
 * Each function is exported for use in the accompanying Jest test suite.
 */

/**
 * Calculates the sum of all integers from 1 to n (inclusive).
 *
 * @param {number} n - The upper bound of the range.
 * @returns {number} The sum 1 + 2 + ... + n. Returns 0 when n < 1.
 * @example
 * sumTo(5); // 15
 */
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param {number} n - A non-negative integer.
 * @returns {number} The product 1 × 2 × ... × n. By definition, 0! = 1.
 * @example
 * factorial(5); // 120
 */
function factorial(n) {
  let result = 1;
  // Start at 2, since multiplying by 1 has no effect.
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Counts the number of digits in an integer.
 * Negative numbers are handled by using their absolute value.
 *
 * @param {number} n - The integer to inspect.
 * @returns {number} The number of digits in n.
 * @example
 * countDigits(-42); // 2
 */
function countDigits(n) {
  let num = Math.abs(n);
  let count = 0;
  // A do...while loop guarantees at least one pass,
  // so 0 is correctly counted as a single digit.
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

/**
 * Builds a multiplication table for a given number.
 *
 * @param {number} n - The number to multiply.
 * @param {number} [upTo=10] - The highest multiplier to include.
 * @returns {string[]} An array of formatted lines, e.g. "3 x 2 = 6".
 * @example
 * multiplicationTable(3, 3); // ["3 x 1 = 3", "3 x 2 = 6", "3 x 3 = 9"]
 */
function multiplicationTable(n, upTo = 10) {
  const lines = [];
  for (let i = 1; i <= upTo; i++) {
    lines.push(`${n} x ${i} = ${n * i}`);
  }
  return lines;
}

/**
 * Determines whether a number is prime.
 *
 * @param {number} n - The number to test.
 * @returns {boolean} `true` if n is prime, otherwise `false`.
 * @example
 * isPrime(17); // true
 */
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  // A composite number always has a factor no greater than its square root,
  // so checking divisors up to √n is sufficient.
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Generates the first n numbers of the Fibonacci sequence.
 *
 * @param {number} n - How many Fibonacci numbers to generate.
 * @returns {number[]} An array containing the first n Fibonacci numbers.
 * @example
 * fibonacci(5); // [0, 1, 1, 2, 3]
 */
function fibonacci(n) {
  const result = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    result.push(a);
    // Destructuring swap: advance both values in a single step.
    [a, b] = [b, a + b];
  }
  return result;
}

/**
 * Sums only the positive numbers in an array.
 *
 * @param {number[]} numbers - The array of numbers to process.
 * @returns {number} The sum of all values greater than 0.
 * @example
 * sumPositives([1, -2, 3, 0, 4]); // 8
 */
function sumPositives(numbers) {
  let sum = 0;
  for (const num of numbers) {
    // Skip zero and negative values.
    if (num <= 0) {
      continue;
    }
    sum += num;
  }
  return sum;
}

/**
 * Builds a right-angled triangle of asterisks.
 *
 * @param {number} height - The number of rows in the triangle.
 * @returns {string} The triangle, with rows separated by newline characters.
 * @example
 * starTriangle(3); // "*\n**\n***"
 */
function starTriangle(height) {
  const rows = [];
  for (let row = 1; row <= height; row++) {
    let line = "";
    // Each row contains as many stars as its row number.
    for (let i = 0; i < row; i++) {
      line += "*";
    }
    rows.push(line);
  }
  return rows.join("\n");
}

module.exports = {
  sumTo,
  factorial,
  countDigits,
  multiplicationTable,
  isPrime,
  fibonacci,
  sumPositives,
  starTriangle,
};