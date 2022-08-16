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

let city = prompt('Do I live in Austin?').toLowerCase();
console.log(city);

if (city === null) {
  prompt('Do I live in Austin?').toLowerCase();
}
if (city === 'yes') {
  alert('Correct!');
} else {
  alert('Of course I do.');
}

let job = prompt('Was I in the Air Force?').toLowerCase();
console.log(job);

if (job === null) {
  prompt('Was I in the Air Force?').toLowerCase();
}
if (job === 'yes') {
  alert('Yep!');
} else {
  alert('That\'s not right.');
}

let school = prompt('Was I a high school teacher?').toLowerCase();
console.log(job);

if (school === null) {
  prompt('Was I a high school teacher?').toLowerCase();
}
if (school === 'no') {
  alert('Right-o!');
} else {
  alert('Nope.');
}

alert('Thanks for playing, ' + userName + '.');
