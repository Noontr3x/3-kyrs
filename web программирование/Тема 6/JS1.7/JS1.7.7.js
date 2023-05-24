let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Суммирование всех элементов
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// Выявление всех четных элементов
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Умножение каждого элемента на 2
let multipliedNumbers = numbers.map(num => num * 2);
console.log(multipliedNumbers);
