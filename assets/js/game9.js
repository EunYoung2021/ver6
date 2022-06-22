const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score-number');
const baras = document.querySelectorAll('.bara');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startButton');
const hitsound = document.querySelector('.hitsound');
const startsound = document.querySelector('.startsound')

let lastHole;
let timeExpired = false;
let timeLimit = 20000; //in milliseconds (20 seconds)
let game9_score = 0;
let countdown;

//need to make function to choose random holes for capys to pop out of

function pickRandomHole(holes) {
  const randomHole = Math.floor(Math.random() * holes.length);
  const hole = holes[randomHole];
  if (hole === lastHole) {
    return pickRandomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//make function to use pickRandomHole and add class "show" to the hole

function popOut() {
  const time = Math.random() * 1300 + 400;
  const hole = pickRandomHole(holes);
  hole.classList.add('show')
  setTimeout(function(){
    hole.classList.remove('show');
    if (!timeExpired) popOut();
  }, time);

  if(game9_score >= 10){
    hole.classList.remove('show');
    alert('축하합니다! 음표잡기 방의 미션을 클리어하셨습니다. \n 잠시 후 다음 방으로 이동합니다!');
      let current_page = parseInt(document.getElementById('current-page').innerText);
      if(current_page + 1 === 20){
        sections[current_page-1].addClass("hidden");
        sections[current_page].removeClass("hidden");
        console.log(sections[current_page])
        document.getElementById('current-page').innerText = current_page+1;
        $('.navigation-container').attr('style', 'display:block');
      }
      game9_score = '';
  }
}

function startGame() {
  countdown = timeLimit/1000;
  scoreBoard.textContent = 0;
  scoreBoard.style.display = 'block';
  countdownBoard.textContent = countdown;
  timeExpired = false;
  game9_score = 0;
  popOut();
  setTimeout(function(){
    timeExpired = true;
  }, timeLimit);

  let startCountdown = setInterval(function(){
    countdown -= 1;
    countdownBoard.textContent = countdown;
    if (countdown < 0) {
      countdown = 0;
      clearInterval(startCountdown);
      countdownBoard.textContent = "Good work, soldier!"
    }
    
    if(game9_score >= 10){
        clearInterval(startCountdown);
        countdownBoard.textContent = "Good work, soldier!"

        var next_button = $("#next");
        next_button.removeClass('disabled');
        next_button.addClass('next');
    }
  }, 1000);
  startsound.play();
}

startButton.addEventListener('click', startGame);

function hit(e) {
    game9_score++;
  this.style.backgroundImage = 'url("./assets/img/game9/starcoin.png")';
  this.style.pointerEvents = 'none';
  setTimeout(() => {
    this.style.backgroundImage = 'url("./assets/img/game9/capybara.png")';
    this.style.pointerEvents = 'all';
  }, 800);
  scoreBoard.textContent = game9_score;
  hitsound.play();
}

baras.forEach(bara => bara.addEventListener('click', hit));