const person = {
  name: {
    firstName: "Bob",
    lastName: "Smith",
  },
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    console.log(`hi ${this.name.firstName} here`);
    // alert(
    //   this.name[0] +
    //     " " +
    //     this.name[1] +
    //     " is " +
    //     this.age +
    //     " years old. He likes " +
    //     this.interests[0] +
    //     " and " +
    //     this.interests[1] +
    //     "."
    // );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};

console.log(person.name.firstName);
console.log(person.bio);
