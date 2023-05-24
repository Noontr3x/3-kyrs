const surname = "Ерошкин";
const reversedSurname = surname.split("").reverse().join("");

if (surname === reversedSurname) {
  console.log(surname + " является палиндромом");
} else {
  console.log(surname + " не является палиндромом");
}