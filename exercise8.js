var arNums = [76, 42, 2, 3, 5, 6, 2, 56, 7, 9, 0, 5, 2, 56, 1];
var maxElement = -1;
var maxElementIndex = -1;
for (let i = 0; i < arNums.length; i++) {
  if (arNums[1] > maxElement) {
    maxElement = arNums[i];
    maxElementIndex = i;
  }
}
console.log("Max element = " + maxElement + " with index: " + maxElementIndex);
