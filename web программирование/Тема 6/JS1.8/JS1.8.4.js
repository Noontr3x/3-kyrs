const grades = [85, 90, 75, 95, 80];
const sum = grades.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
const average = sum / grades.length;

console.log(average);
