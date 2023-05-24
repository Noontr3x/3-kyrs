let arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * (30 - (-10) + 1)) + (-10));
}

let sum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    count++;
  }
}
let avgPositive = sum / count;

console.log("Массив: " + arr);
console.log("Среднее арифметическое положительных элементов: " + avgPositive);
