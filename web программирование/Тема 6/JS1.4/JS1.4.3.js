// Объект пользователи
let users = [
    {id: 1, name: "Иван", age: 25},
    {id: 2, name: "Мария", age: 30},
    {id: 3, name: "Петр", age: 35},
    {id: 4, name: "Анна", age: 20},
  ];
  
  // Объект заказы
  let orders = [
    {id: 1, userId: 2, restaurantId: 1, dish: "Стейк", price: 500},
    {id: 2, userId: 4, restaurantId: 2, dish: "Салат", price: 150},
    {id: 3, userId: 1, restaurantId: 3, dish: "Суп", price: 200},
    {id: 4, userId: 3, restaurantId: 1, dish: "Пицца", price: 300},
  ];
  
  // Объект рестораны
  let restaurants = [
    {id: 1, name: "Ресторан 1", address: "ул. Пушкина, 10"},
    {id: 2, name: "Ресторан 2", address: "ул. Лермонтова, 15"},
    {id: 3, name: "Ресторан 3", address: "ул. Тургенева, 20"},
  ];
  
  // Вывод информации о заказах конкретного пользователя
  let userId = 2;
  let userOrders = orders.filter(order => order.userId === userId);
  userOrders.forEach(order => {
    let restaurant = restaurants.find(restaurant => restaurant.id === order.restaurantId);
    console.log(`Заказ №${order.id}: ${order.dish} (${order.price} руб.) в ресторане "${restaurant.name}" по адресу: ${restaurant.address}`);
  });
  
  // Вывод информации о заказах в конкретном ресторане
  let restaurantId = 1;
  let restaurantOrders = orders.filter(order => order.restaurantId === restaurantId);
  restaurantOrders.forEach(order => {
    let user = users.find(user => user.id === order.userId);
    console.log(`Заказ №${order.id}: ${order.dish} (${order.price} руб.) пользователем ${user.name} (${user.age} лет)`);
  });
  