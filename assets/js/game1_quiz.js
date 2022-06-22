var quizList = [
    ['아래 음악기호의 이름을 맞추어 보세요.', 'a21', ['높은음자리표', '가온음자리표', '낮은음자리표', '기본음자리표', '온래음자리표'], '높은음자리표'],
    ['아래 음악기호의 이름을 맞추어 보세요.', 'a17', ['페르마타', '도돌이표', '포르테', '알레그로', '쉼표'], '도돌이표'],
    ['아래 음악기호의 이름을 맞추어 보세요.', 'a32', ['피아노', '메조피아노', '포르테시모', '포르테', '쉼표'], '포르테시모'],
    ['아래 음악기호의 이름을 맞추어 보세요.', 'a36', ['피아노', '피아니시모', '포르테', '메조포르테', '쉼표'], '피아노'],
    ['아래 음악기호의 이름을 맞추어 보세요.', 'b5', ['레', '도', '미', '솔', '레'], '미'],
    ['아래 음악기호의 이름을 맞추어 보세요.', 'b7', ['도', '레', '솔', '파', '레'], '솔'],
    
    ['아래 악보의 계이름을 맞춰주세요.', 'b6', ['도', '레', '미', '파', '솔'], '파'],
    ['아래 악보의 계이름을 맞춰주세요.', 'b10', ['도', '레', '미', '파', '솔'], '도'],
    ['아래 악보의 계이름을 맞춰주세요.', '11', ['도', '레', '미', '파', '시'], '파'],
    ['아래 악보의 계이름을 맞춰주세요.', '14', ['레', '시', '파', '솔', '라'], '시'],
    ['아래 악보의 계이름을 맞춰주세요.', '13', ['레', '미', '라', '솔', '도'], '라'],
     
    ['아래 악보의 계이름을 맞춰주세요.', '15', ['도', '레', '미', '파', '솔'], '도'],
    ['아래 악보의 계이름을 맞춰주세요.', '12', ['레', '미', '파', '솔', '라'], '솔'],
    ['음악기호의 이름을 맞추어보세요.', 'a1', ['스타카토', '레가토', '악센트', '페르마타', '데크레센도'], '스타카토'],
    ['음악기호의 이름을 맞추어보세요.', 'a3', ['스타카토', '테누토', '레가토', '악센트', '페르마타'], '테누토'],
    ['음악기호의 이름을 맞추어보세요.', 'a8', ['악센트', '레가토', '페르마타', '악센트', '스타카토'], '페르마타'],
    
    ['음악기호의 이름을 맞추어보세요.', 'a10', ['크레센도', '데크레센도', '트릴', '페르마타', '데크레센도'], '크레센도'],
    ['음악기호의 이름을 맞추어보세요.', 'a11', ['크레센도', '데크레센도', '트릴', '악센트', '페르마타'], '데크레센도'],
    ['음악기호 중 빠르기를 맞춰주세요.', 'a28', ['보통빠르게', '아주빠르게', '점차빠르게', '악센트', '스타카토'], '보통빠르게'],
    ['음악기호 중 세기를 맞추어 보세요.', 'a33', ['여리게', '세게', '점차여리게', '악센트', '스타카토'], '세게'],
    ['음악기호 중 세기를 맞추어 보세요.', 'a37', ['조금세게', '여리게', '매우여리게', '악센트', '스타카토'], '매우여리게'],	
	
	['아래 음악기호의 이름을 맞추어 보세요.', 'a22', ['높은음자리표', '낮은음자리표', '가온음자리표', '기본음자리표', '온래음자리표'], '낮은음자리표'],
    ['음악기호 중 빠르기를 맞춰주세요.', 'a27', ['느리게', '매우느리게', '아주빠르게', '보통빠르기', '빠르게'], '느리게'],
    ['음악기호 중 세기를 맞추어 보세요.', 'a34', ['매우세게', '조금세게', '세게', '여리게', '매우여리게'], '조금세게'],
    ['음악기호 중 세기를 맞추어 보세요.', 'a35', ['조금여리게', '여리게', '매우여리게', '조금세게', '세게'], '조금여리게'],	
	
	['아래 악보의 계이름을 맞춰주세요.', 'b3', ['도', '레', '미', '파', '솔'], '도'],
    ['아래 악보의 계이름을 맞춰주세요.', 'b4', ['도', '레', '미', '파', '솔'], '레'],
    ['아래 악보의 계이름을 맞춰주세요.', 'b8', ['도', '라', '미', '파', '솔'], '라'],
    ['아래 악보의 계이름을 맞춰주세요.', 'b9', ['시', '레', '미', '파', '솔'], '시'],
    ['아래 악보의 계이름을 맞춰주세요.', '08', ['도', '레', '미', '라', '솔'], '도'],	
	
	['아래 악보의 계이름을 맞춰주세요.', '08', ['도', '레', '미', '라', '솔'], '도'],
    ['아래 악보의 계이름을 맞춰주세요.', '09', ['시', '레', '미', '파', '솔'], '레'],
    ['아래 악보의 계이름을 맞춰주세요.', '10', ['도', '레', '미', '파', '솔'], '미'],
    ['아래 악보의 계이름을 맞춰주세요.', 'b9', ['도', '레', '미', '파', '시'], '시']

];
var overlay = document.getElementsByClassName('overlay');
var quiz = document.getElementById('game1_quiz');
var mission = document.getElementsByClassName('mission');
var quizImg = document.getElementById('quizImg');
var option = document.getElementById('option');

var result;

function setQuiz(){
    var randNum = Math.floor(Math.random() * quizList.length);

    // overlay.setAttribute('style', 'visibility:visible');
    quiz.setAttribute('style', 'visibility:visible');

    //quizImg 생성
    var img = document.getElementById('img');
    console.log(randNum);
    img.setAttribute('src', './assets/img/game1/'+quizList[randNum][1]+'.png');

    // quizSetting
    mission[0].setAttribute('value', randNum);
    mission[0].innerHTML = quizList[randNum][0];
    // quizImg.appendChild(img);
    for(var i = 0; i < document.getElementById('options').childElementCount; i++){
        var option = document.getElementsByClassName('option'+(i+1));
        option[0].innerHTML = quizList[randNum][2][i];
    }
    for(var i = 0; i < document.getElementById('options').childElementCount; i++){
        var option = $('.option'+(i+1));
        option.attr('style', 'visibility: visible');
    }
}

// 정답체크
var options = document.querySelectorAll('#option');
options.forEach( (option) => {
    option.addEventListener('click', function(event){
        var choice = event.target.innerHTML;
        var missionNum = $('.mission').attr('value');
    
        if(choice === quizList[missionNum][3]){
            result = 't';
            intervalID = setInterval(hide, 70);
            moveThePlayer($('#dice_img').attr('value'));
        } else {
            result = 'f';
            intervalID = setInterval(hide, 70);
            moveThePlayer(0);
        }
        console.log(result);
        
        for(var i = 0; i < document.getElementById('options').childElementCount; i++){
            var option = $('.option'+(i+1));
            option.attr('style', 'visibility: hidden');
        }
    })
})

function hide(){
    var quizModal = document.getElementById('game1_quiz');
    var roll_btn = document.getElementById('roll-dice');
    opacity = Number(window.getComputedStyle(quizModal).getPropertyValue("opacity"));
    
    if(opacity>0){
        opacity = opacity-0.1;
        quizModal.style.opacity=opacity;
        // overlay.setAttribute('style', 'visibility:hidden');
        //img.style.opacity=opacity;
        roll_btn.style.zIndex = 222;
    }
    else{
        clearInterval(intervalID);
    }
}