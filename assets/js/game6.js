import Bomb from "./lib/bomb.js";
import Circle from "./lib/circle.js";
// import $ from "jquery";

// let countdownStarted = false;
let canvas = document.querySelector('#game_6 canvas');
canvas.width = 1440;
canvas.height = 880;
canvas.marinTop = 135;

let ctx = canvas.getContext('2d');

let paddleHeight = 50;
let paddleWidth = 100;
let paddleX = (canvas.width-paddleWidth)/2;

let x = paddleX;
let y = 24;
let dy= 0;
let ballRadius = 25;

let my = 16;

let rightPressed = false;
let leftPressed = false;
let downPressed = false;

let brickRowCount = 1;
let brickColumnCount = 22;
let brickWidth = 30;
let brickHeight = 20;
let brickPadding = 44;
// let brickOffsetTop = 823;
let brickOffsetTop = 777;
let brickOffsetLeft = 122;

let game6_score = 0;

// function startGame2(){
//   reset();
//   started = true;
//   doAnimation = true;
//   draw();
// }


function reset(){

  for(let c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }

  paddleHeight = 50;
  paddleWidth = 100;
  paddleX = (canvas.width-paddleWidth)/2;

  x = paddleX;
  y = 24;
  dy= 0;
  ballRadius = 25;

  my = 16;

  rightPressed = false;
  leftPressed = false;
  downPressed = false;

  brickRowCount = 1;
  brickColumnCount = 22;
  brickWidth = 30;
  brickHeight = 20;
  brickPadding = 44;
//   brickOffsetTop = 823;
  brickOffsetTop = 777;
  brickOffsetLeft = 122;
  game6_score = 0;
  // circle1.inplay = true;
  // circle2.inplay = true;
  // circle3.inplay = true;
  // timeLeft = 45;
}


function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX-47,0, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}


var rectHeight = 0;
var rectWidth = 6;

function drawLine(){
  ctx.beginPath();
  ctx.rect(x, y+80, rectWidth,rectHeight);
  // ctx.fillStyle ='pink';
  ctx.fill();
  ctx.closePath();
}

let touch = new Audio();
touch.src = "./assets/img/game6/touch.mp3"
function drawMagnet(){
  var pic1 = new Image();
  pic1.src = "./assets/img/game6/magnet.png";
  ctx.drawImage(pic1, paddleX-34,my+90,canvas.width/20, canvas.height/13);
  my += dy;
  if(my+dy< 0){
    dy = 0;
    touch.play();

  }
}


function drawPinkLine(){
  ctx.beginPath();
  ctx.rect(paddleX, 50, rectWidth,60);
  ctx.fillStyle ='pink';
  ctx.fill();
  ctx.closePath();
}


const bomb1 = new Bomb();
const bomb2 = new Bomb();
const bomb3 = new Bomb();


// const circle1 = new Circle(Math.random()*innerWidth/2, document.documentElement.scrollHeight / 1.49, 2, 1,'./assets/img/game6/ball15.png',55,55) //제일큰 갈색공
// const circle2 = new Circle(Math.random()*innerWidth/2, document.documentElement.scrollHeight / 1.40, 1, 2, './assets/img/game6/ball6.png',34,34) //초록색 제일 작은공
// const circle3 = new Circle(Math.random()*innerWidth/2, document.documentElement.scrollHeight / 1.48, 1, 1, './assets/img/game6/ball20.png',60,60) //노란색 중간위치 공
// const circle1 = new Circle(Math.random()*innerWidth/2, 800, 2, 1,'./assets/img/game6/ball15.png',55,55)
// const circle2 = new Circle(Math.random()*innerWidth/2, 850, 1, 2, './assets/img/game6/ball6.png',34,34)
// const circle3 = new Circle(Math.random()*innerWidth/2, 810, 1, 1, './assets/img/game6/ball20.png',60,60)

////////////

// let timeLeft;

// let timerId = setInterval(countdown, 1000);

// function countdown() {
//   if (timeLeft == 0) {
//     timesUp();
//   } else {
//     timeLeft--;
//   }
// }

let youwin = new Audio();
youwin.src = "./assets/img/game6/youwin.mp3"
function draw(){
  // if (countdownStarted === false) {
  //   timerId;
  //   countdownStarted = true;
  // }

  if (!doAnimation) {
    // timesUp();
    // end();
    // youwin.play();

    started = false
  } else {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawLine();
    drawBricks();
    drawPaddle();
    drawScore();
    drawPinkLine();
    requestAnimationFrame(draw);

    bomb1.draw(canvas, ctx);
    bomb1.moveBomb(canvas);

    bomb2.draw(canvas, ctx);
    bomb2.moveBomb2(canvas);

    bomb3.draw(canvas, ctx);
    bomb3.moveBomb3(canvas);
    // if(circle1.inplay){
    //   circle1.draw(ctx);
    //   circle1.moveCircle(canvas);
    // }

    // if(circle2.inplay){
    //   circle2.draw(ctx);
    //   circle2.moveCircle(canvas);
    // }

    // if(circle3.inplay){
    //   circle3.draw(ctx);
    //   circle3.moveCircle(canvas);
    // }
    collisionDetection();

    drawMagnet();

    y += dy;
    rectHeight -= 8;
    if(y+dy< 0){
      dy = 0;

    } else if(my+dy>canvas.height-155){
      dy = -4
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 7;
      x += 7
    }
    else if (leftPressed && paddleX > 150 ) {
      paddleX -= 7;
      x -= 7
    }
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
  // e.preventDefault();

  if(e.keyCode ==39) {
    rightPressed = true;
  }
  else if(e.keyCode == 37) {
    leftPressed = true;
  }
  else if(e.keyCode == 32 && y <= 24) {
    dy = 3;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if (e.keyCode == 37) {
    leftPressed =false;
  }
}

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}


function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
     for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (r*(brickHeight+brickPadding))+document.documentElement.scrollHeight / 1.45;
        // console.log(brickY);
        // console.log(r*(brickHeight+brickPadding));
        // console.log(brickOffsetTop); // 777
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        var pic3 = new Image();
        pic3.src = "./assets/img/game6/ball4.png";
        ctx.drawImage(pic3, brickX,brickY,56,56);
      }
    }
  }
}

let ball = new Audio();
ball.src = "./assets/img/game6/ball.mp3"

let ball2 = new Audio();
ball2.src = "./assets/img/game6/ball2.mp3"

let bomb = new Audio();
bomb.src = "./assets/img/game6/bomb.mp3"

function collisionDetection() {

  // if(x > circle1.x && x < circle1.x + 60 && y + 67 > circle1.y - 50  && y + 100 < circle1.y + 50 && dy > 0) {
  //   dy = -dy;
  //   game6_score += 5;
  //   // if(game6_score >= 20) {
  //     // timesUp();
  //     // end();
  //     // youwin.play();
  //   // }
  //   circle1.inplay = false;
  //   ball2.play();

  // } else if(x > circle2.x && x < circle2.x + 39 && y + 46 > circle2.y - 50  && y + 100 < circle2.y + 50 && dy > 0) {
  //   dy = -dy;
  //   circle2.inplay = false;
  //   ball2.play();
  //   game6_score += 5;
    
  //   // if(game6_score >= 20) {
  //     // timesUp();
  //     // end();
  //     // youwin.play();
  //   // }
  // } else if(x > circle3.x && x < circle3.x + 65 && y + 72 > circle3.y - 50  && y + 100 < circle3.y + 50 && dy > 0) {
  //   dy = -dy;
  //   circle3.inplay = false;
  //   ball2.play();
  //   game6_score += 5;
    
  //   // timesUp();
  //   // end();
  //   // youwin.play();
  // }

  // if(game6_score >= 15) {
  //   youwin.play();
  //   end();
  // }

  // if(x-20 > bomb1.xx - 20 && x-20 < bomb1.xx + 20 && y + 20 > bomb1.y - 90  && y + 20 < bomb1.y + 90 && dy > 0) {
  //   bomb.play();
  //   console.log('bomb1');
  //   alert("GAME OVER");
  //   started = false
  //   // document.location.reload();
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   // startGame(e);
  //   drawStart()
  // } else if (x-20 > bomb2.xx - 20 && x-20 < bomb2.xx + 20 && y + 20 > bomb2.y - 90  && y + 20 < bomb2.y + 90 && dy > 0) {
  //   bomb.play();
  //   console.log('bomb2');
  //   alert("GAME OVER");
  //   started = false;
  //   //  game6_score -= 5;
  //   // document.location.reload();
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   // startGame(e);
  //   drawStart()
  // } else if (x-20 > bomb3.xx - 20 && x-20 < bomb3.xx + 20 && y + 20 > bomb3.y - 90  && y + 20 < bomb3.y + 90 && dy > 0) {
  //   bomb.play();
  //   console.log('bomb3');
  //   alert("GAME OVER");
  //   started = false;
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   // startGame(e);
  //   drawStart()
  // }

  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x-20 > b.x - ballRadius && x-20 < b.x + ballRadius && y+90 > b.y - ballRadius && y+ 90 < b.y + ballRadius) {
          b.status = 2;
          dy = -dy;
          game6_score += 5;
          ball.play();
        }
      }else if (b.status == 2 ){
        var pic3 = new Image();
        pic3.src = "./assets/img/game6/ball4.png";
        ctx.drawImage(pic3, x-25,y+140,56,56);
        b.y -=2;
        if(b.y <= 340){
          b.status = 0;
        }
      }
    }
  }
  
  if(x-20 > bomb1.xx - 20 && x-20 < bomb1.xx + 20 && y + 20 > bomb1.y - 90  && y + 20 < bomb1.y + 90 && dy > 0) {
    game6_score = 0;
    bomb.play();
    console.log('bomb1');
    // alert("GAME OVER");
    // started = false
    // started = true;
    // document.location.reload();
    // startGame(e);
    // drawStart()
    doAnimation = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    $('#game_6 canvas').attr('style', 'visibility:hidden');
    setTimeout(drawStart(), 1000);
  } else if (x-20 > bomb2.xx - 20 && x-20 < bomb2.xx + 20 && y + 20 > bomb2.y - 90  && y + 20 < bomb2.y + 90 && dy > 0) {
    game6_score = 0;
    bomb.play();
    console.log('bomb2');
    // alert("GAME OVER");
    // started = false;
    // started = true;
    // document.location.reload();
    // startGame(e);
    // drawStart();
    doAnimation = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    $('#game_6 canvas').attr('style', 'visibility:hidden');
    setTimeout(drawStart(), 1000);
  } else if (x-20 > bomb3.xx - 20 && x-20 < bomb3.xx + 20 && y + 20 > bomb3.y - 90  && y + 20 < bomb3.y + 90 && dy > 0) {
    game6_score = 0;
    bomb.play();
    console.log('bomb3');
    // alert("GAME OVER");
    // started = false;
    // started = true;
    // startGame(e);
    // drawStart();
    doAnimation = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $('#game_6 canvas').attr('style', 'visibility:hidden');
    setTimeout(drawStart(), 1000);
  }
}


function drawScore(){
  ctx.beginPath();
  // ctx.rect(14, 320, 121,120);
  ctx.fillStyle ='grey';
  ctx.fill();
  ctx.closePath();
  // ctx.font = 'bold 23px Arial';
  // ctx.fillStyle = "white";
  // ctx.fillText("Score:" + game6_score,29,360);
  // ctx.font = 'bold 23px Arial';
  // ctx.fillText(timeLeft + " s", 29, 415);
  
  if(game6_score >= 15) {
    // timesUp();
    end();
    youwin.play();
    alert('축하합니다, 당구공 뽑기의 방의 미션을 클리어 하셨습니다. \n 잠시 후 다음 방으로 이동합니다!');
      let current_page = parseInt(document.getElementById('current-page').innerText);
      console.log(current_page);
      if(current_page + 1 === 14){
          sections[current_page-1].addClass("hidden");
          sections[current_page].removeClass("hidden");
          console.log(sections[current_page])
          document.getElementById('current-page').innerText = current_page+1;
          $('.navigation-container').attr('style', 'display:block');
      }
      game6_score = 0;
      spaceKey = '';
  }
}

document.addEventListener('keydown', e => startGame(e));

let started = false;
let doAnimation;

function startGame(e) {
  if (e.key === "Enter" && started === false){
    reset();
    started = true;
    doAnimation = true;
    draw();
    // setTimeout(function() {
    //   doAnimation = false;
    // }, 45000)
  }
}


function drawStart(){
  var game_6 = document.getElementById('game_6');
  ctx.beginPath();
  ctx.rect(-3, -3, 1460, 892);
  ctx.fillStyle = '#FFB6C1';
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = 'white';
  ctx.font = '110px serif';
  ctx.lineWidth = 3;
  // ctx.strokeText('Press \'Enter\'',400, canvas.height/4);
  // ctx.strokeText('Or',680, canvas.height/2.6);
  // ctx.strokeText('Click \'Start\' button',250, canvas.height/2);

  ctx.fillStyle = 'white';
  ctx.font = '38px Arial';
  // ctx.fillText('- A player has 45 seconds to grab as many balls as possible',190, canvas.height/2.5);
  // ctx.fillText('- The game will terminate immediately if the claw touches the bomb',190, canvas.height/1.9);
  // ctx.fillText('- Press Left or Right arrow key to move the magnet horizontally',190, canvas.height/1.5);
  // ctx.fillText('- Press Space key to drop the magnet',190, canvas.height/1.25);

  // function startGame2(){
  //   reset();
  //   started = true;
  //   doAnimation = true;
  //   draw();
  // }

  var startButton = document.createElement('button');
  startButton.setAttribute('id', 'game6_startBtn');
  // startButton.setAttribute('onClick', 'startGame2()');
  startButton.addEventListener('click', function (){
    $('canvas').css('visibility', 'visible');
    startButton.setAttribute('style', 'display: none;');
    reset();
    started = true;
    doAnimation = true;
    draw();
  })
  var text = document.createTextNode('Start');
  startButton.appendChild(text);
  game_6.appendChild(startButton);
}


// function timesUp(){
function end(){
  console.log(1);
  // countdownStarted = false;
  ctx.beginPath();
  ctx.rect(-3, -3, 1460, 892);
  ctx.fillStyle = '#FFB6C1';
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = 'white';
  ctx.font = '98px serif';
  ctx.lineWidth = 3;

  if(game6_score >= 20) {
    ctx.strokeText('You Win!',500, canvas.height/3);
    doAnimation = false;
  } else{
    ctx.strokeText('Game Over!',500, canvas.height/3);
    ctx.strokeText("<Press Enter To Play Again>",505,402)
  }
  
  ctx.font = "34px Comic Sans MS";
  ctx.lineWidth = 2;
  
  
  ctx.font = 'bold 35px Arial';
  ctx.fillStyle = "white";
  ctx.fillText("Your Score:" + game6_score,617,545);

  // alert('축하합니다, 당구공 뽑기의 방의 미션을 클리어 하셨습니다. \n 잠시 후 다음 방으로 이동합니다!');
  //     let current_page = parseInt(document.getElementById('current-page').innerText);
  //     console.log(current_page);
  //     if(current_page + 1 === 14){
  //         sections[current_page-1].addClass("hidden");
  //         sections[current_page].removeClass("hidden");
  //         console.log(sections[current_page])
  //         document.getElementById('current-page').innerText = current_page+1;
  //         $('.navigation-container').attr('style', 'display:block');
  //     }
}

document.addEventListener('keydown', e => playSound(e));

let arrowButton = new Audio();
arrowButton.src = "./assets/img/game6/arrowButton.mp3"
let spaceKey = new Audio();
spaceKey.src = "./assets/img/game6/spaceKey.mp3"
function playSound(e) {
  if (e.keyCode == 37){
    arrowButton.play()
  } else if (e.keyCode == 39){
    arrowButton.play()
  }else if (e.keyCode == 32){
    spaceKey.play()
  }
}

drawStart();
