'use strict';

var userName = prompt ('Please enter your name so we know who we are talking with.')
if (userName === 'Matthew'){
  alert('Welcome home master')
} else {
  alert( userName + ', welcome to my website! I hope you enjoy it!')
}

var humanAnswer = prompt('Is Matthew human?');

if (humanAnswer.toLowerCase() === 'yes'){
  alert('Correct!');
} if (humanAnswer.toLowerCase() === 'no'){
  alert('Beep Boop Beep, how did you know?');
} else {
  alert('That is an invalid answer.')
}

var fishAnswer = prompt('How many fish do I have?');

switch(fishAnswer){
case 'zero':
  alert('I definitely have more fish');
  break;
case 'one':
  alert('Getting closer');
  break;
case 'two':
  alert('Getting warmer')
  break;
case 'three':
  alert('Correct!');
  break;
default:
  alert('Not even close!');
}

var instrumentAnswer = prompt('Can I play any instruments?');

if (instrumentAnswer.toLowerCase() === 'yes'){
  alert('I can play the piano!');
} else {
  alert('I can play one or two, not well though!');
}

var seattleAnswer = prompt('Am I from Seattle?');

if (seattleAnswer.toLowerCase() === 'yes'){
   alert('Nope! I\'m actually from a different state.');
 } else {
   alert('I\'m from Wisconsin!');
}

var codingAnswer = prompt('Does Matthew enjoy coding?')

if (codingAnswer.toLowerCase() === 'yes'){
  alert('You are somewhat correct!')
} else {
  alert('You are somewhat incorrect!')
}

for (var i = 0; i < 4; i = i + 1){
  var numberGuessed = prompt('Guess a number between 1 and 10?')
    if (numberGuessed === '2'){
      alert('How\'d you know, wizard??');
      break;
  } else if (numberGuessed === '1') {
      alert('You are so close, just 1 off!');
  } else if (numberGuessed >= '3'){
      alert('Sorry, but thats too high.');
  } else if(numberGuessed !== '2' && i === 3){
      alert('The correct answer was 2, nice try!')
  }
}

for (var i = 0; i < 6; i = i + 1){
  var guessingGame = prompt('Try and guess my middle name');
  if(guessingGame ===guessingArray[0]){
    alert('Woa you must be a gene!')
  }

  guessingArray[0] === 'Logan';
  guessingArray[0];

  guessingArray[1] === 'Liam';
  guessingArray[1];

  guessingArray[2] === 'Lewis';
  guessingArray[2];

  guessingArray[3] === 'Lebron';
  guessingArray[3];

  guessingArray[4] === 'Lance';
  guessingArray[4];

  guessingArray[5] === 'Larson';
  guessingArray[5];



alert('Thank you ' + userName + ' for answering my questions! I appreciate your time!')

forceTest();