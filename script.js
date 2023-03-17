'use strict';

//Autor: Hamilton Fuzer de Oliveira
//Regras
console.log(
  'Guess my number é um jogo simples, você começa com 20 pontos e precisa acertar um número de 1 a 20'
);
console.log(
  'Sempre que você erra a sua pontuação cai, e o jogo informa se o número escolhido é muito alto ou muito baixo'
);
console.log('Você vai saber quando ganhar!!! =D');

function gerador() {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
}
let secretNumber = gerador();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//addEventListener primeiro parametro: qual eh o evento; segundo parametro: o que fazer quando o evento acontecer (function)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //no input
  if (!guess) {
    displayMessage('⛔ NO NUMBER');
    //Player win
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    //Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' YOU LOST THE GAME');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset the game 'Again!'
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = gerador();
});
