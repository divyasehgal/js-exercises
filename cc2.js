const calcTip = billValue => {
  if (billValue > 50 && billValue <= 300) {
    return 0.15 * billValue
  } else {
    return 0.2 * billValue
  }
}

console.log(calcTip(100));
console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);