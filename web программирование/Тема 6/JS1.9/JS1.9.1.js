// Создание объекта "Клиент банка"
const bankClient = {
    name: "Иван",
    age: 30,
    accountNumber: "1234567890",
    balance: 5000,
  };
  
  // Создание объекта "Работник клиники"
  const clinicWorker = {
    name: "Анна",
    age: 25,
    profession: "Медсестра",
    clinicName: "Медицинская клиника",
  };
  
  // Создание объекта "Гражданин РФ"
  const russianCitizen = {
    name: "Дмитрий",
    age: 40,
    passportNumber: "123456789",
    citizenship: "Российская Федерация",
  };
  
  // Вывод свойств объекта "Клиент банка" на экран
  console.log("Клиент банка:");
  console.log("Имя:", bankClient.name);
  console.log("Возраст:", bankClient.age);
  console.log("Номер счета:", bankClient.accountNumber);
  console.log("Баланс:", bankClient.balance);
  
  // Вывод свойств объекта "Работник клиники" на экран
  console.log("Работник клиники:");
  console.log("Имя:", clinicWorker.name);
  console.log("Возраст:", clinicWorker.age);
  console.log("Профессия:", clinicWorker.profession);
  console.log("Название клиники:", clinicWorker.clinicName);
  
  // Вывод свойств объекта "Гражданин РФ" на экран
  console.log("Гражданин РФ:");
  console.log("Имя:", russianCitizen.name);
  console.log("Возраст:", russianCitizen.age);
  console.log("Номер паспорта:", russianCitizen.passportNumber);
  console.log("Гражданство:", russianCitizen.citizenship);
  