different ways to create object in js

let obj = new obj();

let person = (name) => {
  var object = {};
  object.name = name;
  object.age = 21;
  return object;
};

let object = new person("Divya");

console.log(person.age);

class person {
  constructor(name) {
    this.name = name;
  }
}
var object = new person("Divya");

