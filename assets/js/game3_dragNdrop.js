var cnt = 0;
var corrCnt = 0;

function onDragOver_game3(event){
    event.preventDefault(); 
} 

function onDragStart_game3(event){
    event
        .dataTransfer
        .setData('text', event.target.id);
}

function onDrop_game3(event){
    const id = event
            .dataTransfer
            .getData('text');

    const dropZone = event.target;
            // console.log('드랍한 곳의 value값 : '+dropZone.getAttribute('value'));
            
    var draggableElement = document.getElementById(id);
    var exElement = $('.quizImg')[0].childNodes[0];
    // console.log(exElement)
    if(exElement === undefined){
        dropZone.appendChild(draggableElement);
    } else{
        dropZone.appendChild(draggableElement);
    }
    // draggableElement.setAttribute('style', 'visibility: hidden');

    checkAnswer();
    event
    .dataTransfer
    .clearData();

    function checkAnswer(){
        var corrNum;
        var corrNum = dropZone.getAttribute('value');
        // console.log(corrNum);
        var result;
        var resultImg;
        var getId = dropZone.getAttribute('class');
        console.log(getId)
        // var setColorElem = $('#'+getId);
        // console.log(setColorElem);

        var setColorElem = document.getElementById(getId);
        console.log(setColorElem);
        
        var choice = $('#'+id).attr('value');
    
        if(corrNum === choice){
            result = 'corr';
            resultImg = 'open';
            ++corrCnt;
        } else{
            result = 'wrong';
            resultImg = 'close';
        }
        // setColorElem.css('backgroundColor', resultColor);
        setColorElem.setAttribute('style', 'background-color: '+resultColor);
        ++cnt;
        // console.log(cnt);

        if(cnt === 3){
            console.log(corrCnt);
            if(corrCnt === 3){
                var next_button = $("#next");
                next_button.removeClass('disabled');
                next_button.addClass('next');
            } else{
                $('.resetButton_game3').css('visibility', 'visible');
            }
        }
    }
}

function reset_game3(){
    cnt = 0;
    corrCnt = 0;

    for(var i = 0; i < 3; i++){
        var answerImg = document.getElementById('ai'+(i+1));
        answerImg.setAttribute('src', './assets/img/game-3-img/a'+(i+1)+'.png')
        var answerImgDiv = document.getElementById('ad'+(i+1));
        $('#qi'+(i+1)).css('background-image', 'url("./assets/img/game-3-img/q'+(i+1)+'.png")');
        $('#qi'+(i+1)).css('background-color', 'white');

        answerImg.setAttribute('style', 'visibility: visible')
        answerImgDiv.appendChild(answerImg);
    }
    $('.resetButton_game3').attr('style', 'visibility: hidden');
}