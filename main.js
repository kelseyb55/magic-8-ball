const userName = 'Kelsey';

if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello!');
}

const userQuestion = 'Will it rain today?';

console.log(`${userName} asked, ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';

if (randomNumber === 0){
    eightBall = 'It is certain';
} else if (randomNumber === 1){
    eightBall = 'It is decided'
} else if (randomNumber === 2){
    eightBall = 'Try again'
} else if (randomNumber === 3){
    eightBall = 'Cannot predict'
} else if (randomNumber === 4){
    eightBall = 'Do not count on it'
} else if (randomNumber === 5){
    eightBall = 'Sources say no'
} else if (randomNumber === 6){
    eightBall = 'Outlook not good'
} else if(randomNumber === 7){
    eightBall = 'Signs say yes';
}

console.log(`Your answer is: ${eightBall}`);
