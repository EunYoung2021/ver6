let game4_mission = [
    ['다음 중 건반악기를 골라주세요.', ['piano']],
  ['다음 중 플루트를 골라주세요.', ['flute']],
  ['다음 중 호른을 골라주세요.', ['horn']],
  ['다음 중 오보에를 골라주세요.', ['oboe']],
  ['다음 중 트럼본을 골라주세요.', ['trombone']],
    ['다음 중 트럼펫을 골라주세요.', ['trumpet']],
    ['다음 중 튜바를 골라주세요.', ['tuba']],
    ['다음 중 바이올린을 골라주세요.', ['violin1']],
    ['다음 중 바순을 골라주세요.', ['bassoon']],
    ['다음 중 첼로를 골라주세요.', ['cello']],
    ['다음 중 클라리넷을 골라주세요.', ['clarinet']],	
    ['다음 중 목관악기를 골라주세요.', ['oboe', 'clarinet', 'bassoon', 'flute']],	
    ['다음 중 금관악기를 골라주세요.', ['trumpet', 'trombone', 'horn', 'tuba']],		
    ['다음 중 타악기를 골라주세요.', ['cabasa', 'castanets','chime', 'cymbals', 'drum', 'gong', 'snare']],
    ['다음 중 현악기를 골라주세요.', ['cello', 'contrabass', 'viola', 'violin1', 'violin2']],
    ['다음 중 현악 4중주를 구성하는 악기를 골라주세요.', ['cello', 'viola', 'violin1', 'violin2']],
    ['다음 중 피아노트리오를 골라주세요.', ['piano', 'violin1', 'cello']],		
    ['다음 중 피아노 5중주를 구성하는 악기를 골라주세요.', ['cello', 'viola', 'violin1', 'violin2', 'piano']],	
    ['다음 중 목관 5중주를 구성하는 악기를 골라주세요.', ['oboe', 'clarinet', 'bassoon', 'flute', 'horn']],	
  ];
  
  let game4_imgList = ['bassoon', 'cabasa', 'castanets', 'cello', 'chime', 'clarinet', 'contrabass',
  'cymbals', 'drum', 'flute', 'gong', 'horn', 'oboe', 'piano', 'snare', 'trombone', 'trumpet', 'tuba', 'viola', 'violin1', 'violin2'];
  
  var score = 0;

    game4_setMission();
    game4_setImg();

  
  // 문제 생성 - Mission & 정답란 생성 >> miisionArea & answerArea Settings
  function game4_setMission(){
    // 랜덤 Mission생성
    var missionText = document.getElementById('game4_missionArea');
    var ranNum = Math.floor(Math.random() * game4_mission.length);
  
    missionText.setAttribute('value', ranNum);
    missionText.innerText = game4_mission[ranNum][0];
  }
  
  function game4_setImg(){
    arrShuffle(game4_imgList);
    game4_setImgs();    
    function arrShuffle(arr){
        arr.sort(() => Math.random() - 0.5);
    }
  
    // 드래그할 이미지 순서 랜덤으로 만들기
  
    function game4_setImgs(){
        var imgArea = document.getElementById('game4_imgArea');
  
        var missionN = document.getElementById('game4_missionArea').getAttribute('value');
  
        for(var i = 0; i < game4_imgList.length; i++){
            //img태그
            var imgTag = document.createElement('img');
            imgTag.setAttribute('id', 'game4_dragImg' + (i+1));
            imgTag.className = 'game4_dragImg' + (i+1);
            imgTag.src = './assets/img/game4/'+game4_imgList[i]+'.png';
            imgTag.setAttribute('value', game4_imgList[i]);
            imgTag.setAttribute('draggable', 'true');
            imgTag.setAttribute('ondragstart', 'game4_onDragStart(event)');
  
            imgTag.setAttribute('onclick', 'playInsSound("'+game4_imgList[i]+'")');
  
            var setImgDiv = document.createElement('div');
            setImgDiv.className = 'game4_dragImgDiv'+(i+1);
  
            setImgDiv.appendChild(imgTag);
            imgArea.appendChild(setImgDiv);
        }
        if(missionN === "16" || missionN === "7"){
            var violinImg = $('img[value=violin2]').attr("id");
            document.getElementById(violinImg).parentNode.setAttribute('style', 'display:none');   
        }
    }
  }
  
  // 정답체크 & 다음 문제로 넘어가기
  function game4_checkAnswer(){
   var answerArea = document.getElementById('game4_answerArea');
   var answerCnt = document.getElementById('game4_missionArea').getAttribute('value');
  
    var answerArea = document.getElementById('game4_answerArea');
    for(var i = 0; i < answerArea.childElementCount; i++){
        var answerImgValue = answerArea.childNodes[i];
        answerArr.push(answerImgValue.getAttribute('value'));
        answerArr.sort();
    }
    game4_mission[answerCnt][1].sort();
    // 정답배열과 유저가 입력한 답의 배열의 요소를 비교하는 for문
    for(var i = 0; i < game4_mission[answerCnt][1].length; i++){
        if(game4_mission[answerCnt][1][i] === answerArr[i]){
            corrCnt += 1;
            console.log(corrCnt);
        }
    }
    if(corrCnt === game4_mission[answerCnt][1].length){
        score += 1;
        if(score === 2){
            alert('축하합니다, 모든 퀴즈를 다 푸셨습니다. \n 잠시 후 다음 방으로 이동합니다!');
            
            let current_page = parseInt(document.getElementById('current-page').innerText);
            console.log(current_page);
            if(current_page + 1 === 8){
                sections[current_page-1].addClass("hidden");
                sections[current_page].removeClass("hidden");
                console.log(sections[current_page])
                document.getElementById('current-page').innerText = current_page+1;
            }

            var btn = document.getElementById('game4_check');
            btn.setAttribute('style', 'background-color: gray');
            btn.setAttribute('onclick', '');
        } else{
            alert('정답입니다!');
            game4_reset();
            console.log(score);
        }
    } else{
        alert('오답입니다..');
        game4_reset();
    }
    answerArr = [];
    corrCnt = 0;
  }
  
  function game4_reset(){
    var answerArea = document.getElementById('game4_answerArea');
    var imgArea = document.getElementById('game4_imgArea');
  
    while(answerArea.hasChildNodes()){
        answerArea.removeChild(answerArea.firstChild);
    }
    while(imgArea.hasChildNodes()){
        imgArea.removeChild(imgArea.firstChild);
    }
    game4_setMission();
    game4_setImg();
  }
  
  function playInsSound(insName){
    var insSound = new Audio();
    insSound.src = './assets/sounds/game4/'+insName+'.mp3';
    insSound.loop = false;
    insSound.pause();
    insSound.play();
  }   
  
  
  // ====================== drag N drop ======================
  
  var answerArr = [];
  var corrCnt = 0;
  var game4_audio = new Audio();
  game4_audio.src = './assets/sounds/game4/bubble.mp3';
  game4_audio.loop = false;
  
  function game4_onDragOver(event){
      event.preventDefault();
  }
  
  function game4_onDragStart(event){
      event
          .dataTransfer.setData('text', event.target.id);
      // var test = document.querySelector('#'+event.target.id).getAttribute('value');
      //     console.log(test);
      game4_audio.pause();
  }
  
  function game4_onDrop(event){
      game4_audio.pause();
      game4_audio.play();
      const id = event.dataTransfer.getData('text');
      const dropZone = event.target;
  
      var draggableElement = document.getElementById(id);
      dropZone.appendChild(draggableElement);
  }