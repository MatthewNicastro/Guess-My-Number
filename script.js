'use strict';

let rand_num = Math.floor(Math.random() * 20) + 1;;
let score = 20;
let highscore = 0;
let disabled = false;
let set_text = (selector, text) => document.querySelector(selector).textContent = text;

document.querySelector('.again').addEventListener(
  'click', function () {
    score = 20;
    rand_num = Math.floor(Math.random() * 20) + 1;
    disabled = false;
    set_text('.message', `Start guessing...`);
    set_text('.score', `${score}`);
    set_text('.highscore', `${highscore}`)
    set_text('.number', '?')
    document.querySelector('.guess').value = null;
    document.querySelector('body').style.backgroundColor = '#222';
  });

document.querySelector('.check').addEventListener(
  'click', function (){
    if(!disabled){
      let val = Number(document.querySelector('.guess').value);
      if(val < 1 || val > 20) set_text('.message', `🚨 Guess ${val} not bounded between 1 and 20! 🚨`);
      else{
        score--;
        if(score === 0) {
          set_text('.message', `😥 Out of guesses! Correct number was ${rand_num}😥`);
          disabled = true;
          document.querySelector('body').style.backgroundColor = '#8B0000';
          document.querySelector('.number').style.width = '30rem';
          set_text('.number', `${rand_num}`);
        }
        else {
          if(val > rand_num) set_text('.message', `📈 Guess ${val} too high...`);
          else if(val < rand_num) set_text('.message', `📉 Guess ${val} too low...`);
          else{
            set_text('.number', `${val}`);
            let msg = `🎉 Guess ${val} is correct! 🎉`;
            if(score > highscore){
              msg += '🙌 NEW HIGH SCORE 🙌';
              highscore = score;
              set_text('.highscore', `${score}`);
            }
            set_text('.message', msg);
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('body').style.backgroundColor = '#60b347';
            disabled = true;
          }
        }
        set_text('.score', `${score}`);
      }
      document.querySelector('.guess').value = null;
    }
  });
