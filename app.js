'use strict';

function asknamequestion(){
var userName = prompt ('Please enter your name so we know who we are talking with.')
if (userName === 'Matthew'){
  alert('Welcome home master')
} else {
  alert( userName + ', welcome to my website! I hope you enjoy it!')
  console.log(userName)
}
}
asknamequestion();


function askhumanquestion(){
var humanAnswer = prompt('Is Matthew human?');
if (humanAnswer.toLowerCase() === 'yes'){
  alert('Correct!');
} if (humanAnswer.toLowerCase() === 'no'){
  alert('Beep Boop Beep, how did you know?');
  console.log(humanAnswer)
} 
}

function askfishquestion(){

var fishAnswer = prompt('How many fish do I have?');

switch(fishAnswer){
case 'zero':
  alert('I definitely have more fish');
  break;
case 'one':
  alert('Getting closer');
  break;
case 'two':
  alert('Getting warmer');
  break;
case 'three':
  alert('Correct!');
  break;
default:
  alert('Not even close!');
  
}
}
askfishquestion();
// console.log(fishAnswer)
function askinstrumentquestion(){

var instrumentAnswer = prompt('Can I play any instruments?');

if (instrumentAnswer.toLowerCase() === 'yes'){
  alert('I can play the piano!');
} else {
  alert('I can play one or two, not well though!');
  
}
}
askinstrumentquestion();
// console.log(instrumentAnswer)
function askseattlequestion(){

var seattleAnswer = prompt('Am I from Seattle?');

if (seattleAnswer.toLowerCase() === 'yes'){
   alert('Nope! I\'m actually from a different state.');
 } else {
   alert('I\'m from Wisconsin!');
  
}
}
askseattlequestion();
// console.log(seattleAnswer)
function askcodingquestion(){

var codingAnswer = prompt('Does Matthew enjoy coding?')

if (codingAnswer.toLowerCase() === 'yes'){
  alert('You are somewhat correct!');
} else {
  alert('You are somewhat incorrect!');
} 
}
askcodingquestion();
// console.log(codingAnswer)

function asknumberquestion(){

for (var i = 0; i < 4; i = i + 1){
  var numberGuessed = prompt('Guess a number between 1 and 10?')
    if (numberGuessed === '2'){
      alert('How\'d you know, wizard??');
      break;
  } else if (numberGuessed === '1') {
      alert('You are so close, just 1 off!');
  } else if (numberGuessed === '3'){
      alert('Just a little too high.');
  } else if (numberGuessed > '4'){
      alert('Try a much smaller number!.');
  } if(numberGuessed !== '2' && i === 3){
      alert('The correct answer was 2, nice try!')
      
  }
}
}
asknumberquestion();
// console.log(numberGuessed)

function askarray(){

var guessingArray = ['red', 'blue', 'green'];

for (var i = 0; i < 6; i++){
var guessingGame = prompt('Try guessing one of my desktops colors!');

  if(guessingGame === guessingArray[0] || guessingGame === guessingArray[2] || guessingGame === guessingArray[1]){
    alert('Woa you must be a gene!');
    break;
  } else if(guessingGame !== guessingArray[0] || guessingGame !== guessingArray[2] || guessingGame !== guessingArray[1]) {
    alert('Sorry that was incorrect, try a different color.');
  } if(guessingGame !== guessingArray[0] && i === 5){
    alert('The correct answers were red, blue or green!');
    
  }
}
}
askarray();
console.log(guessingGame)

// var count = 0
// if (humanAnswer.toLowerCase() === 'yes'){
//   count++;
// } if (codingAnswer.toLowerCase() === 'yes'){
//   count++;
// } if (numberGuessed === '2'){
//   count++;
// } if(guessingGame === guessingArray[0] || guessingGame === guessingArray[2] || guessingGame === guessingArray[1]){
//   count++;
// } if (instrumentAnswer.toLowerCase() === 'yes'){
//   count++;
// } if (seattleAnswer.toLowerCase() === 'no'){
//   count++;
// }
// var correctAnswers = alert('You got ' + count + ' questions correct! Way to go!');

alert('Thank you ' + userName + ' for answering my questions! I appreciate your time!');

askhumanquestion();
