/* eslint-disable indent */
<<<<<<< HEAD
'use strict';
=======
"use strict";
let correctAnswers = 0;
>>>>>>> refs/remotes/origin/main

let userName = prompt("What's your name?");
{
  alert("Hi, " + userName + ", and welcome.");
}
//let correctAnswers = 0;

function quiz() {
  let questions = [
    "Do I have three children?",
    "Do I have dogs?",
    "Do I live in Austin?",
    "Was I in the Air Force?",
    "Did I work as a high school teacher?",
  ];
  let answers = [
    ["no", "n"],
    ["yes", "y"],
    ["yes", "y"],
    ["yes", "y"],
    ["no", "n"],
  ];

<<<<<<< HEAD
for (let i = 0; i < questions.length; i++) {
  let response = prompt(questions[i]);
  let correct = false;
  if (typeof(answers[i]) !== 'string') {

    for (let answer of answers[i]) {
      if (response.toLowerCase() === answer) {
        //console.log('Correct!')
        alert('Correct!');
        //correctAnswers++;
        correct = true;
        break;
=======
  for (let i = 0; i < questions.length; i++) {
    let response = prompt(questions[i]);
    let correct = false;
    if (typeof answers[i] !== "string") {
      for (let answer of answers[i]) {
        if (response.toLowerCase() === answer) {
          //console.log('Correct!')
          alert("Correct!");
          correctAnswers++;
          correct = true;
          break;
        }
>>>>>>> refs/remotes/origin/main
      }
    }
    if (correct === false) {
      alert("Incorrect!");
    }
  }
}
quiz();

function number() {
  let randomNum = Math.floor(Math.random() * 20 + 1);
  console.log(randomNum);

  for (let guessNum = 0; guessNum < 4; guessNum++) {
    let userNum = parseInt(prompt("Guess a number between 1 and 20: "));

<<<<<<< HEAD
  if (userNum === randomNum) {
    //console.log('Correct!')
    alert('Nice guess! You\'re right.');
    //correctAnswers++;
    break;
  } else if (userNum > randomNum) {
    alert('Too high.');
  } else {
    alert('Too low!');
=======
    if (userNum === randomNum) {
      //console.log('Correct!')
      alert("Nice guess! You're right.");
      correctAnswers++;
      break;
    } else if (userNum > randomNum) {
      alert("Too high.");
    } else {
      alert("Too low!");
    }
>>>>>>> refs/remotes/origin/main
  }

}
<<<<<<< HEAD
states();
=======
number();
>>>>>>> refs/remotes/origin/main


  let statesLived = ['virginia', 'florida', 'new mexico', 'arizona', 'texas',];
  let lived = false;

function states() {
while (lived === false) {
    let stateGuessed = prompt('Can you guess a state I\'ve lived in?');
    for (let i = 0; i < 7; i++) {
      if (stateGuessed.toLowerCase() === statesLived[i].toLowerCase()) {
      console.log('Correct!');
      alert('Good guess!');
     // correctAnswers++;
      lived = true;
      break;
      } else {
        alert('Try again!');
    }
  }
}
<<<<<<< HEAD

// alert('Thanks for playing, ' + userName + '.  You got ' + correctAnswers + ' right.');

}
=======
*/
alert(
  "Thanks for playing, " + userName + ".  You got " + correctAnswers + " right."
);
>>>>>>> refs/remotes/origin/main
