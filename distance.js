const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let ourDistance = mpg * fuelLeft;
  if (ourDistance >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(50, 25, 2));


