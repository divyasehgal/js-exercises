let num = 21;
let a;

if (a % 2 == 0) {
  console.log("Number is even");
} else if (a % 3 == 0 || a % 5 == 0) {
  if (a % 3 == 0) {
    console.log("Number is divisible by 3");
  } else {
    console.log("Number is divisible by  5");
  }
} else {
  console.log("Number is odd");
}
