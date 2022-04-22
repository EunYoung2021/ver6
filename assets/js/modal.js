var answer = 2;

$('.closeBtn').on('click', function(){
    $('.modal').css('display', 'none');
});


function checkAnswer(num){
    var result;
    var resultImg = $('.resultImg');
    if(num === answer){
        result = 'corr';
        for(var i = 0; i < $('.optionsContainer').children().length; i++){
            $('.option'+(i+1)).removeAttr('onclick');
            $('.option'+(i+1)).css('pointer-events', 'none');

            $('#game_1_Modal').css('display', 'block');
            $('#game_1_Modal').fadeIn(800);
            $('.modal').css('display', 'none');

            var next_button = $("#next");
            next_button.removeClass('disabled');
            next_button.addClass('next');
        }
    } else{
        result = 'wrong';
    }
    console.log(result)
    resultImg.attr('style',"background-image: url('./assets/img/"+result+".png')");
    // resultImg.css('backgroundColor','black')
    resultImg.fadeIn(800);

    // 지도이미지까지 띄웠을 때 넥스트 버튼 활성화할 것
}