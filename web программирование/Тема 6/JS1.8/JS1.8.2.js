const birthYears = [1990, 1985, 1992, 1980];
const currentYear = new Date().getFullYear();

const ages = birthYears.map(year => currentYear - year);

console.log(ages);
