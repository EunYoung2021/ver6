// PLAYER ONE DETAILS
// SET THE MOVEMENT TO 1
var player1MovementTotal = 1;

// STUFF HAPPENS WHEN YOU ROLL THE DICE
function Player1DiceRoll() {
  // RANDOM DICE NUMBER AND ADD TO OUTPUT
  var dice1 = Math.floor(1 + Math.random() * 6);
  document.getElementById('player1diceoutput').innerHTML = dice1;
  
  // ADD DICE ROLL NUMBER TO MOVEMENT
  player1MovementTotal = Number(player1MovementTotal) + Number(dice1);    

  // THE LADDERS
  if (player1MovementTotal == "3") {
    setTimeout(function(){ 
      player1MovementTotal = Number(player1MovementTotal) + 19;
      document.getElementById('player1movementoutput').innerHTML = player1MovementTotal; 
      document.getElementById("player1token").style.bottom = "390px"; 
      document.getElementById("player1token").style.left = "260px"; 
    }, 500);    
  }   
  if (player1MovementTotal == "5") {
    setTimeout(function(){ 
      player1MovementTotal = Number(player1MovementTotal) + 3;
      document.getElementById('player1movementoutput').innerHTML = player1MovementTotal; 
      document.getElementById("player1token").style.bottom = "130px"; 
    }, 500);    
  }  
  if (player1MovementTotal == "11") {
    setTimeout(function(){ 
      player1MovementTotal = Number(player1MovementTotal) + 15;
      document.getElementById('player1movementoutput').innerHTML = player1MovementTotal; 
      document.getElementById("player1token").style.bottom = "540px"; 
    }, 500);     
  }  
  if (player1MovementTotal == "20") {
    setTimeout(function(){ 
      player1MovementTotal = Number(player1MovementTotal) + 9;
      document.getElementById('player1movementoutput').innerHTML = player1MovementTotal; 
      document.getElementById("player1token").style.bottom = "540px"; 
    }, 500);      
  }   

  // THE SNAKES
  if (player1MovementTotal == "17") {
    setTimeout(function(){ 
      player1MovementTotal = Number(player1MovementTotal) - 13;
      document.getElementById('player1movementoutput').innerHTML = player1MovementTotal; 
      document.getElementById("player1token").style.bottom = "0px"; 
      document.getElementById("player1token").style.left = "390px"; //HOW TO COMBINE THIS LINE AND ONE ABOVE?
    }, 500);      
  }   
  if (player1MovementTotal == "19") {
    setTimeout(function(){ 
      player1MovementTotal = Number(player1MovementTotal) - 12;
      document.getElementById('player1movementoutput').innerHTML = player1MovementTotal; 
      document.getElementById("player1token").style.bottom = "130px"; 
    }, 500);     
  }  
  if (player1MovementTotal == "21") {
    setTimeout(function(){ 
      player1MovementTotal = Number(player1MovementTotal) - 12;
      document.getElementById('player1movementoutput').innerHTML = player1MovementTotal; 
      document.getElementById("player1token").style.bottom = "130px"; 
    }, 500); 
  }  
  if (player1MovementTotal == "27") {
    setTimeout(function(){ 
      player1MovementTotal = Number(player1MovementTotal) - 26;
      document.getElementById('player1movementoutput').innerHTML = player1MovementTotal; 
      document.getElementById("player1token").style.bottom = "0px"; 
      document.getElementById("player1token").style.left = "0px"; //HOW TO COMBINE THIS LINE AND ONE ABOVE?
    }, 500);     
  }    

  //Set the Output div to display the addition of all player movement
  document.getElementById('player1movementoutput').innerHTML = player1MovementTotal;  

  //Disable dice per move
  // document.getElementById('player1dicebtn').disabled = true;
  // document.getElementById('player2dicebtn').disabled = false;

  //Array of left and right values to position token based on movement total number
  var xcords = [0, 0, 130, 260, 390, 520, 660, 660, 520, 390, 260, 130, 0];

  var token1Movement = xcords[player1MovementTotal];    

  if (player1MovementTotal > 6 && player1MovementTotal < 13) {
    document.getElementById("player1token").style.bottom = "130px";
  } else if (player1MovementTotal > 12 && player1MovementTotal < 19) {
    document.getElementById("player1token").style.bottom = "260px";
    var token1Movement = xcords[(player1MovementTotal) - 12];  
  } else if (player1MovementTotal > 18 && player1MovementTotal < 25) {
    document.getElementById("player1token").style.bottom = "390px";
    var token1Movement = xcords[(player1MovementTotal) - 12];  
  } else if (player1MovementTotal > 24) {
    document.getElementById("player1token").style.bottom = "540px";
    var token1Movement = xcords[(player1MovementTotal) - 24];  
  } 

  document.getElementById("player1token").style.left = token1Movement + "px";
  
}


function EitherDiceRoll() {
  if(player1MovementTotal >= "30") {
    document.getElementById('player1movementoutput').innerHTML = "0";
    alert("WE HAVE A WINNER");
    document.getElementById('player2dicebtn').disabled = true;
  }
}