// jQuery(document).ready(function ($) {
    var modal             = $(".game1modal"),
    lets_roll         = $(".lets-roll"),
    instructions      = $(".instructions"),
    turn_dom          = $(".turn"),
    caret_dom         = $(".caret"),
    main_container    = $(".main-container"),
    roll_dice_button  = $("#roll-dice"),
    dice_img          = $("#dice_img"),
    dice_value_dom    = $(".dice_value"),
    dice_value        = 0,
    suspend_flag      = true,
    nextTurn          = "0",
    first_player      = "",
    second_player     = "",
    my_avatar         = "",
    has_my_avatar_won = false,
    who_goes_first    = "",
    flag              = true,
    reached_end       = false;

var resetAll = function () {
  dice_value = 0,
    suspend_flag = true,
    nextTurn = "0",
    first_player = "",
    second_player = "",
    my_avatar = "",
    has_my_avatar_won = false,
    who_goes_first = "",
    flag = true
  reached_end = false;

  activeClickOnButton();
};
var snakeorladderobj =
      {
        "row1 col5": {
          type: '1',//1 means ladder
          end: 'row2 col4'
        },
        "row3 col3": {
          type: '0',//0 means snake
          end: 'row1 col2'
        },
        "row4 col1": {
          type: '0',//0 means snake
          end: 'row3 col2'
        },
        "row5 col1": {
          type: '0',//0 means snake
          end: 'row4 col4'
        },
        "row4 col3": {
          type: '1',//1 means ladder
          end: 'row5 col4'
        }
      }
;
modal.addClass("show");

$(".overlay").removeClass("loading");

$(".play-again").click(function () {
  resetAll();
  $(".selection").show();
  $(".who-won").hide();
  modal.addClass("show");
  $(".player_in_board").remove();

  //카렛
  caret_dom.removeClass("nextturn");
});

document.getElementById("lets-roll").addEventListener("click", function () {
// lets_roll.click(function () {
  var selected_avatar    = "one",
  selected_who_first = "";
  instructions.removeClass("error");
  // selected_avatar = $("input[name=choose-avatar]:checked").val();
  selected_who_first = 'me';
  
  if ( selected_avatar !== undefined && selected_who_first !== undefined ) {
    modal.removeClass("show");
    who_goes_first = selected_who_first;
    prestartGame(selected_avatar, selected_who_first);
  }
  else {
    instructions.addClass("error");
  }
});

var prestartGame = function (avatar, who_first) {
  my_avatar = avatar;

  first_player = whichPlayerIsFirstRoll(avatar, who_first);

  if ( first_player == 1 ) {
    second_player = 2;
  } else {
    second_player = 1;
  }
  nextTurn = first_player;

  //place avatar in box1 whose is first
  var box1 = $(".row1.col1").position();
  // console.log(box1);

  var top = box1.top + 10;
  var left = box1.left + 3;

  main_container.append('<img data-currentboxrowcol="row1 col1" data-currentboxno="1" class = "player_in_board player' + first_player + '" src="./assets/img/game1/avatar_body' + first_player + '.png" alt="player1" style="top:' + top + 'px;left:' + left + 'px">')
  startTheGame();
};

var startTheGame = function () {
  roll_dice_button.click(function () {
    roll_dice();
  })
};

var roll_dice = function () {
  if ( suspend_flag ) {
    var no = startDiceAnimation();//this animation is just for representative purpose.
  }
};

var startDiceAnimation = function () {
  suspendClickOnButton();
  var x;

  var tid = setInterval(function () {
    changeImgs();
  }, 100);

  var i = 0;

  var changeImgs = function () {
    i++;
    x = Math.floor((Math.random() * 6) + 1);

    dice_img.attr('src', './assets/img/game1/dice' + x + '.png');
    if ( i > 10 ) {
      clearInterval(tid);
      dice_value = x;
      dice_img.attr('value', dice_value);

      if(turn_dom.text() === '내 차례'){
        setQuiz();
      } else{
        moveThePlayer(x);
      }
    }
  }
}

var suspendClickOnButton = function () {
  suspend_flag = false;
  roll_dice_button.addClass("not-active");
}

var activeClickOnButton = function () {
  suspend_flag = true;
  roll_dice_button.removeClass("not-active");
}

var game1_endGame = function () {
  modal.find(".selection").hide();
  modal.find(".who-won").show();

  modal.addClass("show");

  var both_players = $(".player_in_board");
  for (var i = 0; i < both_players.length; i++) {
    var self = both_players[i];

    if ( $(self).attr("data-currentboxno") == 25 ) {
      var who_won_temp = $(self).attr("src");
      console.log("누가 이겼나 : "+who_won_temp);

      var temp2 = {
        "one": "1",
        "two": "2"
      };

      console.log(who_won_temp.match(/\d/g)[1]+" typeOf : "+typeof(who_won_temp.match(/\d/g)[1]));
      console.log(temp2[my_avatar] + "typeOf : "+typeof(temp2[my_avatar]));
      if ( who_won_temp.match(/\d/g)[1] == temp2[my_avatar] ) {
        has_my_avatar_won = true;
      }

      $(".which-avatar-won").attr("src", "./assets/img/game1/avatar" + temp2[my_avatar] + ".png");
      if ( has_my_avatar_won ) {
        $(".greetings").html("Congratulations!")
        $(".won-or-lose").html("You Won!");
        window.setTimeout(function() {
          alert('축하합니다, 미션을 클리어하셨습니다. \n 잠시 후 다음 방으로 이동합니다!')
          let moveToNext = window.setTimeout(moveToNextPage, 100);
          moveToNext;
        }, 1000);
        break;
      }
      else {
        $(".greetings").html("Whoops!");
        $(".won-or-lose").html("You Lose!")
      }
      
      function moveToNextPage(){
        let current_page = parseInt(document.getElementById('current-page').innerText);
        console.log(current_page);
        if(current_page + 1 === 4){
          sections[current_page-1].addClass("hidden");
          sections[current_page].removeClass("hidden");
          document.getElementById('current-page').innerText = current_page+1;
          $('.navigation-container').attr('style', 'display:block');
        }
      }
    }
  }
  reached_end = true;
  // if ( has_my_avatar_won ) {
  //   $(".greetings").html("Congratulations!")
  //   $(".won-or-lose").html("You Won!");
  //   window.setTimeout(function() {
  //     alert('축하합니다, 미션을 클리어하셨습니다. \n 잠시 후 다음 방으로 이동합니다!')
  //     let moveToNext = window.setTimeout(moveToNextPage, 100);
  //     moveToNext;
  //   }, 1000);
  // }
  // else {
  //   $(".greetings").html("Whoops!");
  //   $(".won-or-lose").html("You Lose!")
  // }
}

var moveThePlayer = function (x) {
  var addition = Number(getCurrentBox()[1]) + dice_value;
  var currentpos_arr = [];
  var current_position = "";
  var iti = 0;
  var loop = window.setInterval(function () {
    if(turn_dom.text() === '내 차례'){
      if(result === 't'){
        // console.log(result);
        hop(dice_value);
      } else{
        hop(0);
      }
    } else{
      hop(dice_value);
    }
  }, 1000);


  hop = function (dice_value) {
    if ( iti < dice_value ) {
      var currentpos_arr = [];
      var current_position = "";
      currentpos_arr = getCurrentBox();

      current_position = currentpos_arr[0];

      var nexthop = getNextHop(current_position, currentpos_arr[1]);

      $(".player" + nextTurn).attr({
        'data-currentboxrowcol': nexthop,
        'data-currentboxno': Number(currentpos_arr[1]) + 1

      })
      var temp_ = nexthop;
      // console.log(temp_);
      nexthop = nexthop.replace(" ", ".");
      nexthop = $("." + nexthop).position();
      
      if ( temp_ === "row5 col5" ) {   
        game1_endGame();
        clearInterval(loop);
      } else{
        $(".player" + nextTurn).css({
          'top': nexthop.top + 10,
          'left': nexthop.left + 3,
        });
        iti++;
      }

    } else {

      clearInterval(loop);
      checkInEndForSnakeOrLadder();

      // if(document.querySelector('#quiz').style.opacity === 0){
        window.setTimeout(function () {
          
          movePlayer2toStart();
          var b = changeTurn(nextTurn);
          nextTurn = b[0];
          
          activeClickOnButton();
          // console.log(result);
          //여기서 result가 정상적으로 출력되면 quiz모달의 상태에 따라 작동하도록설정할것
          // var test = document.querySelector('#quiz');
          // console.log(test.style.opacity);
          // if(document.querySelector('#quiz').style.opacity === 0){
          if ( b[1] == "컴퓨터차례" ) {
              window.setTimeout(function () {
                
                if ( !reached_end ) {
                  roll_dice();
                }

              }, 400);
          }
        // }
        }, 400)
      // }
    }
  }
}

var movePlayer2toStart = function () {
  // console.log(second_player)
  if ( flag ) {
    var box1 = $(".row1.col1").position();

    var top = box1.top + 10;
    var left = box1.left + 3;

    main_container.append('<img data-currentboxrowcol="row1 col1" data-currentboxno="1" class = "player_in_board player' + second_player + '" src="./assets/img/game1/avatar_body' + second_player + '.png" alt="player2" style="top:' + top + 'px;left:' + left + 'px">')
    flag = false;
  }
}

var changeTurn = function (x) { //x가 순서를 의미하는 것같다.
  if ( x == 1 ) {
    x = 2;
  } else {
    x = 1;
  }
  var a = [];
  caret_dom.toggleClass("nextturn");
  if ( turn_dom.text() == "내 차례" ) {
    turn_dom.text("컴퓨터차례");
    a.push(x);
    a.push("컴퓨터차례");
    // console.log(a);
    // setQuiz();
    // console.log(result)
    return a;
  } else {
    turn_dom.text("내 차례")
    a.push(x);
    a.push("내 차례");
    return a;
  }
}

var checkInEndForSnakeOrLadder = function () {
  var currentpos_arr = getCurrentBox();

  var ans = isOnSnakeOrLadder(getNumberFromRowString(currentpos_arr[0]), getNumberFromColString(currentpos_arr[0]));
  // console.log(ans.length);
  if ( ans.length > 0 ) {
    move(ans);
  }

}

var move = function (ans) {
  var nexthop = ans.replace(" ", ".");
  nexthop = $("." + nexthop).position();
  $(".player" + nextTurn).css({
    'top': nexthop.top + 10,
    'left': nexthop.left + 3,
  });
  $(".player" + nextTurn).attr({
    'data-currentboxrowcol': ans,
    'data-currentboxno': Number(getNumberOfBox(ans))

  });
}

var getNumberOfBox = function (box) {
  box = box.replace(" ", ".");
  return $("." + box).find("span").text();
}

var getNextHop = function (c, no) {
  var r = getNumberFromRowString(c);
  var c = getNumberFromColString(c);

  if ( r % 2 == 0 ) {
    c--;
  } else {
    c++;

  }

  if ( Number(no) >= (Number(r) * 5) ) {
    //means next row
    if ( r % 2 == 0 ) {
      c = 1;
    } else {
      c = 5;

    }
    r++;
  }

  var temp = "row" + r + " col" + c;

  return temp;

};
var isOnSnakeOrLadder = function (r, c) {
  var current = "row" + r + " col" + c;
  for (pos in snakeorladderobj) {
    if ( pos == current ) {
      return snakeorladderobj[pos].end;
    }
  }
  return "";
};

var getNumberFromRowString = function (a) {
  return a.split(" ")[0].match(/\d+/)[0];
};

var getNumberFromColString = function (a) {
  return a.split(" ")[1].match(/\d+/)[0];
}

var getCurrentBox = function () {
  var a = [];

  a.push($(".player" + nextTurn).attr("data-currentboxrowcol"));
  a.push($(".player" + nextTurn).attr("data-currentboxno"));

  return a;
}

var getFinalBox = function (addedno, currentrow) {
  //current row helps decreasing the no of loops.

  var c = Number(currentrow);
  var start = ((5 - (c + 2)) * 5);
  // console.log(start);
  var boxs = $("ul li.box");

  for (var i = start; i < start + 15; i++) {
    var self = boxs[i];
    if ( $(self).find("span").text() == addedno ) {
      return $(self).attr("class").substr(4);
    }
  }
}

var whichPlayerIsFirstRoll = function (avatar, who_first) {
  //this function is because to clear the confusion of chosen avatar and first turn. This function
  //will return p1 or p2
  if ( avatar === "one" ) {
    if ( who_first === "me" ) {


      turn_dom.html("내 차례");
      return "1";
    }
    if ( who_first === "computer" ) {

      caret_dom.addClass("nextturn");
      turn_dom.html("컴퓨터차례");
      return "2";
    }

  }
  if ( avatar === "two" ) {
    if ( who_first === "me" ) {

      caret_dom.addClass("nextturn");
      turn_dom.html("내 차례");
      return "2";
    }
    if ( who_first === "computer" ) {


      turn_dom.html("컴퓨터차례");
      return "1";
    }

  }

};
// });