let game5_mission = [
    ['교향곡 신세계와 현악4중주 아메리카를 작곡한 작곡자는?', ['2']],
	['음악의 아버지로 불리며 토카타와 푸가를 작곡한 작곡자는?', ['7']],
	['음악의 천재로 불리며 4살때 작곡을 시작한 작곡자는?', ['6']],
	['악성으로 불리며 운명교향곡 월광소나타를 작곡한 작곡자는?', ['8']],
	['사계절을 음악으로 작곡한 작곡자는?', ['10']],
    ['교향곡의 아버지로 불리며 놀람교향곡을 작곡자 작곡자는?', ['20']],
    ['음악의 어머니로 불리며 메시아를 작곡한 작곡자는?', ['21']],
    ['동물의 사육제를 작곡한 작곡자는?', ['11']],
    ['노르웨이 작곡자로 페르 귄트 모음곡을 작곡한 작곡자는?', ['1']],
    ['한여름밤의 꿈 봄의노래 노래의 날개위에를 작곡한 작곡자는?', ['5']],
    ['헝가리 무곡을 작곡한 작곡자는?', ['9']],	
    ['마주르카 녹턴 폴로네이즈 를 작곡한 작곡자는?', ['13']],
	['어린이의 정경 시인의 사랑 나비들 을 작곡한 작곡자는?', ['14']],
	['송어 마왕 아베마리아 겨울나그네를 작곡한 작곡자는?', ['15']],
	['위풍당당 사랑의 인사를 작곡한 영국 작곡자는?', ['17']],
	['가극 라보엠 토스카 나비부인을 작곡한 작곡자는?', ['19']],
    ['백조의 호수 호두까기 인형 교향곡 6번 비창을 작곡한 작곡자는?', ['18']],
    ['test.png', ['1']]	
];

let game5_imgList = ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];

  var game5_score = 0;
//   window.onload = function(){
    game5_setMission();
    game5_setImg();
//   }
  
  // 문제 생성 - Mission & 정답란 생성 >> miisionArea & answerArea Settings
  function game5_setMission(){
    // 랜덤 Mission생성
    var missionText = document.getElementById('game5_missionArea');
    var ranNum = Math.floor(Math.random() * game5_mission.length);
    
    if(missionText.childElementCount === 1){
        missionText.removeChild(missionText.childNodes[0]);
    }

    var missionIorT = game5_mission[ranNum][0].split('.')[1];
    // console.log(missionIorT);
    if(missionIorT === 'png'){
        console.log(1)
        var missionImg = document.createElement('img');
        missionImg.src = './assets/img/game5/'+game5_mission[ranNum][0];
        missionText.appendChild(missionImg);
        missionText.setAttribute('value', ranNum);
    } else{        
        // console.log(2)
        missionText.setAttribute('value', ranNum);
        missionText.innerText = game5_mission[ranNum][0];
    }
  
    // missionText.setAttribute('value', ranNum);
    // missionText.innerText = game5_mission[ranNum][0];
  }
  
  function game5_setImg(){
    arrShuffle(game5_imgList);
    game5_setImgs();    
    function arrShuffle(arr){
        arr.sort(() => Math.random() - 0.5);
    }
  
    // 드래그할 이미지 순서 랜덤으로 만들기
  
    function game5_setImgs(){
        var imgArea = document.getElementById('game5_imgArea');
  
        var missionN = document.getElementById('game5_missionArea').getAttribute('value');
  
        for(var i = 0; i < game5_imgList.length; i++){
            //img태그
            var imgTag = document.createElement('img');
            imgTag.setAttribute('id', 'game5_dragImg' + (i+1));
            imgTag.className = 'game5_dragImg' + (i+1);
            imgTag.src = './assets/img/game5/'+game5_imgList[i]+'.png';
            imgTag.setAttribute('value', game5_imgList[i]);
            imgTag.setAttribute('draggable', 'true');
            imgTag.setAttribute('ondragstart', 'game5_onDragStart(event)');
  
            imgTag.setAttribute('onclick', 'playInsSound("'+game5_imgList[i]+'")');
  
            var setImgDiv = document.createElement('div');
            setImgDiv.className = 'game5_dragImgDiv'+(i+1);
  
            setImgDiv.appendChild(imgTag);
            imgArea.appendChild(setImgDiv);
        }
    }
  }
  
  // 정답체크 & 다음 문제로 넘어가기
  function game5_checkAnswer(){
    var missionText = document.getElementById('game5_missionArea');
   var answerArea = document.getElementById('game5_answerArea');
   var answerCnt = document.getElementById('game5_missionArea').getAttribute('value');

   missionText.innerHTML = '';
  
    var answerArea = document.getElementById('game5_answerArea');
    for(var i = 0; i < answerArea.childElementCount; i++){
        var answerImgValue = answerArea.childNodes[i];
        answerArr.push(answerImgValue.getAttribute('value'));
        answerArr.sort();
    }
    game5_mission[answerCnt][1].sort();
    // 정답배열과 유저가 입력한 답의 배열의 요소를 비교하는 for문
    for(var i = 0; i < game5_mission[answerCnt][1].length; i++){
        if(game5_mission[answerCnt][1][i] === answerArr[i]){
            corrCnt += 1;
            console.log(corrCnt);
        }
    }
    if(corrCnt === game5_mission[answerCnt][1].length){
        game5_score += 1;
        if(game5_score === 2){
            alert('축하합니다, 작곡가 퀴즈의 방의 미션을 클리어 하셨습니다. \n 잠시 후 다음 방으로 이동합니다!');
            
            let current_page = parseInt(document.getElementById('current-page').innerText);
            console.log(current_page);
            if(current_page + 1 === 12){
                sections[current_page-1].addClass("hidden");
                sections[current_page].removeClass("hidden");
                console.log(sections[current_page])
                document.getElementById('current-page').innerText = current_page+1;
                $('.navigation-container').attr('style', 'display:block');
            }

            var btn = document.getElementById('game5_check');
            btn.setAttribute('style', 'background-color: gray');
            btn.setAttribute('onclick', '');
        } else{
            alert('정답입니다!');
            game5_reset();
            console.log(game5_score);
        }
    } else{
        alert('오답입니다..');
        game5_reset();
    }
    answerArr = [];
    corrCnt = 0;
  }
  
  function game5_reset(){
    var answerArea = document.getElementById('game5_answerArea');
    var imgArea = document.getElementById('game5_imgArea');
  
    while(answerArea.hasChildNodes()){
        answerArea.removeChild(answerArea.firstChild);
    }
    while(imgArea.hasChildNodes()){
        imgArea.removeChild(imgArea.firstChild);
    }
    game5_setMission();
    game5_setImg();
  }
  
  function playInsSound(insName){
    var insSound = new Audio();
    insSound.src = './assets/sounds/game5/'+insName+'.mp3';
    insSound.loop = false;
    insSound.pause();
    insSound.play();
  }   
  
  
  // ====================== drag N drop ======================
  
  var answerArr = [];
  var corrCnt = 0;
  var game5_audio = new Audio();
  game5_audio.src = './assets/sounds/game5/bubble.mp3';
  game5_audio.loop = false;
  
  function game5_onDragOver(event){
      event.preventDefault();
  }
  
  function game5_onDragStart(event){
      event
          .dataTransfer.setData('text', event.target.id);
      // var test = document.querySelector('#'+event.target.id).getAttribute('value');
      //     console.log(test);
      game5_audio.pause();
  }
  
  function game5_onDrop(event){
      game5_audio.pause();
      game5_audio.play();
      const id = event.dataTransfer.getData('text');
      const dropZone = event.target;
  
      var draggableElement = document.getElementById(id);
      dropZone.appendChild(draggableElement);
  }