var cnt = 0;
var corrCnt = 0;

var game5Board = $('.game5_board');
game5Board.css('visibility', 'hidden');

var qMark = document.getElementById('game5_qMark');
qMark.addEventListener("click", function(){
    $('#game5_qMark').css('display', 'none');
    $('.game5_board').css('visibility', 'visible');
    $('#ingameText_game5').css('visibility', 'hidden');
})

function onDragOver_game5(event){
    event.preventDefault(); 
}

function onDragStart_game5(event){
    event
        .dataTransfer
        .setData('text', event.target.id);
}

function onDrop_game5(event){
    const id = event
            .dataTransfer
            .getData('text');

    const dropZone = event.target;
            
    var draggableElement = document.getElementById(id);
    var exElement = $('.game5_qi')[0].childNodes[0];
    console.log(exElement)
    if(exElement === undefined){
        dropZone.appendChild(draggableElement);
    } else{
        dropZone.appendChild(draggableElement);
    }

    checkAnswer_game5();
    event
    .dataTransfer
    .clearData();

    function checkAnswer_game5(){
        var corrNum;
        var corrNum = dropZone.getAttribute('value');
        // console.log(corrNum);
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

            var quizContainer = $('.game5_quizContainer');
            quizContainer.attr('style', 'background-image: url("./assets/img/open.png")');

        } else{
            result = 'wrong';
            // resultColor = 'red';
            // setTimeout(() => {
            //    $('#'+id).remove();
            //    setColorElem.css('backgroundColor', 'white'); 
            // }, 600);
        }
        setTimeout(() => {
            for(var i = 0; i < 4; i++){
                var returnDiv = document.getElementById('game5_aDiv'+(i+1));
                if(returnDiv.children[0] === undefined){
                    var returnImg = document.getElementById(id);
                    returnDiv.appendChild(returnImg);
                }
            }
        }, 600);
        // setColorElem.css('backgroundColor', resultColor);
    }
}

// function reset(){
//     cnt = 0;
//     corrCnt = 0;

//     for(var i = 0; i < 3; i++){
//         var answerImg = document.getElementById('game5_ai'+(i+1));
//         var answerImgDiv = document.getElementById('ad'+(i+1));
//         var color = $('#qi'+(i+1)).css('backgroundColor', 'white');

//         answerImg.setAttribute('style', 'visibility: visible')
//         answerImgDiv.appendChild(answerImg);
//     }
//     $('.resetButton').attr('style', 'visibility: hidden');
// }