const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');

console.log('Old Jessica:', jessica);
console.log('New Jessica:', jessicaCopy);

// object in object doesnt change with Object.assign which is why Old Jessica's family also changed. 