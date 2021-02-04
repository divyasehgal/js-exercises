// ES6 feature and basically a way of unpacking values from an array or an object into separate variables. Break a complex 
// data structure down into small data struc like a variable 

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

