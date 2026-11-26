console.log(square(4));
function square(x){
    return x * x;
}

const cube = function (x){
    return x * x * x;
};
console.log(cube(3));


conost double = (x) => x*2;
const add = ( a,b) => {
    const result = a + b;
    return result;
};
const makeUser = (name) => ({ name, active: true});
console.log(double(5) , add(2 , 3,) , makeUser("Nasim"));

function greet(name = "friend") {
    return `Hello, ${name} !`;
}
console.log(greet());
console.log(greet("Nasim"));


funcion sumAll(...numbers){
    let total = 0;
    for(const n of numbers) 
        total += n;
    return total;
}
console.log(sumall(1 , 2, 3,,4));

function sayHi() {
  console.log("Hi!");
}
console.log(sayHi()); // prints "Hi!" then undefined

// Functions as values: callbacks
function repeat(times, action) {
  for (let i = 0; i < times; i++) action(i);
}
repeat(3, (i) => console.log("Round", i + 1));

// Functions that return functions
function multiplier(factor) {
  return (x) => x * factor;
}
const triple = multiplier(3);
console.log(triple(10)); // 30

// Recursion: a function calling itself
function countdown(n) {
  if (n === 0) return "Liftoff!";
  return `${n} ` + countdown(n - 1);
  }
console.log(countdown(3)); // 3 2 1 Liftoff!