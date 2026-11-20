// ==========================================
// 1. Variables (`const` vs `let`) & Mutability
// ==========================================

// `const` declares a block-scoped variable whose binding cannot be reassigned.
// (Check spelling of "Naism" vs. "Nasim" below if intentional.)
const name = "Naism";

// `let` declares a block-scoped variable that can be reassigned later.
let age = 25;
age = age + 1; // Reassigning `let` is allowed (25 -> 26)

// Template literals (backticks) allow embedded expressions via `${...}`.
console.log(`${name} is ${age} years old`);

// Even when an object or array is declared with `const`, its internal
// properties or elements can still be mutated (only reassigning `user = ...` fails).
const user = { name: "Nasim", skills: ["JavaScript"] };
user.skills.push("SQL"); // Mutates the `skills` array in place
console.log(user.skills); // ["JavaScript", "SQL"]


// ==========================================
// 2. JavaScript Primitive Types & `typeof`
// ==========================================

console.log(typeof "hello");        // "string"
console.log(typeof 23);             // "number"
console.log(typeof 10n);            // "bigint" (fixed typo from `10m`)
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined" (fixed typo from `underfined`)
console.log(typeof Symbol("id"));   // "symbol" (unique identifier primitive)

// Famous JavaScript quirk: `typeof null` returns "object" due to a legacy
// implementation bug from the first version of JS, even though `null` is a primitive.
console.log(typeof null);           // "object"


// ==========================================
// 3. Type Coercion & Explicit Type Conversion
// ==========================================

// Implicit coercion: `-` forces string "5" into number 5 -> 5 - 1 = 4
console.log("5" - 1);       // 4 (number)

// Implicit coercion: `+` with a string performs string concatenation -> "51"
console.log("5" + 1);       // "51" (string)

// Explicit conversion to Number
console.log(Number("42"));    // 42 (number)

// Explicit conversion to String
console.log(String(42));      // "42" (string)

// Explicit conversion to Boolean (fixed typos in `console.log` and `Boolean`)
console.log(Boolean(""));     // false (empty string is falsy)
console.log(Boolean("hi"));   // true (non-empty string is truthy)


// ==========================================
// 4. All 8 Falsy Values in JavaScript
// ==========================================

// Any value that coerces to `false` when evaluated in a boolean context
// (such as an `if` condition or `Boolean(value)`). There are 8 falsy values in JS:
const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];

// Iterate through each falsy value and log its boolean conversion
falsy.forEach((value) => {
  console.log(value, "->", Boolean(value));
});