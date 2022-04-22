// 띄울 카드의 수
const numOfCard = 5;

// 총 스테이지 수
const endStage = 2;

// 문제 이미지
const quiz = {
    1: [["1A.png","2A.png","3A.png","4A.png","5A.png"],["1B.png","2B.png","3B.png","4B.png","5B.png"]],
    2: [["1A.png","2A.png","3A.png","4A.png","5A.png"],["1B.png","2B.png","3B.png","4B.png","5B.png"]],

}

var round_no = 1;
    var round_score = 0;
    var round_correct = 0;
    var round_incorrect = 0;

    var total_correct_matches = 0;
    var total_incorrect_matches = 0;
    var total_score = 0;
    
    function applyEvents(){

        $(".animalEventHandler").on("drop" ,function(e){
            e.originalEvent.preventDefault();
            event = e.originalEvent;

            var data = event.dataTransfer.getData("text");
            if(data != event.target.id){
                let dataStr = data.split('.')[0].slice(0, -1);
                let targetStr = event.target.id.split('.')[0].slice(0, -1);
                if(dataStr === targetStr)
                {
                    total_correct_matches++;
                    round_correct++;
                    $("."+dataStr).show();
                    $("#myAudio")[0].play();
                    $("."+dataStr).parent().children().attr( 'draggable', 'false' );
                    prv_src = event.target.src
                    event.target.src = document.getElementById(data).src;
                    document.getElementById(data).src = prv_src;
                }
                else{
                    $("#myAudio")[0].play();
                    total_incorrect_matches++;
                    round_incorrect++;
                }
                console.log(round_correct);
                if(round_correct === numOfCard){
                    if(round_no === endStage){
                        gameEnd();
                    }else{
                        round_no++;
                        console.log("here");
                        startRound();
                    }
                }
                round_score = round_correct*5 - round_incorrect*5;
                total_score = total_correct_matches*5 - total_incorrect_matches*5;
                settingScore();
            }			
        });

        $(".animalEventHandler").on("dragover", function(e){
            e.originalEvent.preventDefault();
        });

        $(".animalEventHandler").on("dragstart", function(e) {
            e.originalEvent.dataTransfer.setData("text", e.target.id);
        });
    }

    function setView(){
		$("#game-screen").hide();
		$("#game-starter").hide();
		var start = 5;

			var timer = setInterval(function() {
		     $("#starter-timer").text(start);
		     start--;

		    if(start === -1) {
		        clearInterval(timer);
		        $("#starter-timer").hide();
		        $("#game-starter").show();

		  	   //DO STUFF HERE
		    }
		}, 1000);
	}

	function settingScore(){
		$("#correct_match").text(total_correct_matches);
		$("#incorrect_match").text(total_incorrect_matches);
		$("#round_score").text(round_score);
		$("#total_score").text(total_score);
		$("#round-no").text(round_no);
		
	}

	function startRound(){

		if(round_no === 1){
			//$("#starter").hide();
			$("#game-screen").show();
			settingRound();
			applyEvents();
			setRoundTime(600);
			settingScore();

		}
		else
		if(round_no === 2){
			round_score = 0;
			round_correct = 0;
			round_incorrect = 0;
			settingRound();
			applyEvents();
			setRoundTime(420);
			settingScore();
		}
		else
		if(round_no === 3){
			round_score = 0;
			round_correct = 0;
			round_incorrect = 0;
			settingRound();
			applyEvents();
			setRoundTime(240);
			settingScore();
		}else {
			round_score = 0;
			round_correct = 0;
			round_incorrect = 0;
			settingRound();
			applyEvents();
			setRoundTime(240);
			settingScore();
		}

	}

	function settingRound(){
		//var arr1 = ["cat1.jpg","dog1.jpg","fish1.jpg","monkey1.jpg","mouse1.jpg","pigeon1.jpg"];
		//var arr2 = ["cat2.jpg","dog2.jpg","fish2.jpg","monkey2.jpg","mouse2.jpg","pigeon2.jpg"];

		var arr1 = quiz[round_no][0];
		var arr2 = quiz[round_no][1];

		arr1 = shuffle(arr1);
		arr2 = shuffle(arr2);
		
		$("#dragger-row").empty();
		$("#dropper-row").empty();

		for(var i=0; i<numOfCard; i++){	
			$("#dragger-row").append(`<div class="col-md-2" id="draggerDiv`+(i+1)+`">																				
										<img src="./assets/img/game-4-img/common/match.png"  class="${arr1[i].split('.')[0].slice(0, -1)} match animalEventHandler" />
										<img id="${arr1[i]}" src="./assets/img/game-4-img/${round_no}/${arr1[i]}" draggable="true" class="animalEventHandler" />
									</div>`);
			$("#dropper-row").append(`<div class="col-md-2" id="dropperDiv">																					
										<img src="./assets/img/game-4-img/common/match.png"  class="${arr2[i].split('.')[0].slice(0, -1)} match animalEventHandler" />
										<img id="${arr2[i]}" src="./assets/img/game-4-img/${round_no}/${arr2[i]}" class="animalEventHandler" />
									</div>`);
		}
		$(".match").hide();
	}



	function shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};
var timer;
function setRoundTime(r_time){
	window.clearInterval(timer);
	if(timer){
		window.clearInterval(timer);
	}
	var start = r_time;// 10 minutes
	var i=1;
	timer = setInterval(function() {
	     $('#demo').text( Math.floor((start - i) / 60) + " Minutes " + ((start - i) % 60 ) +" Seconds");
	     i++;

	    if(start === i) {
	    	
	        window.clearInterval(timer);
	        gameEnd();
	        //DO STUFF HERE
	    }

	}, 1000);
}

function gameEnd(){
	var next_button = $("#next");
	next_button.removeClass('disabled');
	next_button.addClass('next');
}
	
startRound();