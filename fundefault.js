
const bookings = [];
const createBooking = function (flightNum, numPassenger = 1, price = 400) {
  const booking = {
    flightNum,
    numPassenger,
    price
  }
  console.log(booking);
  bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 800);

// JS only has passing by value not passing by reference

//First class and higher order functions 
// First class functions are just a feature that programming language has or does not have. i.e all functions are values 
// Higher order func - a function that receives anothet function as an argument that returns a new function or both. 

const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string is ${str}`);
  console.log(`Transformed string is ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);

}

transformer('Javascript is the best', upperFirstWord)


// functions returning functions 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

const greetHi = greet('Hi');
greetHi('Divya');

//Arror function for greet function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
