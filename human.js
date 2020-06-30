function human(name) {
  this.name = name;
  this.city = "Newyork";
}

function robot(name) {
  this.name = name;
  this.legs = 2;
  this.color = "red";
}

var john = new human("John");
var pepper = new robot("pepper");
