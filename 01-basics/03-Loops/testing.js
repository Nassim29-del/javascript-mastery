const {
  sumTo,
  factorial,
  countDigits,
  multiplicationTable,
  isPrime,
  fibonacci,
  sumPositives,
  starTriangle,
} = require("./exercises");

test("sumTo", () => {
  expect(sumTo(5)).toBe(15);
  expect(sumTo(100)).toBe(5050);
  expect(sumTo(0)).toBe(0);
});

test("factorial", () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(5)).toBe(120);
  expect(factorial(10)).toBe(3628800);
});

test("countDigits", () => {
  expect(countDigits(12345)).toBe(5);
  expect(countDigits(0)).toBe(1);
  expect(countDigits(-42)).toBe(2);
  expect(countDigits(7)).toBe(1);
});

test("multiplicationTable", () => {
  expect(multiplicationTable(3, 3)).toEqual(["3 x 1 = 3", "3 x 2 = 6", "3 x 3 = 9"]);
  expect(multiplicationTable(7)).toHaveLength(10);
  expect(multiplicationTable(7)[9]).toBe("7 x 10 = 70");
});

test("isPrime", () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(17)).toBe(true);
  expect(isPrime(97)).toBe(true);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(15)).toBe(false);
  expect(isPrime(49)).toBe(false);
});

test("fibonacci", () => {
  expect(fibonacci(0)).toEqual([]);
  expect(fibonacci(1)).toEqual([0]);
  expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("sumPositives", () => {
  expect(sumPositives([1, -2, 3, 0, 4])).toBe(8);
  expect(sumPositives([-1, -2])).toBe(0);
  expect(sumPositives([])).toBe(0);
});

test("starTriangle", () => {
  expect(starTriangle(1)).toBe("*");
  expect(starTriangle(3)).toBe("*\n**\n***");
});
