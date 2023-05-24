function squareNegativeElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] = Math.pow(arr[i], 2);
      }
    }
    return arr;
  }
  
  // Пример использования
  let numbers = [1, -2, 3, -4, 5, 6, -7, 8, 9, -10, 11];
  let result = squareNegativeElements(numbers);
  console.log(result);
  