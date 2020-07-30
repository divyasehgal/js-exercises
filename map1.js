const people = [
  {
    first_name: "CJ",
    last_name: "R. ",
  },
  {
    first_name: "Brendan",
    last_name: "Eich",
  },
  {
    first_name: "Kyle",
    last_name: "Simpson",
  },
  {
    first_name: "Douglas",
    last_name: "Crockford",
  },
];

const fullNames = people.map((person) => {
  return `${person.first_name} ${person.last_name}`;
});
console.log(fullNames);

const animals = [
  {
    name: "cat",
    size: "small",
  },
  {
    name: "dog",
    size: "small",
  },
  {
    name: "lion",
    size: "medium",
  },
  {
    name: "elephant",
    size: "big",
  },
];

const names = animals.map((animalName) => animalName.name);
console.log(names);
