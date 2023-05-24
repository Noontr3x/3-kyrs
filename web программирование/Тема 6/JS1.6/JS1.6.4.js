class User {
    constructor(name) {
      this.name = name;
    }
  
    showName() {
      console.log("Имя пользователя: " + this.name);
    }
  }
  
  // Пример использования
  let user = new User("Кирилл Ерошкин");
  user.showName();
  