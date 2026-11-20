const {
  evenOrOdd,
  getGrade,
  isLeapYear,
  dayName,
  maxOfThree,
  canEnter,
  getUsername,
} = require("./exercises");

describe("evenOrOdd", () => {
  test("detects even and odd numbers", () => {
    expect(evenOrOdd(4)).toBe("even");
    expect(evenOrOdd(7)).toBe("odd");
    expect(evenOrOdd(0)).toBe("even");
    expect(evenOrOdd(-3)).toBe("odd");
  });
});

describe("getGrade", () => {// ==========================================
// Unit Tests for Conditional & Control Flow Helpers (Jest)
// ==========================================

// Import the functions under test from `./exercises`
// (Update this path if your source file has a different name, e.g., `./conditionals`)
const {
  evenOrOdd,
  getGrade,
  isLeapYear,
  dayName,
  maxOfThree,
  canEnter,
  getUsername,
} = require("./exercises");

// Test suite for `evenOrOdd`
describe("evenOrOdd", () => {
  test("detects even and odd numbers", () => {
    // Positive evens/odds, zero (even), and negative odd numbers
    expect(evenOrOdd(4)).toBe("even");
    expect(evenOrOdd(7)).toBe("odd");
    expect(evenOrOdd(0)).toBe("even");
    expect(evenOrOdd(-3)).toBe("odd");
  });
});

// Test suite for `getGrade`
describe("getGrade", () => {
  test("returns the right letter", () => {
    // Boundary values (90, 60) and mid-range scores across A through F
    expect(getGrade(95)).toBe("A");
    expect(getGrade(90)).toBe("A");
    expect(getGrade(85)).toBe("B");
    expect(getGrade(72)).toBe("C");
    expect(getGrade(60)).toBe("D");
    expect(getGrade(59)).toBe("F");
  });

  test("rejects invalid scores", () => {
    // Scores outside the valid 0-100 range return `"invalid"`
    expect(getGrade(-1)).toBe("invalid");
    expect(getGrade(101)).toBe("invalid");
  });
});

// Test suite for `isLeapYear`
describe("isLeapYear", () => {
  test("follows the leap-year rules", () => {
    expect(isLeapYear(2024)).toBe(true);   // Divisible by 4 -> leap year
    expect(isLeapYear(2023)).toBe(false);  // Not divisible by 4 -> common year
    expect(isLeapYear(1900)).toBe(false);  // Century divisible by 100 but not 400 -> common year
    expect(isLeapYear(2000)).toBe(true);   // Century divisible by 400 -> leap year
  });
});

// Test suite for `dayName`
describe("dayName", () => {
  test("maps numbers to days", () => {
    // Check start, middle, end of week, and an out-of-range index
    expect(dayName(0)).toBe("Sunday");
    expect(dayName(3)).toBe("Wednesday");
    expect(dayName(6)).toBe("Saturday");
    expect(dayName(7)).toBe("invalid");
  });
});

// Test suite for `maxOfThree`
describe("maxOfThree", () => {
  test("finds the largest number", () => {
    // Maximum at the end, at the start, and among negative numbers
    expect(maxOfThree(1, 2, 3)).toBe(3);
    expect(maxOfThree(9, 2, 3)).toBe(9);
    expect(maxOfThree(-5, -2, -9)).toBe(-2);
  });
});

// Test suite for `canEnter`
describe("canEnter", () => {
  test("checks age, ticket and VIP status", () => {
    expect(canEnter(20, true, false)).toBe(true);   // Adult with ticket -> allowed
    expect(canEnter(16, true, false)).toBe(false);  // Under 18 without VIP -> denied
    expect(canEnter(20, false, false)).toBe(false); // Adult without ticket or VIP -> denied
    expect(canEnter(15, false, true)).toBe(true);   // VIP overrides age and ticket requirements
  });
});

// Test suite for `getUsername`
describe("getUsername", () => {
  test("uses ?? correctly", () => {
    expect(getUsername("nasim")).toBe("nasim");      // Non-null/non-undefined string kept
    expect(getUsername(null)).toBe("guest");        // `null` triggers `"guest"` fallback
    expect(getUsername(undefined)).toBe("guest");   // `undefined` triggers `"guest"` fallback
    expect(getUsername("")).toBe("");               // Empty string is preserved by `??` (unlike `||`)
  });
});
  test("returns the right letter", () => {
    expect(getGrade(95)).toBe("A");
    expect(getGrade(90)).toBe("A");
    expect(getGrade(85)).toBe("B");
    expect(getGrade(72)).toBe("C");
    expect(getGrade(60)).toBe("D");
    expect(getGrade(59)).toBe("F");
  });

  test("rejects invalid scores", () => {
    expect(getGrade(-1)).toBe("invalid");
    expect(getGrade(101)).toBe("invalid");
  });
});

describe("isLeapYear", () => {
  test("follows the leap-year rules", () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2023)).toBe(false);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
  });
});

describe("dayName", () => {
  test("maps numbers to days", () => {
    expect(dayName(0)).toBe("Sunday");
    expect(dayName(3)).toBe("Wednesday");
    expect(dayName(6)).toBe("Saturday");
    expect(dayName(7)).toBe("invalid");
  });
});

describe("maxOfThree", () => {
  test("finds the largest number", () => {
    expect(maxOfThree(1, 2, 3)).toBe(3);
    expect(maxOfThree(9, 2, 3)).toBe(9);
    expect(maxOfThree(-5, -2, -9)).toBe(-2);
  });
});

describe("canEnter", () => {
  test("checks age, ticket and VIP status", () => {
    expect(canEnter(20, true, false)).toBe(true);
    expect(canEnter(16, true, false)).toBe(false);
    expect(canEnter(20, false, false)).toBe(false);
    expect(canEnter(15, false, true)).toBe(true);
  });
});

describe("getUsername", () => {
  test("uses ?? correctly", () => {
    expect(getUsername("nasim")).toBe("nasim");
    expect(getUsername(null)).toBe("guest");
    expect(getUsername(undefined)).toBe("guest");
    expect(getUsername("")).toBe("");
  });
});
