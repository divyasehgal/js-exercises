var person = {
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};

var john = {
  firstname: "John",
  lastname: "Zoe",
};

let output = person.fullname.call(john);
console.log(output);
