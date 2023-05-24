const min = 30; // Здесь может быть любое число от 0 до 59

switch (true) {
  case min >= 0 && min < 15:
    console.log('Первая четверть');
    break;
  case min >= 15 && min < 30:
    console.log('Вторая четверть');
    break;
  case min >= 30 && min < 45:
    console.log('Третья четверть');
    break;
  case min >= 45 && min < 60:
    console.log('Четвертая четверть');
    break;
  default:
    console.log('Некорректное значение минут');
    break;
}
