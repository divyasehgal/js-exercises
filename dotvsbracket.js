// const divyaArray =
//   ['divya',
//     'sehgal',
//     '2020-1989',
//     'IT',
//     ['John', 'Peter', 'Charlie']
//   ];

//in objects we define key value pairs. key is variable name.

const divya = {
  firstName: 'Divya',
  lastName: 'Sehgal',
  age: 2020 - 1989,
  job: 'IT',
  friends: ['Michael', 'Peter', 'Charlie']
};

console.log(divya);

// this object divya has 5 key value pairs. each of these keys is also called a property. property firstname, lastname etc

//objects - the order of the value does not matter at All. but for arrays it does. we use objects to group together diff variables that 
//belong together. we should use arrays for more ordered data and objects for more unstructured data. 


console.log(divya.friends); // dot notation
console.log(divya['friends']); //bracket notation
console.log(divya['job']);

//diff between these 2 is in bracket notation we can put any expression we like. but it doesnt work with dot notation.

//divya has 3 friends, and her best friend is called Michael
console.log(`${divya.firstName} has ${divya.friends.length} friends and her best friend is ${divya.friends[0]} }`)

//Object methods 
//function is just another type of value. we can add functions to objects. 
// any function that is attached to an object is called a method
// function name is like 'key' as a property. specify function as an expression. that is because expression produces a value
//method is property that holds function value


const divya1 = {
  firstName: 'Divya',
  lastName: 'Sehgal',
  birthYear: 1989,
  job: 'IT Professional', // string value 
  friends: ['Michael', 'Peter', 'Charlie'], //array value
  hasDriversLicense: false,   // boolean value

  // calcAge: function (birthYear) {  //function value
  //   return 2020 - birthYear;
  // }

  // calcAge: function () {  //function value
  //   console.log(this);
  //   return 2020 - this.birthYear;
  // }

  calcAge: function () {  //function value
    this.age = 2020 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge(1989)} year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `;

  }
};

console.log(divya1.calcAge(1989));
//console.log(divya1['calcAge'](1989));

console.log(divya1.getSummary());

// in every method, js gives us access to special variable called 'this'

//arrays are actually also objects, they are special kind of objects. they have methods to manipulate them example push, pop etc


