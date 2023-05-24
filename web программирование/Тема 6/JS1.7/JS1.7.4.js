let calculateAverage = (array) => {
    if (array.length === 0) {
      return 0;
    }
    
    let sum = array.reduce((total, num) => total + num, 0);
    return sum / array.length;
  };
  
  // Пример использования
  let data = [4, 7, 2, 9, 5];
  let average = calculateAverage(data);
  console.log(average);
  