'use strict';

var game7_board = $('.game7_board');
game7_board.css('display', 'none');

var qMark = document.getElementById('game7_qMark');
qMark.addEventListener("click", function(){
    $('#game7_qMark').css('display', 'none');
    $('.game7_board').css('display', 'block');
	$('#ingameText_game7').css('display', 'none');

})

const gameRange = 20; // Game Range Between 1 - 20

function displayMessage(message){ // DRY_1 - Don't Repeat yourself
	document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * gameRange ) + 1; // Generate Random Number
//document.querySelector('.secretNumber').textContent = secretNumber; // Display Secret Number

let score_game7 = gameRange;
document.querySelector('.score_game7').textContent = score_game7; // Display Score

let highScore = 0;
document.querySelector('.highScore').textContent = highScore; // Display High Score

// Retry & Play Again Button
document.querySelector('.retry').addEventListener('click', function(){
	score_game7 = gameRange;
	document.querySelector('.score_game7').textContent = gameRange;
	
	secretNumber = Math.trunc(Math.random() * gameRange ) + 1;
	
	//document.querySelector('.message').textContent = 'Start guessing...';
	displayMessage('Start guessing...'); // DRY_1 - Don't Repeat yourself
	
	document.querySelector('.guessNumber').value = ' ';
	
	
	
	document.querySelector('.container').style.backgroundColor = '#D1FAE5';
	
	document.querySelector('.secretNumber').style.backgroundColor = '#6EE7B7';
	document.querySelector('.secretNumber').style.width = '5rem';
	document.querySelector('.secretNumber').textContent = '?';
	//document.querySelector('.secretNumber').textContent = secretNumber;
	
	document.querySelector('.retry').style.backgroundColor = '#A7F3D0';
	document.querySelector('.retry').textContent = 'Retry!';
	
	document.querySelector('.check').style.backgroundColor = '#A7F3D0';
	document.querySelector('.check').addEventListener('mouseenter', function() {
		document.querySelector('.check').style.color = '#ECFDF5';
	});
	document.querySelector('.check').addEventListener('mouseleave', function() {
		document.querySelector('.check').style.color = '#000000';
	});
	document.querySelector('.check').style.cursor = 'pointer';
	document.querySelector('.check').disabled = false;
	
	document.querySelector('.guessNumber').style.cursor = 'pointer';
	document.querySelector('.guessNumber').disabled = false;
	
	
});

// Check Guessing Number
document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guessNumber').value);

	// If No Input
    if (!guessNumber) {
        //document.querySelector('.message').textContent = '❓ No number!';
		displayMessage('❓ No number!'); // DRY_1 - Don't Repeat yourself
		
	// If Match The Input
    } else if (guessNumber === secretNumber) {
        //document.querySelector('.message').textContent = '✅ Correct Number!';
		displayMessage('✅ 정답입니다!'); // DRY_1 - Don't Repeat yourself
		
		document.querySelector('.secretNumber').textContent = secretNumber;
		
		document.querySelector('.container').style.backgroundColor = '#6EE7';
		
		document.querySelector('.secretNumber').style.backgroundColor = '#34D399';
		document.querySelector('.secretNumber').style.width = '8rem';
		
		document.querySelector('.retry').style.backgroundColor = '#34D399';
		document.querySelector('.retry').textContent = 'Play Again!';
		
		document.querySelector('.check').style.backgroundColor = '#F87171';
		document.querySelector('.check').style.color = 'black';
		document.querySelector('.check').style.cursor = 'not-allowed';
		document.querySelector('.check').disabled = true;
		
		document.querySelector('.guessNumber').style.cursor = 'not-allowed';
		document.querySelector('.guessNumber').disabled = true;
		
		var next_button = $("#next");
		next_button.removeClass('disabled');
		next_button.addClass('next');

		
		// Update High Score
		if ( score_game7 > highScore ){
			highScore = score_game7;
			document.querySelector('.highScore').textContent = highScore;
		}
		
    } else if ( guessNumber != secretNumber ) { // DRY_2- Don't Repeat yourself
		if ( score_game7 > 1 ){
			//document.querySelector('.message').textContent = guessNumber > secretNumber ? '🚫 Too high!': '🚫 Too low!';
			displayMessage(guessNumber > secretNumber ? '🚫 높습니다, 낮춰보세요': '🚫 낮습니다, 높여보세요'); // DRY_1 - Don't Repeat yourself
			score_game7--;
			document.querySelector('.score_game7').textContent = score_game7;
		}else {
			//document.querySelector('.message').textContent = '🥶 You lose the game!';
			displayMessage('🥶 You lose the game!'); // DRY_1 - Don't Repeat yourself
			document.querySelector('.score_game7').textContent = 0;
		}
	}
	/*
	
	DRY_2 - Don't Repeat yourself
	
	else if (guessNumber > secretNumber) {
        if ( score > 1 ){
			document.querySelector('.message').textContent = '🚫 Too high!';
			score--;
			document.querySelector('.score').textContent = score;
		}else {
			document.querySelector('.message').textContent = '🥶 You lose the game!';
			document.querySelector('.score').textContent = 0;
		}
    } else if (guessNumber < secretNumber) {
		if ( score > 1 ){
			document.querySelector('.message').textContent = '🚫 Too low!';
			score--;
			document.querySelector('.score').textContent = score;
		}else {
			document.querySelector('.message').textContent = '🥶 You lose the game!';
			document.querySelector('.score').textContent = 0;
		}
        
    }
	*/
});
