var firstname = "Michal";
var lastname = "Zoe";

var sayhi = {
  firstname: "John",
  lastname: "Brain",
  greet: function () {
    return `Say hi to ${this.firstname} ${this.lastname}`;
  },
};

//without this
console.log(sayhi.greet());
//"Say hi to Michal Zoe"

//sayhi.greet()
//"Say hi to John Brain"
