var city = [
  ["Delhi", "Mumbai", "Chandigarh"],
  ["Paris", "Nice", "Cannas"],
  ["Amsterdam", "Da Hug"],
];
for (i = 0; i < city.length; i++) {
  if (Array.isArray(city[i])) {
    for (j = 0; j < city[i].length; j++) {
      console.log(city[i][j]);
    }
  } else {
    console.log(city[i]);
  }
}
