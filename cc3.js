const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / (this.height ** 2);
    return this.BMI
  }
};
console.log(mark.calcBMI());

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / (this.height ** 2);
    return this.BMI;
  }

};
console.log(john.calcBMI());

console.log(`${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${john.fullName}'s BMI ${john.calcBMI()}`)