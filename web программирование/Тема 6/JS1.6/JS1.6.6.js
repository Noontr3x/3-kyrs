class NameReverser {
    constructor(name) {
      this.name = name;
    }
  
    reverseName() {
      let reversedName = this.name.split('').reverse().join('');
      return reversedName;
    }
  }
  
  // Пример использования
  let userName = 'Вася';
  let reverser = new NameReverser(userName);
  let reversedName = reverser.reverseName();
  console.log(reversedName);
  