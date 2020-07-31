var arNums = [76, 42, 2, 3, 5, 6, 2, 56, 7, 9, 0, 5, 2, 56, 1];
// the program must compute and write how many integers are greater or equal to 10
let instGTE10 = 0;
for (let i = 0; i <= arNums.length; i++) {
  if (arNums[i] >= 10) {
    instGTE10++;
  }
}
console.log("There are " + instGTE10 + " integers>= 10 in the array");
