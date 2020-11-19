const airline = 'Air India';
const plane = 'A320';

console.log(plane[0]);
console.log('A320'[0]);
console.log(airline.length);
console.log('A320'.length);

console.log(airline.indexOf('i'));
console.log(airline.lastIndexOf('i'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(-2));

const middleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log("You are in a middle seat")
  } else {
    console.log("You are in aisle seat")
  }
}

middleSeat('32B');
middleSeat('55C');

const airline1 = 'United Airlines';
console.log(airline1.toLowerCase());
console.log(airline1.toUpperCase());

// fix capitalization
const passenger = 'dIvYa';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = '   Divya@gmail.com  '
const trimmedEmail = email.toLowerCase().trim();
console.log(trimmedEmail);

//replacing
const priceInd = '50,000Rs';
const priceUS = priceInd.replace('Rs', '$').replace(',', '.');
console.log(priceUS);

const div = "Divya is amazing, and she has amazing coding skills";
//console.log(div.replace('amazing', 'super amazing')); - only replaces one 'amazing'
console.log(div.replace(/amazing/g, 'super amazing')); // using regular expression to replace all 'amazing' strings

//Booleans
const plane1 = 'A320fsff'
console.log(plane1.includes('A3'));
console.log(plane1.includes('535f'));
console.log(plane1.startsWith('A234'));

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to board')
  } else {
    console.log('Welcome aboard');
  }
}
checkBaggage("I have Food items and luggage");
checkBaggage("I have food and a knife to cut fruits");

//split
console.log('Divya Sehgal'.split(' '));
const [firstName, lastName] = 'Divya Sehgal'.split(' ');

const newName = ['Ms', firstName, lastName].join('----')
console.log(newName);

const capitalizeName = function (name) {
  const capitalizedNames = [];
  const names = name.split(' ');
  for (const n of names) {
    capitalizedNames.push(n[0].toUpperCase() + n.slice(1));
    //capitalizedNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  //console.log(capitalizedNames);
  console.log(capitalizedNames.join(' '));
}
capitalizeName('divya sehgal rao');
capitalizeName('divya sehgal katib');

// Padding a string
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + ''
  const last = str.slice(-4)
  return last.padStart(str.length, '*')

}

console.log(maskCreditCard(23456274355345));

//Repeat 
const message2 = 'Bad weather....all departures delayed... '
console.log(message2.repeat(5))

const aeroplane = function (n) {
  console.log(`There are ${n} number of planes waiting in line ${'✈️'.repeat(n)}`)
}
aeroplane(6);
aeroplane(12);
aeroplane(4);
