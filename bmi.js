var markMass = 56;
var markHeight = 1.69;

var johnMass = 85;
var johnHeight = 1.79;

var BMIMark = (markMass / markHeight) * markHeight;
console.log(BMIMark);

var BMIJohn = (johnMass / johnHeight) * johnHeight;
console.log(BMIJohn);

var higherBMI = BMIMark > BMIJohn;
console.log("Is Mark BMI higher?" + higherBMI);
