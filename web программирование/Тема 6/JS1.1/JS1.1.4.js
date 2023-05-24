let name = prompt("Введите ваше имя:");
let birthYear = prompt("Введите год вашего рождения:");
let age = new Date().getFullYear() - birthYear;

document.write(`${name}: ${age}`);
