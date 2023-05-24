let arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * (10 - (-10) + 1)) + (-10));
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = arr[i] * arr[i];
  }
}

console.log("Массив: " + arr);
