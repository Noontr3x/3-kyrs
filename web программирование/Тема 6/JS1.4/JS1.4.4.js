function Group() {
    this.names = ["Анна", "Петр", "Иван", "Мария", "Виктор"];
  }
  
  let group = new Group();
  
  for (let i = 0; i < group.names.length; i++) {
    console.log(group.names[i]);
  }
  