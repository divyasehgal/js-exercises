//in map method, we have access to current element, current index and entire years array

const years = [1988, 1959, 1989, 1980, 2003];
ES5;
var age5 = years.map(function (el) {
  return 2020 - el;
});

console.log(age5);

//ES6
let age6 = years.map((el) => {
  return 2020 - el;
});

console.log(age6);

age6 = years.map((el, index) => {
  return `Age element ${index}: ${2020 - el}`;
});

console.log(age6);

age6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index}: ${age}`;
});

console.log(age6);
