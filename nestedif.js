let a = 15;
if (a % 2 === 0) {
  console.log(`Number ${a} is even`);
} else if (a % 3 === 0 || a % 5 === 0) {
  console.log(`Number ${a} is divisible by 3 or 5`);
} else {
  console.log(`Number ${a} is odd`);
}
