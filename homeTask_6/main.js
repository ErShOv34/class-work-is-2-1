const getEvenNumbers = numbers => 
numbers.filter(number => number % 2 === 0);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = getEvenNumbers(numbers);

console.log(`Исходный список: ${numbers}`);
console.log(`Список четных чисел: ${evenNumbers}`);
