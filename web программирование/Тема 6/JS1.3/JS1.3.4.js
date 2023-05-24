let redCount = 0;
let blackCount = 0;
let whiteCount = 0;


for (let i = 0; i < 1000000; i++) {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    redCount++;
  } else if (randomNumber === 1) {
    blackCount++;
  } else {
    whiteCount++;
  }
}

const maxRedCount = Math.max(redCount, blackCount, whiteCount);

console.log(`Красный цвет выпал максимальное количество раз: ${maxRedCount}`);
