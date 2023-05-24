let checkTask = (condition) => {
    if (condition) {
      alert("Тестовое задание выполнено");
    } else {
      alert("Тестовое задание не выполнено");
    }
  };
  
  // Пример использования
  let age = prompt("Сколько Вам лет?", 18);
  let isTaskCompleted = (age >= 18);
  
  checkTask(isTaskCompleted);
  