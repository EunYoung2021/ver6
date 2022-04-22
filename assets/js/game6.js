var cnt = 0;
var corrCnt = 0;

var game6board = $('.game6_board');
game6board.css('display', 'none');

var qMark = document.getElementById('game6_qMark');
qMark.addEventListener("click", function(){
    $('#game6_qMark').css('display', 'none');
    $('.game6_board').css('display', 'block');
})

function onDragOver(event){
    event.preventDefault(); 
}

function onDragStart(event){
    event
        .dataTransfer
        .setData('text', event.target.id);
}

function onDrop(event){
    const id = event
            .dataTransfer
            .getData('text');

    const dropZone = event.target;
            
    var draggableElement = document.getElementById(id);
    var exElement = $('.game6_qi')[0].childNodes[0];
    console.log(exElement)
    if(exElement === undefined){
        dropZone.appendChild(draggableElement);
    } else{
        dropZone.appendChild(draggableElement);
    }

    checkAnswer();
    event
    .dataTransfer
    .clearData();

    function checkAnswer(){
        var corrNum;
        var corrNum = dropZone.getAttribute('value');
        console.log(corrNum);
        var result;
        // var resultColor;
        var getId = dropZone.getAttribute('class');
        var setColorElem = $('.'+getId);
        var choice = $('#'+id).attr('value');
        console.log(id)
    
        if(corrNum === choice){
            result = 'corr';
            // resultColor = 'green';
            var next_button = $("#next");
            next_button.removeClass('disabled');
            next_button.addClass('next');

            var quizContainer = $('.game6_quizContainer');
            quizContainer.attr('style', 'background-image: url("./assets/img/open.png")');
        } else{
            result = 'wrong';
            // resultColor = 'red';
        }
        setTimeout(() => {
            for(var i = 0; i < 6; i++){
                var returnDiv = document.getElementById('game6_aDiv'+(i+1));
                // console.log(returnDiv)
                if(returnDiv.children[0] === undefined){
                    var returnImg = document.getElementById(id);
                    console.log(returnImg);
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
        var answerImg = document.getElementById('game6_ai'+(i+1));
        var answerImgDiv = document.getElementById('ad'+(i+1));
        var color = $('.game6_qi'+(i+1)).css('backgroundColor', 'white');

        answerImg.setAttribute('style', 'visibility: visible')
        answerImgDiv.appendChild(answerImg);
    }
    $('.resetButton').attr('style', 'visibility: hidden');
}