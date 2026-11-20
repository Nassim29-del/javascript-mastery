// ==========================================
// Unit Tests for JavaScript Utility Functions (Jest)
// ==========================================

// Import the functions under test from the `./exercises` module
const {
  getType,
  swap,
  toNumber,
  countFalsy,
  celsiusToFahrenheit,
} = require("./exercises");

// Group tests for `getType`
describe("getType", () => {
  test("detects primitives", () => {
    // Verify standard primitive `typeof` results
    expect(getType("hi")).toBe("string");
    expect(getType(3)).toBe("number");
    expect(getType(true)).toBe("boolean");
    expect(getType(undefined)).toBe("undefined");
  });

  test("handles null and arrays correctly", () => {
    // Ensure `null` and arrays aren't misclassified as generic `"object"`
    expect(getType(null)).toBe("null");
    expect(getType([1, 2])).toBe("array");
    expect(getType({})).toBe("object");
  });
});

// Group tests for `swap`
describe("swap", () => {
  test("swaps two values", () => {
    // `.toEqual()` checks deep value equality for arrays
    expect(swap(1, 2)).toEqual([2, 1]);
    expect(swap("a", "b")).toEqual(["b", "a"]);
  });
});

// Group tests for `toNumber`
describe("toNumber", () => {
  test("converts valid values", () => {
    // Numeric strings and existing numbers should convert to JS numbers
    expect(toNumber("42")).toBe(42);
    expect(toNumber("3.5")).toBe(3.5);
    expect(toNumber(7)).toBe(7);
  });

  test("returns null for invalid values", () => {
    // Non-numeric strings, empty strings, `null`, and booleans should return `null`
    expect(toNumber("abc")).toBeNull();
    expect(toNumber("")).toBeNull();
    expect(toNumber(null)).toBeNull();
    expect(toNumber(true)).toBeNull();
  });
});

// Group tests for `countFalsy`
describe("countFalsy", () => {
  test("counts falsy values", () => {
    // Array contains 6 falsy values (0, "", null, undefined, NaN, false)
    // and 3 truthy values (1, "a", true)
    expect(countFalsy([0, 1, "", "a", null, undefined, NaN, false, true])).toBe(6);

    // An empty array has zero falsy values
    expect(countFalsy([])).toBe(0);
  });
});

// Group tests for `celsiusToFahrenheit`
describe("celsiusToFahrenheit", () => {
  test("converts temperatures", () => {
    // Freezing point, boiling point, -40° intersection, and rounded decimal
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
    expect(celsiusToFahrenheit(-40)).toBe(-40);
    expect(celsiusToFahrenheit(36.6)).toBe(97.9);
  });
});