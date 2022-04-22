//Set Up Dice
function containerResize(){
  var diceWrapperHeight = $('.dice-wrapper').height(),
      diceSize = parseInt(diceWrapperHeight / 2),
      diceSideSize = diceSize / 2,
      i;
  
  function theTransform($elem, rotation){
      var translationOuter = 'translateZ(' + (diceSideSize + 0) + 'px)',
          translationInner = 'translateZ(' + (diceSideSize - 2) + 'px)',
          transformPrefix = [
              '-webkit-transform',
              '-moz-transform',
              '-ms-transform',
              'transform',
          ];
      
      for(i=0; i<transformPrefix.length; i++){
          $elem.css(transformPrefix[i], rotation + ' ' + translationOuter);
          $elem.next('.inner').css(transformPrefix[i], rotation + ' ' + translationInner);
      }
  }
  
  $('#dice').css({
      'width': diceSize,
      'height': diceSize,
      'marginTop': -(diceSize/2),
      'marginLeft': -(diceSize/2)
  });
  theTransform($('.side1'), 'rotateX(0deg)');
  theTransform($('.side2'), 'rotateX(-90deg)');
  theTransform($('.side3'), 'rotateY(90deg)');
  theTransform($('.side4'), 'rotateY(-90deg)');
  theTransform($('.side5'), 'rotateX(90deg)');
  theTransform($('.side6'), 'rotateX(180deg)');
}

containerResize();
$(window).resize(containerResize);

// SET UP YOUR PLAYER DETAILS
var player1 = new Object({
  icon: 'pig',
  playerMovementTotal: 1
});
// STUFF HAPPENS WHEN YOU ROLL THE DICE
function DiceRollPlayer(){ 

    // SET REUSABLE VARIABLES
    var playerxtoken = document.getElementById('player1token');
    var player = 'player1';var animationLength = 200,
    rollDiceAnimationLength = 250;

//	Set the rolling timing
$("#dice").css({
    '-webkit-animation-duration': rollDiceAnimationLength + 'ms',
    '-moz-animation-duration': rollDiceAnimationLength + 'ms',
    '-o-animation-duration': rollDiceAnimationLength + 'ms',
    'animation-duration': rollDiceAnimationLength + 'ms'
});

//	Dice Roll Actions
// $('#roll-dice').on('click', function(){
    //	Business logic goes here. Here are demonstrated results with random numbers
    var rnd = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    $("#dice").removeClass('result-1 result-2 result-3 result-4 result-5 result-6 init');
    $("#dice").replaceWith($("#dice").clone(true));
    $("#dice").addClass('result-' + rnd);
    $("#dice").attr('value', rnd);
    
    //	Enable/Disable Roll Button click
    $('#roll-dice').prop('disabled', true);
    function btnEnable(btn){
        btn.prop('disabled', false);
    }
    setTimeout(function(){
        btnEnable($('#roll-dice'));
        $('#dice').trigger('click');
    }, rollDiceAnimationLength);
// });


  
    // RANDOM DICE NUMBER AND ADD TO OUTPUT
    //원래코드
    // var dice = Math.floor(1 + Math.random() * 6);
    // document.getElementById(player + 'diceoutput').innerHTML = dice;
  
      player1.playerMovementTotal = Number(player1.playerMovementTotal) + Number(rnd);
      // console.log(player1.playerMovementTotal);
      
  
    // SET THE OUTPUT DIV TO DISPLAY THE ADDITION OF ALL PLAYER MOVEMENT 
    function moveOutput(){
      document.getElementById(player + 'movementoutput').innerHTML = player1.playerMovementTotal;
      fuckingMove();
    }
  
    // ADD MOVEMENT TOTAL AS A CLASS TO PLAYER
    function fuckingMove(){
      playerxtoken.className = "playertoken";
      var playerAddClass = playerxtoken;
      playerAddClass.classList.add('moveto' + player1.playerMovementTotal);
    }
  
    // LADDERS
    var ladders = {
      3: 19,
      5: 3,
      11: 15,
      20: 9
    };
  
    if(ladders[player1.playerMovementTotal]) {
      setTimeout(function(){ 
        player1.playerMovementTotal = Number(player1.playerMovementTotal) + ladders[player1.playerMovementTotal]; 
        moveOutput();
        moveUp();
      }, 500);
    }
  
    // SNAKES  
    var snakes = {
      17: -13,
      19: -12,
      21: -12,
      27: -26
    };
  
    if(snakes[player1.playerMovementTotal]) {
      setTimeout(function(){ 
        player1.playerMovementTotal = Number(player1.playerMovementTotal) + snakes[player1.playerMovementTotal]; 
        moveOutput();
        moveUp();
      }, 500);
    }  
  
     // MOVE TOKEN UP TO ROW IT BELONGS ON
    function moveUp(){
      if (player1.playerMovementTotal > 6 && player1.playerMovementTotal < 13) {
        playerxtoken.style.bottom = "130px";
      } else if (player1.playerMovementTotal > 12 && player1.playerMovementTotal < 19) {
        playerxtoken.style.bottom = "260px";
      } else if (player1.playerMovementTotal > 18 && player1.playerMovementTotal < 25) {
        playerxtoken.style.bottom = "390px";
      } else if (player1.playerMovementTotal > 24 && player1.playerMovementTotal < 31) {
        playerxtoken.style.bottom = "520px";
      } else if (player1.playerMovementTotal > 29) {
        // alert ("Hell yeah, the fucking " + player1.icon + " wins!");
          $('.modal').css('display', 'block');
      } else {
        playerxtoken.style.bottom = "0px";
      }
    }
  
    moveUp();
    moveOutput();
  
    // document.getElementById(player + 'dicebtn').disabled = true;
  // });
  }
  