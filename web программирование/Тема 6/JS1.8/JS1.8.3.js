const users = [
    { name: 'Kirill', age: 25, isAdmin: true },
    { name: 'Margo', age: 30, isAdmin: false },
    { name: 'Semen', age: 20, isAdmin: false },
    { name: 'Vitua', age: 35, isAdmin: true },
  ];
  
  // Проверка на право редактирования сайта
  const hasEditPermission = users.filter(user => user.isAdmin);
  console.log(hasEditPermission); // Выводит массив с объектами, у которых isAdmin равно true
  
  // Вывод имени администратора
  const admin = users.find(user => user.isAdmin);
  console.log(admin.name); // Выводит имя администратора
  