'use strict';

let userName = prompt('What\'s your name?'); {
  alert('Hi, ' + userName + ', and welcome.');
}

let questions = [
  'Do I have three children?',
  'Do I have dogs?',
  'Do I live in Austin?',
  'Was I in the Air Force?',
  'Did I work as a high school teacher?',
];
let answers = [
  'no',
  'yes',
  'yes',
  'yes',
  'no',
];

for (let i = 0; i < questions.length; i++) {
  let response = prompt(questions[i]);

  if (typeof(answers[i]) !== 'string') {

     for (let answer of answers[i]) {
      if (response.toLowerCase() === answer) {
        alert('Correct!');
        break;
      }
    }

  } else {
    if (response.toLowerCase() === answers[i]) {
      alert('That\'s right!');
    } else {
      alert('That\'s incorrect.');
    }
  }

  let randomNum = Math.floor(Math.random() * 20) + 1;

  for (let guessNum = 0; guessNum < 4; guessNum++) {
    let userNum = prompt('Guess a number between 1 and 20: ');
    if (userNum === randomNum) {
      alert('Nice guess!');
    } else if (userNum > randomNum) {
      alert('Too high.');
    } else {
      alert('Too low!');
    }
  }

  /* let numChildren = prompt('Do I have three kids? Please answer yes or no.').toLowerCase();
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
*/alert('Thanks for playing, ' + userName + '.');
}
