/**
 * @file examples.js
 * @description Demonstrates the different loop constructs available in
 * JavaScript, along with the `break` and `continue` control statements.
 * Run with: `node examples.js`
 */

// ---------------------------------------------------------------------------
// 1. Basic `for` loop: counts up from 1 to 5.
// ---------------------------------------------------------------------------
for (let i = 1; i <= 5; i++) {
  console.log("for:", i);
}

// ---------------------------------------------------------------------------
// 2. Reverse `for` loop: counts down from 3 to 1.
// ---------------------------------------------------------------------------
for (let i = 3; i > 0; i--) {
  console.log("countdown:", i);
}

// ---------------------------------------------------------------------------
// 3. `while` loop: doubles a value until it exceeds 100.
//    The condition is checked before each iteration.
// ---------------------------------------------------------------------------
let value = 1;
while (value <= 100) {
  value *= 2;
}
console.log("while result:", value); // 128

// ---------------------------------------------------------------------------
// 4. `do...while` loop: the body always runs at least once,
//    even though the condition is false from the start.
// ---------------------------------------------------------------------------
let attempts = 0;
do {
  attempts++;
} while (attempts < 0);
console.log("do...while attempts:", attempts); // 1

// ---------------------------------------------------------------------------
// 5. `for...of` loop: iterates over the values of an iterable,
//    such as an array or a string.
// ---------------------------------------------------------------------------
const fruits = ["apple", "orange", "banana"];
for (const fruit of fruits) {
  console.log("for...of:", fruit);
}

for (const letter of "hey") {
  console.log("letter:", letter);
}

// ---------------------------------------------------------------------------
// 6. `for...in` loop: iterates over the keys (property names) of an object.
// ---------------------------------------------------------------------------
const person = { name: "Nasim", city: "Toronto" };
for (const key in person) {
  console.log(`for...in: ${key} = ${person[key]}`);
}

// ---------------------------------------------------------------------------
// 7. `continue` and `break`: prints odd numbers up to 7.
//    `continue` skips the current iteration; `break` exits the loop entirely.
// ---------------------------------------------------------------------------
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers.
  if (i > 7) break; // Stop once we pass 7.
  console.log("odd:", i);
}

// ---------------------------------------------------------------------------
// 8. Nested loops: prints a 3 × 3 multiplication grid.
//    The outer loop handles rows; the inner loop handles columns.
// ---------------------------------------------------------------------------
for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += `${row * col}\t`;
  }
  console.log(line);
}