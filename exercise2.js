const numbers = [1, 2, 3, 4, 5];

// Square
const squared = numbers.map(num => num * num);

// Even numbers
const evens = numbers.filter(num => num % 2 === 0);

// Sum
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Squared:", squared);
console.log("Even numbers:", evens);
console.log("Sum:", sum);
