//given an integer array and integer value V: The program must search if V is in the array of integers.
//The program writes if V is in the array or not

var arNums = [76, 42, 2, 3, 5, 6, 2, 56, 7, 9, 0, 5, 2, 56, 1];
var v = 9;

let foundV;
for (let i = 0; i < arNums.length; i++) {
  if (arNums[i] == v) {
    foundV = true;
  }
}
if (foundV == true) {
  console.log("V is in array");
} else {
  console.log("V is not in array");
}
