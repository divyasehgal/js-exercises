//A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.
//Below is an example of a simple callback function that logs to the console after some operations have been completed.
var arr = [1, 2, 3, 4, 5];

function modifyArray(arr, callback) {
  arr.push(100);

  // then execute the callback function that was passed
  callback();
}

modifyArray(arr, function () {
  console.log("array has been modified", arr);
});
