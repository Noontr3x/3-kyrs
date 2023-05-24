function Student(name, age) {
    this.name = name;
    this.age = age;
    
    this.displayInfo = function() {
      console.log("Имя: " + this.name);
      console.log("Возраст: " + this.age);
    };
  }
  
  let john = new Student("Кирилл", 23);
  
  john.displayInfo(); 