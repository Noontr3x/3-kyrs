class Simulator {
    constructor() {
      this.sequence = [];
      this.colors = ['красный', 'черный', 'белый'];
    }
  
    simulate(numSimulations) {
      for (let i = 0; i < numSimulations; i++) {
        let randomColor = Math.floor(Math.random() * 3); // Генерация случайного числа от 0 до 2
        this.sequence.push(this.colors[randomColor]);
      }
    }
  
    findLongestSequence() {
      let maxSequence = [];
      let currentSequence = [];
      let previousColor = null;
  
      for (let color of this.sequence) {
        if (color === previousColor) {
          currentSequence.push(color);
        } else {
          if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
          }
          currentSequence = [color];
        }
        previousColor = color;
      }
  
      if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
      }
  
      return maxSequence;
    }
  }
  
  // Пример использования
  let simulator = new Simulator();
  simulator.simulate(1000000);
  let longestSequence = simulator.findLongestSequence();
  console.log(longestSequence);
  