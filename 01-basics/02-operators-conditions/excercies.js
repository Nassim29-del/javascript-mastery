// ==========================================
// Conditional Logic & Control Flow Helpers
// ==========================================

/**
 * Determines whether an integer is `"even"` or `"odd"`.
 *
 * @param {number} n - Integer to check.
 * @returns {string} `"even"` if divisible by 2, otherwise `"odd"`.
 */
function evenOrOdd(n) {
  return n % 2 === 0 ? "even" : "odd";
}

/**
 * Converts a numeric test score into a letter grade or `"invalid"` if out of range.
 *
 * @param {number} score - Score between 0 and 100 inclusive.
 * @returns {string} `"A"`, `"B"`, `"C"`, `"D"`, `"F"`, or `"invalid"`.
 */
function getGrade(score) {
  // Reject scores outside the valid 0-100 range
  if (score < 0 || score > 100) {
    return "invalid";
  }

  // Evaluated from highest to lowest so each threshold only triggers if below the one above
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";

  return "F";
}

/**
 * Checks whether a given year is a leap year in the Gregorian calendar.
 * Rules: divisible by 4, except century years unless also divisible by 400.
 *
 * @param {number} year - Four-digit calendar year.
 * @returns {boolean} `true` if `year` is a leap year, otherwise `false`.
 */
function isLeapYear(year) {
  // Fixed spelling (`isLeapYear`) and checked `year % 100 !== 0` instead of constant `100 !== 0`
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Maps a day index (0-6) to its weekday name, starting with Sunday as 0.
 *
 * @param {number} dayNumber - Day number (`0` = Sunday through `6` = Saturday).
 * @returns {string} Name of the weekday, or `"invalid"` for any other input.
 */
function dayName(dayNumber) {
  // Fixed `swicth` typo, replaced `:` after `"Sunday"` with `;`, and capitalized `"Wednesday"`
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "invalid";
  }
}

/**
 * Returns the largest of three numbers.
 *
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @param {number} c - Third number.
 * @returns {number} The maximum value among `a`, `b`, and `c`.
 */
function maxOfThree(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Determines entry eligibility: VIPs can always enter; non-VIPs must be 18+
 * and hold a ticket.
 *
 * @param {number} age - Guest's age in years.
 * @param {boolean} hasTicket - Whether the guest has a valid ticket.
 * @param {boolean} isVip - Whether the guest has VIP access.
 * @returns {boolean} `true` if entry is allowed, otherwise `false`.
 */
function canEnter(age, hasTicket, isVip) {
  // Removed duplicate definition of `canEnter`
  return (age >= 18 && hasTicket) || isVip;
}

/**
 * Returns the provided username or falls back to `"guest"` only when `name` is
 * `null` or `undefined` (nullish coalescing `??` preserves `""` or `0`).
 *
 * @param {string|null|undefined} name - Candidate username.
 * @returns {string} The given `name` or `"guest"`.
 */
function getUsername(name) {
  return name ?? "guest";
}

// Export functions for use with `require("./conditionals")` in Node.js
module.exports = {
  evenOrOdd,
  getGrade,
  isLeapYear,
  dayName,
  maxOfThree,
  canEnter,
  getUsername,
};