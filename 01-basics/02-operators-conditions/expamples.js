console.log(10 + 2);
console.log(10  - 2);
console.log(10  * 2);
console.log(10  / 2);
console.log(10  % 2);
console.log(2 ** 2);

let count = 5;
count += 2;
count++;
console.log(count);

console.log("5" == 5);
console.log("5" === 5);
console.log(null == undefined);
console.log(null === undefined);


const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(isLoggedIn);


const score = 0;
console.log(score || 100);
console.log(score ?? 100);

const temperature = 18;
if (temperature > 25) {
    console.log("Hot");
} else if (temperature > 15){
    console.log("Nice");
} else {
    console.log("Cold");
}

const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);


const day = "sat";
switch(day){// ==========================================
// 1. Arithmetic & Assignment Operators
// ==========================================

console.log(10 + 2);   // 12 — Addition
console.log(10 - 2);   // 8  — Subtraction
console.log(10 * 2);   // 20 — Multiplication
console.log(10 / 2);   // 5  — Division
console.log(10 % 2);   // 0  — Remainder (modulo): 10 divided by 2 leaves 0
console.log(2 ** 2);   // 4  — Exponentiation: 2 raised to the power of 2

let count = 5;
count += 2;            // Compound assignment: count = count + 2 -> 7
count++;               // Increment operator: adds 1 -> 8
console.log(count);    // 8


// ==========================================
// 2. Loose (`==`) vs. Strict (`===`) Equality
// ==========================================

// `==` performs type coercion before comparing; `===` requires both value and type to match
console.log("5" == 5);              // true  — string "5" is coerced to number 5
console.log("5" === 5);             // false — string vs. number (different types)
console.log(null == undefined);     // true  — treated as equal under loose equality
console.log(null === undefined);    // false — different primitive types


// ==========================================
// 3. Logical Operators & Nullish Coalescing
// ==========================================

const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin); // false — logical AND requires both operands to be true
console.log(isLoggedIn || isAdmin); // true  — logical OR returns true if at least one is true
console.log(isLoggedIn);            // true  — original boolean remains unchanged

const score = 0;
console.log(score || 100);  // 100 — `||` falls back on any falsy value (0 is falsy)
console.log(score ?? 100);  // 0   — `??` only falls back on `null` or `undefined` (keeps 0)


// ==========================================
// 4. Conditionals (`if/else`, Ternary, `switch`)
// ==========================================

const temperature = 18;
if (temperature > 25) {
  console.log("Hot");
} else if (temperature > 15) {
  console.log("Nice");    // Runs here since 18 is greater than 15 (and not greater than 25)
} else {
  console.log("Cold");
}

// Ternary operator: condition ? valueIfTrue : valueIfFalse
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);        // "adult"

// Fall-through in `switch`: both `"sat"` and `"sun"` share the same `"Weekend!"` branch
const day = "sat";
switch (day) {
  case "sat":
  case "sun":
    console.log("Weekend!");
    break;
  default:
    console.log("Weekdays");
}


// ==========================================
// 5. Floating-Point Precision
// ==========================================

// IEEE 754 binary floating-point cannot represent 0.1 and 0.2 as exact base-2 fractions
console.log(0.1 + 0.2 === 0.3); // false (0.1 + 0.2 evaluates to ~0.30000000000000004)

// Comparing the difference against `Number.EPSILON` checks if two floats are effectively equal
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
    case "sat" :
        case "sun" :
            console.log("Weekend!");
            break;
        default:
            console.log("Weekdays");
}


// Floating-point surprise
console.log(0.1 + 0.2 === 0.3); // false
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
