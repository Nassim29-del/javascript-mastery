// ==========================================
// Utility Functions Module (CommonJS)
// ==========================================

/**
 * Returns a more accurate type name than `typeof` alone, distinguishing
 * `null` and arrays from standard `"object"` values.
 *
 * @param {*} value - Any JavaScript value to inspect.
 * @returns {string} The type label (e.g., "null", "array", "string", "number").
 */
function getType(value) {
  // Loose equality (`== null`) catches both `null` and `undefined`
  if (value == null) {
    return "null";
  }

  // `typeof []` returns "object", so check `Array.isArray` explicitly
  if (Array.isArray(value)) {
    return "array";
  }

  return typeof value;
}

/**
 * Swaps two values using array destructuring and returns them as `[b, a]`.
 * Note: Because JS passes arguments by value, this returns a new pair rather
 * than mutating external variables passed by the caller.
 *
 * @param {*} a - First value.
 * @param {*} b - Second value.
 * @returns {Array} A two-element array `[b, a]`.
 */
function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

/**
 * Safely converts a value to a finite-style number or returns `null` for
 * empty/ambiguous inputs (`null`, `undefined`, empty string, booleans, or `NaN`).
 *
 * @param {*} value - Input value to convert to a number.
 * @returns {number|null} The converted number, or `null` if invalid/unsupported.
 */
function toNumber(value) {
  if (value == null || value === "" || typeof value === "boolean") {
    return null;
  }

  const result = Number(value);

  // Fixed syntax typo: used `:` instead of `;` for the ternary operator
  return Number.isNaN(result) ? null : result;
}

/**
 * Counts how many elements in an array evaluate to falsy (`!item`).
 *
 * @param {Array} values - Array of values to check.
 * @returns {number} Number of falsy elements in `values`.
 */
function countFalsy(values) {
  // Fixed parameter name from `value` to `values` to match `.filter(...)`
  return values.filter((item) => !item).length;
}

/**
 * Converts a temperature from Celsius to Fahrenheit, rounded to 1 decimal place.
 *
 * @param {number} cel - Temperature in degrees Celsius.
 * @returns {number} Equivalent temperature in degrees Fahrenheit.
 */
function celsiusToFahrenheit(cel) {
  // Multiply by 10, round to nearest integer, then divide by 10 for 1 decimal place
  return Math.round(((cel * 9) / 5 + 32) * 10) / 10;
}

// Export functions for use with `require("./utils")` in Node.js
module.exports = {
  getType,
  swap,
  toNumber,
  countFalsy,
  celsiusToFahrenheit,
};