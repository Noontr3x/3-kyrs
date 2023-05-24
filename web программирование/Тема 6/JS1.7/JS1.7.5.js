let daysUntilNewYear = () => {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1); // Первое января следующего года
    
    let timeDifference = newYear.getTime() - today.getTime();
    let days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Количество миллисекунд в дне
    
    return days;
  };
  
  // Пример использования
  let days = daysUntilNewYear();
  console.log(`До нового года осталось ${days} дней`);
  