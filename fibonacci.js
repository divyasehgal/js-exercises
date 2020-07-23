var fibonacci = function (n) {
  if (n == 1) {
    return [0, 1];
  } else {
    var data = fibonacci(n - 1);
    data.push(data[data.length - 1] + data[data.length - 1]);
    return data;
  }
};

console.log(fibonacci(5));
