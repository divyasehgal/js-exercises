// function find_average(array) {
//   for (let i = 0; i < array.length; i++) {
//     let average = array[i] / array.length;
//     return average;
//   }
// }
// console.log(find_average([1, 1, 1]));

function average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(average([1, 1, 1]));
