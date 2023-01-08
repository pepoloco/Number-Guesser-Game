'use strict';
let secretNum = Math.floor(Math.random() * 30) + 1; // random num
let score = 5;
let highScore = 0;

const display = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        display('Няма число!');

    } else if (guess === secretNum) {
        display('🎉 Ти спечели!')
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = 'rgb(0, 3, 68)';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }

    } else if (guess !== secretNum) {
        if (score > 1) {
            display(guess > secretNum ? '😒 По-ниско!' : '😒 По-високо!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            display('Ти загуби аматьор!😂');
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 30;
    secretNum = Math.floor(Math.random() * 30) + 1;
    display('Започни отгатването');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'rgba(6, 3, 3, 0.887)';
});

