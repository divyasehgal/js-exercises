// methods are simply functions we can call on objects. basically they are functions attached to objects. 
// Arrays are also objects. Array methods are functions attached to all arrays that we create in JS. 

let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log(arr.slice()); // Slice method creates a shallow copy of the original array 
console.log([...arr]);

//Splice - it mutates the original array
// console.log(arr.splice(2));
// console.log(arr);

//Remove last element from the array
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

//Reverse - does mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

//Loop over an array - ForEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of 
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//For Each - this method requires a call back function. it is a higher order function which requires call back function in order to tell it what to do 
// in each iteration it will loop over the array and will pass in current element of the array as an argument
console.log('-------For Each-------')
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
//0: function(200)
//1: function(450)
//2: function(400)

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} ${value}`)
})

//map - can also use to loop over arrays. similar to for each method with a difference that map creates a brand new array 
//based on the original array. map method takes an array, loops over that array and in each iteration it applies a 
//call back function that we specify in our code to the current array element. We say that it maps the values of original 
// array to a new array, that is why this method is called map. - This method is more useful than ForEach

// map returns a new array containing the results of applying an operation on all original array elements



const eurToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSD
// })
// console.log(movements);
// console.log(movementsUSD);

const movementsUSD = movements.map(mov => mov * eurToUSD)
console.log(movements);
console.log(movementsUSD);

//forof

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUSD);
console.log(movementsUSDfor);

//Steven Thomas Williams = stw
//const user = 'Steven Thomas Williams';
const initials = function (user) {
  const username = user.toLowerCase().split(' ').map(function (name) {
    return name[0];
  }).join('');
  console.log(username);
}

initials('Steven Thomas Williams');
initials('Divya Sehgal Rao');
initials('Ankita Sehgal');

// for each - if we want to modify the array we get as an input and not create a new array

//Filter method  - It returns a new array containing the array elements that passed a certified test condition.
// only elements that pass the test will filter into new array.

const deposits = movements.filter(function (mov) {
  return mov < 0
})
console.log(movements);
console.log(deposits);

//Reduce method - boils(reduces) all array elements down to one single value

const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur
}, 0)
console.log(balance);

let balance2 = 0;
for (mov of movements) {
  balance2 = balance2 + mov;
}
console.log(balance2);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
  const adultDogs = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adultDogs);

  const average = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  console.log(average);

}

calcAverageHumanAge([5, 4, 2, 7, 15, 18]);


// Sorting Arrays for strings
const owners = ['Jack', 'Martha', 'Adam', 'Jonas'];
console.log(owners.sort());

// sorting arrays for numbers 
const numbers = [-400, 234, -777, 500, -120, 350]
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => a + b);
console.log(numbers);

const out = function (movements) {
  const outgoing = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  console.log(outgoing);
}

out([-1, -4, -2, -7, -15, 10]);
Math.abs(out);

