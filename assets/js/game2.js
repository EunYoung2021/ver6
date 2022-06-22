let game2_mission = [
    ['missionA-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionA-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionA-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionA-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionA-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],

    ['missionB-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionB-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionB-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionB-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionB-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    
    ['missionC-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionC-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionC-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionC-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionC-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    
    ['missionD-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionD-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionD-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionD-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionD-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    
    ['missionE-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionE-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionE-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionE-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionE-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],

    ['missionF-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionF-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionF-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionF-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionF-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    
    ['missionG-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionG-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionG-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionG-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionG-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
   
    ['missionH-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionH-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionH-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionH-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionH-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    
    ['missionI-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionI-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionI-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionI-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionI-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],

    ['missionJ-1', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionJ-2', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionJ-3', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionJ-4', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg'],
    ['missionJ-5', ['a', 'b', 'c', 'd', 'e'], 'a', 'testImg']
];
var game2_crrCnt = 0;

// function move(event){
//     let X = event.clientX || event.touches[0].clientX;
//     let Y = event.clientY || event.touches[0].clientY;
//     document.documentElement.style.setProperty('--X',X+'px');
//     document.documentElement.style.setProperty('--Y',Y+'px');
// }

// document.addEventListener('mousemove',move);
// document.addEventListener('touchpad',move);

function openModal(imgClsName){
    $('.game2_quizModal_background').css('visibility', 'visible');
    $('.game2_quizModal').css('visibility', 'visible');
    setRdmMission(imgClsName);
}

function closeModal_game2(){
    $('.game2_quizModal_background').css('visibility', 'hidden');
    $('.game2_quizModal').css('visibility', 'hidden');
}

function setRdmMission(imgClsName){    
    var game2_missionText = document.getElementById('game2_mission');
    var game2_quizImg = $('#game2_quizImg');
    var rndNum = Math.floor(Math.random() * game2_mission.length);
    // console.log(rndNum);
    
    $('.option').attr('onclick', '');

    //missionText 삽입
    game2_missionText.innerHTML = game2_mission[rndNum][0];
    game2_missionText.setAttribute('value', rndNum);

    //quizImg 삽입
    game2_quizImg.attr('style', 'background-image: url("./assets/img/game2/missionImgs/'+game2_mission[rndNum][3]+'.jpg"');


    //랜덤한 숫자를 뽑아서 문제 선택, for문으로 options 넣어주기 + 닫기 버튼을 누르면 문제가 사라지는 함수 + 정답 체크 함수(+ 총 6문제를 풀면 넘어가도록 설정, alert설정)
    // console.log(document.getElementById('game2_quizOption').childElementCount);
    for(var i = 0; i < document.getElementById('game2_quizOption').childElementCount; i++) {
        var game2_quizOptions = document.getElementById('game2_quizOption_'+(i+1));
        game2_quizOptions.innerHTML = game2_mission[rndNum][1][i];
        game2_quizOptions.setAttribute('value', game2_mission[rndNum][1][i]);
        game2_quizOptions.setAttribute('onclick', 'game2_checkAnswer('+(i+1)+', "'+imgClsName+'")');
    }
    // $(document).ready(function() {
    //     $('.option').on('click', function(e) {
    //         game2_checkAnswer(e, imgClsName);
    //     })
    // })
}

function game2_checkAnswer(optionNum, imgClsName){
    console.log('요호')
    var game2_answer = game2_mission[document.getElementById('game2_mission').getAttribute('value')][2];
    // console.log(game2_answer);
    console.log(event.currentTarget);
    
    if(game2_answer === $('#game2_quizOption_'+optionNum).attr('value')){
    // if(game2_answer === event.currentTarget.getAttribute('value')){
    // if(game2_answer === event.target.getAttribute('value')){
        alert('정답입니다!');
        game2_crrCnt += 1;
        closeModal_game2();
        $('.'+imgClsName).attr('style', 'filter: brightness(100%)');
        $('.'+imgClsName).attr('onclick', '');
    } else{
        alert('오답입니다..');
        closeModal_game2();
    }
    
    if(game2_crrCnt === 5){
        alert('축하합니다, 미션을 클리어하셨습니다. \n 잠시 후 다음 방으로 이동합니다!');
        closeModal_game2();
        
        let current_page = parseInt(document.getElementById('current-page').innerText);
        console.log(current_page);
        if(current_page + 1 === 6){
          sections[current_page-1].addClass("hidden");
          sections[current_page].removeClass("hidden");
          console.log(sections[current_page])
          document.getElementById('current-page').innerText = current_page+1;
          $('.navigation-container').attr('style', 'display:block');
        }
    }
}