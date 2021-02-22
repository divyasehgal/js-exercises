const divya = {
  firstName: 'Divya',
  year: 1989,
  calcAge: function () {
    console.log(this);
    console.log(2020 - this.year);

    const isMillenial = function () {
      console.log(`this.year >= 1981 && this.year <= 1996`);
    }
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`)
};

divya.calcAge();
console.log(divya.greet()); // an arrow function does not get its own this keyword. 

// never use arror function as a method. always function declaration 
// regular functoin has the this keywork undefined
// arrow function uses this keyword from its parent scope 