'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0

const displayMessage = function(message) {
  return  document.querySelector('.message').textContent = message;

}

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})

document.querySelector('.check')
.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    
    // when there is no input
    if(!guess) {
        displayMessage('No Number')
        // document.querySelector('.message').textContent = 'No Number';
    }
    
    // when player wins
    else if(guess === secretNumber){
        displayMessage('Correct Number')
        // document.querySelector('.message').textContent = 'Correct Number'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = secretNumber
        
        document.querySelector('.number').style.width = '30rem'
        
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    }

    // when a player loses

    else if (guess !== secretNumber) {
        if(score > 1) {
                    displayMessage(guess > secretNumber ? 'Too High' : 'Too low')

                    // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too low'
                    score--;
                    document.querySelector('.score').textContent = score;
                }
                else {
                    displayMessage('Game over, you lost')
                    // document.querySelector('.message').textContent = 'Game over, you lost'
        
                }
    }



    // when guess is too high
    // else if(guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too High'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'Game over, you lost'

    //     }
       
    // }

    // // when guess is too low
    // else if(guess < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too low'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }

    //     else{
    //         document.querySelector('.message').textContent = 'Game over, you lost'

    //     }
       
    // }
});