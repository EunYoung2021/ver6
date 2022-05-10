var qMark = document.getElementById('qMark');
qMark.addEventListener("click", function(){
   $('#qMark').css('display', 'none');
   $('.game3_board').css('visibility', 'visible');
   $('#ingameText_game3').css('visibility', 'hidden');
})

// drag N drop
var cnt = 0;
var corrCnt = 0;

function onDragOver_game3(event){
    event.preventDefault(); 
}

function game3_onDragStart(event){
    event
        .dataTransfer
        .setData('text', event.target.id);
}

function onDrop_game3(event){
    const id = event
            .dataTransfer
            .getData('text');

    const dropZone = event.target;
            
    var draggableElement = document.getElementById(id);
    var exElement = $('.game3_qi')[0].childNodes[0];
    // console.log(exElement)
    if(exElement === undefined){
        dropZone.appendChild(draggableElement);
    } else{
        dropZone.appendChild(draggableElement);
    }

    checkAnswer_game3();
    event
    .dataTransfer
    .clearData();

    function checkAnswer_game3(){
        var corrNum;
        var corrNum = dropZone.getAttribute('value');
        // console.log(corrNum);
        var result;
        var getId = dropZone.getAttribute('class');
        var setColorElem = $('.'+getId);
        var choice = $('#'+id).attr('value');
        // console.log(id)
    
        if(corrNum === choice){
            result = 'corr';
            // $('.nextButton').attr('style', 'visibilit: visible');

            var next_button = $("#next");
            next_button.removeClass('disabled');
            next_button.addClass('next');

            var quizContainer = $('.game3_quizContainer');
            quizContainer.css('backgroundImage', 'url("./assets/img/open.png")');
        } else{
            result = 'wrong';
            setTimeout(() => {
               $('#'+id).css('visibility', 'hidden');
            //    setColorElem.css('backgroundColor', 'white'); 
            }, 600);
        }
        // setColorElem.css('backgroundColor', resultColor);
        setTimeout(() => {
            for(var i = 0; i < 4; i++){
                var returnDiv = document.getElementById('game3_aDiv'+(i+1));
                if(returnDiv.children[0] === undefined){
                    // console.log(id);
                    var returnImg = document.querySelector('#'+id);
                    // console.log(returnImg);
                    returnDiv.appendChild(returnImg);
                }
            }
        }, 600);
    }
}

function reset(){
    cnt = 0;
    corrCnt = 0;

    for(var i = 0; i < 3; i++){
        var answerImg = document.getElementById('ai'+(i+1));
        var answerImgDiv = document.getElementById('ad'+(i+1));
        // var color = $('#qi'+(i+1)).css('backgroundColor', 'white');

        answerImg.setAttribute('style', 'visibility: visible')
        answerImgDiv.appendChild(answerImg);
    }
}