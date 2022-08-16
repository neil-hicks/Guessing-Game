'use strict';

let userName = prompt('What\'s your name?'); {
  alert('Hi, ' + userName + ', and welcome.');
}

let numChildren = prompt('Do I have three kids? Please answer yes or no.').toLowerCase();
console.log(numChildren);

if (numChildren === null) {
  numChildren = prompt('Do I have three kids?');
}
if (numChildren === 'no' || numChildren === 'n') {
  //console.log('Correct, I have two!');
  alert('Correct, I have two!');
} else {
  //console.log('Nope.');
  alert('Incorrect.');
}
let animals = prompt('Do I have dogs?').toLowerCase();
console.log(animals);

if (animals === null) {
  prompt('Do I have dogs?').toLowerCase();
}
if (animals === 'yes' || animals ==='y') {
  //console.log('That's right.');
  alert('Correct, I have two!');
} else {
  //console.log('Nope.');
  alert('That\'s not right.');
}

let city = prompt('Do I live in Austin?').toLowerCase();
console.log(city);

if (city === null) {
  prompt('Do I live in Austin?').toLowerCase();
}
if (city === 'yes' || city === 'y') {
  //console.log('That's right.');
  alert('Correct!');
} else {
  //console.log('No, that's not right.');
  alert('Of course I do.');
}

let job = prompt('Was I in the Air Force?').toLowerCase();
console.log(job);

if (job === null) {
  prompt('Was I in the Air Force?').toLowerCase();
}
if (job === 'yes' || job === 'y') {
  //console.log('Yep!');
  alert('Yep!');
} else {
  //console.log('No, that's not right.');
  alert('That\'s not right.');
}

let school = prompt('Was I a high school teacher?').toLowerCase();
console.log(job);

if (school === null) {
  prompt('Was I a high school teacher?').toLowerCase();
}
if (school === 'no' || school === 'n') {
  //console.log('That's right.');
  alert('Right-o!');
} else {
  //console.log('Nope.')
  alert('Nope.');
}

alert('Thanks for playing, ' + userName + '.');
