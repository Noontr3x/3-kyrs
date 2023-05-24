const str = '1234567890'; // Здесь может быть любая строка с цифрами

switch (str[0]) {
  case '1':
  case '2':
  case '3':
    console.log('Первая цифра 1, 2 или 3');
    break;
  default:
    console.log('нет');
    break;
}

const phoneNumber = '123-456-7890'; // Здесь может быть любая строка с номером телефона
const myPhoneNumber = '123-456-7890'; // Здесь должен быть ваш номер телефона

if (phoneNumber.includes(myPhoneNumber)) {
  console.log('Включает мой номер телефона');
} else {
  console.log('Не включает мой номер телефона');
}
