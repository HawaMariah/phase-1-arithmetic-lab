// Write your code here
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

console.log(multiply);

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random = randomInteger(1, 100);

console.log(random);

const num3 = 20;
const num4 = 8;
const mod = num3 % num4;

console.log(mod);

const numbers = [10, 5, 20, 15];
const max = Math.max(...numbers);

console.log(max);
