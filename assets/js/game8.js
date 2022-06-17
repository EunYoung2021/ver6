// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// The main approach of this Eventlistner was taken from Code Institute's Love Maths walk though video.
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName('game-btn');
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "game-start") {
                startGame8();
            } else if (this.getAttribute("data-type") === "game-stop") {
                timerStat = false;
            } else {
                let answer = isCorrect();
                if (this.getAttribute("data-type") === answer) {
                    this.style.background = "green";                 
                    answerCorrect();
                    setTimeout(() => { this.style.background = "grey"; }, 1000);
                } else {
                    this.style.background = "red";
                    answerWrong();
                    setTimeout(() => { this.style.background = "grey"; }, 1000);
                }
            }
        });
    }
});

//Variable decrarations
let timerStat = false;
const gamePanel = document.getElementById("game-panel");
const gameStartBtn = document.getElementsByClassName("game-start")[0];
const imagePath = '<img src="./assets/img/game8/';
const imageAttr = ' alt="Music notation image" class="note-img">';
// Set the queastion images and answers
let images = [
    `${imagePath}note_c.png"  data-type="c" ${imageAttr}`,
    `${imagePath}note_d.png"  data-type="d" ${imageAttr}`,
    `${imagePath}note_e.png"  data-type="e" ${imageAttr}`,
    `${imagePath}note_f.png"  data-type="f" ${imageAttr}`,
    `${imagePath}note_g.png"  data-type="g" ${imageAttr}`,
    `${imagePath}note_a.png"  data-type="a" ${imageAttr}`,
    `${imagePath}note_b.png"  data-type="b" ${imageAttr}`,
];

/**
 * function to start the process of the game
 */
function startGame8() {
    timerStat = true;
    showGamePanel();
    runTimer();
    displayImage();
}

/**
 * Function to display/hide the gaming panel
 */
function hideGamePanel() {
    gamePanel.style.display = "none";
}

function showGamePanel() {
    gamePanel.style.display = "block";
    gameBtnHide();
}


//  Toggle display of start button.
function gameBtnHide() {
    gameStartBtn.style.display = "none";
}

function startBtnShow() {
    gameStartBtn.style.display = "inline-block";
}


// Basic structure of this timer function was created by following this Video tutorial https://www.youtube.com/watch?v=AHh57PrdQsA  
/**
 * Run countdown Timer for a game duration of 60seconds
 */
function runTimer() {
    let counter = 60;
    let myTimer = setInterval(function () {
        counter--;

        if (counter >= 0 && timerStat == true) {
            let timer = document.getElementById("game-timer");
            timer.innerHTML = counter;
        } else {
            clearInterval(myTimer);
            gameOver();
        }
    }, 1000);
}

/**
 * Function to stop the game and reset score and timer
 */
function gameOver() {
    let yourScore = document.getElementById("corrent-score").innerHTML;
    if(yourScore < 20){
        alert(`Game Over! You scored ${yourScore}.`);
    }
    document.getElementById("last-score").innerHTML = yourScore;
    document.getElementById("corrent-score").innerHTML = 0;
    document.getElementById("game-timer").innerHTML = 60;
    document.getElementById("img-place").innerHTML = '<img src="./assets/img/game8/notaions.png" alt="Music notation" class="note-img">';
    startBtnShow();
    hideGamePanel();
}

/**
 * Display random selection of the image 
 */
function displayImage() {
    let randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById("img-place").innerHTML = randomImage;
}

/**
 * Obtain the correct answer for the question
 */
function isCorrect() {
    let currentImage = document.getElementById("img-place").children[0];
    let keytype = currentImage.getAttribute("data-type");
    return keytype;
}

/**
 * Calling scoreUp and greenText then diplay random image 
 */
function answerCorrect() {
    scoreUp();
    displayImage();
}

/**
 * Calling class to turn text red for Wrong and display new image
 */
function answerWrong() {
    displayImage();
}

/**
 * Get the current score from DOM and increase it by one
 */
function scoreUp() {
    let oldScore = parseInt(document.getElementById("corrent-score").innerText);
    document.getElementById("corrent-score").innerText = ++oldScore;

    if(oldScore === 20){
        var next_button = $("#next");
        next_button.removeClass('disabled');
        next_button.addClass('next');

        alert('축하합니다! 피아노 음정게임의 방을 클리어하셨습니다. \n 잠시 후 다음 방으로 이동합니다!');
        let current_page = parseInt(document.getElementById('current-page').innerText);
            if(current_page + 1 === 18){
                sections[current_page-1].addClass("hidden");
                sections[current_page].removeClass("hidden");
                console.log(sections[current_page])
                document.getElementById('current-page').innerText = current_page+1;
            }
        // stopTimer
        timerStat = false;
    }
};