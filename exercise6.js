function mul(a) {
  var a = a ? a : 1;
  return function (b) {
    var b = b ? b : 1;
    return function (c) {
      var c = c ? c : 1;
      return a * b * c;
    };
  };
}

console.log(mul(4));
