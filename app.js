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
alert('Thank you ' + userName + ' for answering my questions! I appreciate your time!')