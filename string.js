function greet(param) {
  if (typeof param === "string") {
    console.log("It is a string");
  } else {
    console.log("It is not a string");
  }
}
console.log(greet(1));
