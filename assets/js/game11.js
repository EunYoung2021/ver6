// 초록 테두리 안에 들어가는 이미지의 사이즈는 '110 x 160px'가 가장 이상적입니다.

//각 문제별 문제이미지의 '파일명.png'를 각 quiz:에다가 넣어주시고,
//초급음악이론 퀴즈에서 띄워줄 문제이미지의 경우
// ['bgQuiz', [{quiz:'파일명.확장자', select:[]...}]]

//선택지(드래그할 수 있는 카드)의 이미지의 파일명.png를 select:[] 안에 띄워주고 싶은 순서대로 넣어주시면 됩니다.

//문제별 정답의 경우 정답 문구가 아닌 선택지 번호 1~5번 이미지중 정답이미지의 순번을 입력해주시면 됩니다.
//각 이미지는 반드시 images폴더 내에 존재해야합니다.

var quiz_Card = [
    //초급음악이론 퀴즈
    //
    ['bgQuiz', [{quiz:'q1.png', select:['a1.png', 'a2.png', 'a3.png', 'a4.png', 'a5.png'], answer: 1}, 
            {quiz:'q2.png', select:['a3.png', 'a4.png', 'a2.png', 'a1.png', 'a5.png'], answer: 3}, 
            {quiz:'q3.png', select:['a2.png', 'a3.png', 'a1.png', 'a5.png', 'a4.png'], answer: 2}, 
            {quiz:'q4.png', select:['a5.png', 'a3.png', 'a1.png', 'a4.png', 'a2.png'], answer: 4}, 
            {quiz:'q5.png', select:['a4.png', 'a5.png', 'a3.png', 'a2.png', 'a1.png'], answer: 2},
			{quiz:'q6.png', select:['a10.png', 'a8.png', 'a6.png', 'a7.png', 'a9.png'], answer: 3}, 
            {quiz:'q7.png', select:['a7.png', 'a9.png', 'a6.png', 'a10.png', 'a8.png'], answer: 1}, 
            {quiz:'q8.png', select:['a6.png', 'a7.png', 'a10.png', 'a9.png', 'a8.png'], answer: 5}, 
            {quiz:'q9.png', select:['a10.png', 'a9.png', 'a8.png', 'a7.png', 'a6.png'], answer: 2}, 
            {quiz:'q10.png', select:['a7.png', 'a6.png', 'a8.png', 'a9.png', 'a10.png'], answer: 5},
			{quiz:'q11.png', select:['a15.png', 'a14.png', 'a13.png', 'a12.png', 'a11.png'], answer: 5}, 
            {quiz:'q12.png', select:['a11.png', 'a12.png', 'a13.png', 'a14.png', 'a15.png'], answer: 2}, 
            {quiz:'q13.png', select:['a11.png', 'a13.png', 'a15.png', 'a12.png', 'a14.png'], answer: 2}, 
            {quiz:'q14.png', select:['a14.png', 'a12.png', 'a11.png', 'a13.png', 'a15.png'], answer: 1}, 
            {quiz:'q15.png', select:['a15.png', 'a13.png', 'a11.png', 'a14.png', 'a12.png'], answer: 1},
			{quiz:'q16.png', select:['a17.png', 'a16.png', 'a18.png', 'a19.png', 'a20.png'], answer: 2}, 
            {quiz:'q17.png', select:['a20.png', 'a19.png', 'a18.png', 'a17.png', 'a16.png'], answer: 4}, 
            {quiz:'q18.png', select:['a16.png', 'a18.png', 'a20.png', 'a19.png', 'a17.png'], answer: 2}, 
            {quiz:'q19.png', select:['a17.png', 'a19.png', 'a16.png', 'a18.png', 'a20.png'], answer: 2}, 
            {quiz:'q20.png', select:['a16.png', 'a19.png', 'a20.png', 'a18.png', 'a17.png'], answer: 3}
        ]
    ]
];

var bgScoreCorr = 0;
var bgScoreMis = 0;

var cnt = 0;
var add = './assets/img/game11/';
var msg;

// var scorePop = $('.scorePop')
var quizCtt = [4]; //첫번째는 퀴즈별 인덱스값 저장, 두번째는 몇 번째 문제인지, 정답이 무엇인지 저장, 네번째는 현재 퀴즈테마

window.onload = function(){
    var randomNum = Math.floor(Math.floor(Math.random() * quiz_Card[0][1].length));
    quizCtt[0] = 0;
    quizCtt[1] = randomNum;
    quizCtt[2] = quiz_Card[0][1][randomNum].answer;
    quizCtt[3] = quiz_Card[0][0];

    $('.nextButton').attr('value', quizCtt[3]);
    

    //퀴즈별 문제 이미지 출력
    var img = quiz_Card[0][1][randomNum].quiz;

    var quiz = $('.quiz');
    var quizImg = document.createElement('img');
    quizImg.setAttribute('id', 'quizImg');
    quizImg.setAttribute('src', add+img);
    quiz.append(quizImg);

    for(var i=0; i < quiz_Card[0][1][randomNum].select.length; i++){
        var cardSet = $('#card_'+(i+1));
        var cardImg = quiz_Card[0][1][randomNum].select[i];
        cardSet.attr('value', (i+1));
        cardSet.attr('src', add+cardImg);
    }

    var corrScorePop = $('.corrScorePop');
    var misScorePop = $('.misScorePop');
    var corrScore = $('.corrScore');
    var misScore = $('.misScore');
    corrScorePop.attr('style', 'color : rgb(63, 165, 255)');
    misScorePop.attr('style', 'color : rgb(63, 165, 255)');
    corrScore.attr('style', 'color : rgb(63, 165, 255)');
    misScore.attr('style', 'color : rgb(63, 165, 255)');

    // timer();
}

function reloadCard(index){
    var quizSlot = quiz_Card[index][1];
    var quizName = quiz_Card[index][0];
    var randomNum = Math.floor(Math.floor(Math.random() * (quizSlot.length)));
    console.log(quizName+"의 "+(randomNum+1)+'번째 퀴즈');

    //문제 이미지 변경
    var quizImg = document.getElementById('quizImg');
    var img = quiz_Card[index][1][randomNum].quiz;
    console.log(img);
    quizImg.setAttribute('src', add+img);

    for(var i = 0; i < quizSlot[randomNum].select.length; i++){
        var changeQuizElem = $('#card_'+(i+1));
        var cardImg = quiz_Card[index][1][randomNum].select[i];
        changeQuizElem.attr('src', add+cardImg);
    }

    quizCtt[0] = index;
    quizCtt[1] = randomNum;
    quizCtt[2] = quiz_Card[index][1][randomNum].answer;

    var dropZone = $('#dropZone')[0];

    if(dropZone.childNodes[0]){
        var childElem = dropZone.childNodes[0].id;
        // console.log(childElem);

        var moveElem = dropZone.childNodes[0];
        // console.log(moveElem);
        var parentElem;

        switch(childElem){
            case 'card_1':
                parentElem = $('#card1');
            break;
            case 'card_2':
                parentElem = $('#card2');
            break;
            case 'card_3':
                parentElem = $('#card3');
            break;
            case 'card_4':
                parentElem = $('#card4');
                break;
            case 'card_5':
                parentElem = $('#card5');
                break;
        }
        parentElem.append(moveElem);
    }
    fillCard(index, randomNum);
}

function setNextQuiz(){
    var quizName = quizCtt[3];
    var index;
    switch(quizName){
        case 'bgQuiz':
            index = 0;
            break;
        case 'mdQuiz':
            index = 1;
            break;
        case 'compQuiz':
            index = 2;
            break;
        case 'rymQuiz':
            index = 3;
            break;
    }
    console.log("이번 퀴즈는 "+quizName+"입니다.");
    $('#dropZone').attr('onDragOver', 'onDragOver(event);');
    $('.nextButton').attr('value', quizCtt[3]);
    $('#resultImg').attr('style', 'visibility: hidden;')
    reloadCard(index);
    $('.nextButton').attr('style', 'visibility: hidden;');
    timer();
}

function check(value){
    var answer = quizCtt[2];
    var result;

    if(answer === value){
        result = 't';
    } else{
        result = 'f';
    }
    resultOfCheck(result);
    scoreControl(quizCtt[3], result);
    
    stopTimer();

    // window.setTimeout(function() {
    //     setNextQuiz();
    // }, 900);
}

function scoreControl(quizName, result){
    var game11_score;
    var className;
    switch(result){
        case 't':
            className = 'corrScore';
            if(quizName === 'bgQuiz'){
                bgScoreCorr += 1;
                game11_score = bgScoreCorr;
            }
            break;
        case 'f':
            className = 'misScore';
            if(quizName === 'bgQuiz'){
                bgScoreMis += 1;
                game11_score = bgScoreMis;
            }
            break;
    }

    var insertScore = $('.'+className);
    insertScore[0].innerText = game11_score;

    if(bgScoreCorr === 3){
        stopTimer();
        $('.endPopup').attr('style', 'visibility: visible;');
        window.setTimeout(function(){
            alert('축하합니다! 카드퀴즈의 방을 클리어하여 모든 미션을 클리어하셨습니다!!!');
            let current_page = parseInt(document.getElementById('current-page').innerText);
            if(current_page + 1 === 24){
                sections[current_page-1].addClass("hidden");
                sections[current_page].removeClass("hidden");
                console.log(sections[current_page])
                document.getElementById('current-page').innerText = current_page+1;
            }
        }, 1000);
    }
}

function resultOfCheck(result){
    var resultSound = $('#resultSound');
    var resultImg = $('#resultImg');
    
    if(result === 't'){
        resultImg.attr('src', './assets/img/game11/corr.png');
        resultImg.attr('style', 'visibility: visible;')
        resultSound.attr('src', './assets/sounds/game11/true.wav');
        resultSound.attr('autoplay', 'true');
    } else{
        resultImg.attr('src', './assets/img/game11/mis.png');
        resultImg.attr('style', 'visibility: visible;')
        resultSound.attr('src', './assets/sounds/game11/false.wav');
        resultSound.attr('autoplay', 'true');
    }
    // $('.nextButton').attr('style', 'visibility: visible;');
    console.log(bgScoreCorr);
    if(bgScoreCorr < 2){
        setTimeout(setNextQuiz, 800);
    } else{
        stopTimer();
    }
    $('#dropZone').attr('onDragOver', '');
}

function fillCard(index, randomNum){
    for(var i = 1; i <=5; i++){
        if($('#card'+i)[0].childNodes.length === 2){
            console.log('card'+i+'가 비어있다.')
            var inputElem = document.createElement('img');
            var cardImg = quiz_Card[index][1][randomNum].select[i-1];
            inputElem.setAttribute('id', 'card_'+i);
            inputElem.setAttribute('src', add+cardImg);
            inputElem.setAttribute('draggable', "true");
            inputElem.setAttribute('ondragstart', 'onDragStart(event)');
            inputElem.setAttribute('value', i);
            $('#card'+i).append(inputElem);
        }
    }
}

var count = 10;
var counter;
function timer(){
    resetTimer();
    counter = setInterval(updateTimer, 1000);

    var timer = $('#timer');
    timer.addClass('start');
}

function updateTimer(){
    count--;

    //만일 카운트가 0으로 떨어진다면 타이머 div 내에 0이라는 숫자를 넣어준뒤 clearInterval로 타이머를 정지시켜준다.
    //10초 내에 정답을 선택하지 못했으므로 문제는 틀린것으로 처리 >> resultOfCheck=f + 해당퀴즈에 틀린 문제 +1를 리턴해준다.
    if (count <= 0){
        $('#timer').text(0);
        clearInterval(counter);
        resultOfCheck('f');
        scoreControl(quizCtt[3], 'f');
        console.log('이제 그마안');
        return;
    }
    
    var timer = $('#timer');
    timer.text(count);
}

function stopTimer(){
    var timer = $('#timer');
    timer.removeClass('start');
    clearInterval(counter);
}

function resetTimer(){
    count = 10;
}

function checkCorrScore(btnName, scoreName){
    setTimeout(function(){
        window.alert(scoreName+' 완료되었습니다. \n다른 퀴즈를 풀어주세요!');
    }, 500);
    var btn = $('.'+btnName).attr('onclick', '');
    btn.attr('style', 'cursor: Default;');
    $('.nextButton').attr('style', 'visibility: hidden;');
}


// drag N drop =============================================================================================
const game11_gameContainer = document.querySelectorAll(".game11_gameContainer");
const dragElem = document.querySelectorAll("#card");

function onDragOver(event){
    event.preventDefault();
}

function onDragStart(event){
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
}

function onDrop(event){
    const id = event
        .dataTransfer
        .getData('text');

    var draggableElement = document.getElementById(id);
    const dropZone = event.target;
    
    var exElement = $('#dropZone')[0].childNodes[0];

    if(exElement === undefined){
        dropZone.appendChild(draggableElement);
    } else{
        dropZone.appendChild(draggableElement);
        exElement.setAttribute('id', draggableElement.id);
        exElement.setAttribute('value', draggableElement.getAttribute('value'));
        exElement.setAttribute('src', draggableElement.getAttribute('src'));
    }
    
    event
        .dataTransfer
        .clearData();
    
    // var choice = Number(event.target.getAttribute('value'));
    var choice = Number(draggableElement.getAttribute('value'));
    // console.log(choice);
    // console.log(event.target.getAttribute('value'));
    check(choice);
}

// function endGame(){
//     if(corrScore === 1){
//         alert('축하합니다! 카드퀴즈의 방을 클리어하여 모든 미션을 클리어하셨습니다!!!');
//         let current_page = parseInt(document.getElementById('current-page').innerText);
//         if(current_page + 1 === 24){
//             sections[current_page-1].addClass("hidden");
//             sections[current_page].removeClass("hidden");
//             console.log(sections[current_page])
//             document.getElementById('current-page').innerText = current_page+1;
//         }
//     }
// }