'use strict';

let userName = prompt('What\'s your name?'); {
  alert('Hi, ' + userName + ', and welcome.');
}

let numChildren = prompt('Do I have three kids?  Please answer yes or no.').toLowerCase();
console.log(numChildren);

if (numChildren === null) {
  prompt('Do I have three kids?').toLowerCase();
}

if (numChildren === 'No') {
  alert('Correct, I have two!');
} else {
  alert('Incorrect.');
}

let animals = prompt('Do I have dogs?').toLowerCase();
console.log(animals);

if (animals === null) {
  prompt('Do I have dogs?').toLowerCase();
}

if (animals === 'Yes') {
  alert('Correct, I have two!');
} /* else {
  alert('That\'s not right.');
} */



