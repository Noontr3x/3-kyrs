let calculator = {
    add: function(num1, num2) {
      return num1 + num2;
    },
    subtract: function(num1, num2) {
      return num1 - num2;
    },
    multiply: function(num1, num2) {
      return num1 * num2;
    },
    divide: function(num1, num2) {
      return num1 / num2;
    }
  };
  
  console.log(calculator.add(5, 3)); // 8
  console.log(calculator.subtract(10, 2)); // 8
  console.log(calculator.multiply(4, 6)); // 24
  console.log(calculator.divide(15, 3)); // 5
  