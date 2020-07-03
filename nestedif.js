let a = 25;
if (a % 2 === 0) {
  console.log(`Number ${a} is even`);
} else if (a % 3 === 0 || a % 5 === 0) {
  if (a % 3 === 0) {
    console.log(`Number ${a} is divisible by 3`);
  } else {
    console.log(`Number ${a} is divisible by 5`);
  }
} else {
  console.log(`Number ${a} is odd`);
}
