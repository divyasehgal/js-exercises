var city = ["Delhi", "London", "Paris", [1, 2, 3], "Mumbai"];
for (cities of city) {
  console.log(cities);
}

for (cities of city) {
  if (Array.isArray(cities)) {
    for (city of cities) {
      console.log(city);
    }
  } else {
    console.log(cities);
  }
}
