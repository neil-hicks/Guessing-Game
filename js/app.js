'use strict';

let userName = prompt('What\'s your name?'); {
  alert('Hi, ' + userName + ', and welcome.');
}

let numChildren = prompt('Do I have three kids? Please answer yes or no.').toLowerCase();
console.log(numChildren);

if (numChildren === null) {
  numChildren = prompt('Do I have three kids?');
}
if (numChildren === 'no') {
  alert('Correct, I have two!');
} else {
  alert('Incorrect.');
}
let animals = prompt('Do I have dogs?').toLowerCase();
console.log(animals);

if (animals === null) {
  prompt('Do I have dogs?').toLowerCase();
}
if (animals === 'yes') {
  alert('Correct, I have two!');
} else {
  alert('That\'s not right.');
}



