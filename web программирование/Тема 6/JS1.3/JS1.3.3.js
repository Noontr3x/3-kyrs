let arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * (10 - (-10) + 1)) + (-10));
}

let sumPositive = 0;
let countPositive = 0;
let sumNegative = 0;
let countNegative = 0;
let countZero = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sumPositive += arr[i];
    countPositive++;
  } else if (arr[i] < 0) {
    sumNegative += arr[i];
    countNegative++;
  } else {
    countZero++;
  }
}
let avgPositive = sumPositive / countPositive;
let avgNegative = sumNegative / countNegative;

console.log("Массив: " + arr);
