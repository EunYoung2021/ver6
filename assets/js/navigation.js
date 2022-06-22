var next_button = $("#next");
var prev_button = $("#prev");
var sections = [
    $('#title_sequence'),
    $('#story_link_1'),
    $('#game-1'),
    $('#story_link_2'),
    $('#game_2'),
    $('#story_link_3'),
    $('#game_3'),
    $('#story_link_4'),
    $('#game_4'),
    $('#story_link_5'),
    $('#game_5'),
    $('#story_link_6'),
    $('#game_6'),
    $('#story_link_7'),
    $('#game_7'),
    $('#story_link_8'),
    $('#game_8'),
    $('#story_link_9'),
    $('#game_9'),
    $('#story_link_10'),
    $('#game_10'),
    $('#story_link_11'),
    $('#game_11'),
    $('#ending_sequence')
];

$(next_button).click(function () {
    let current_page = parseInt(document.getElementById('current-page').innerText);
    for (let i = 0; i < 24; i++) {
        if (i + 1 === current_page + 1) {
            sections[i].removeClass("hidden");
        } else {
            sections[i].addClass("hidden");
        }
    }
    current_page++;

    if (current_page === 24) {
        $('.navigation-container').attr('style', 'display:none');
    }
    else if(current_page === 3){
        //  $('.navigation-container').attr('style', 'display:none');
    }
    else if(current_page === 5){
        //  $('.navigation-container').attr('style', 'display:none');
    } 
    else if(current_page === 7){
        // $('.navigation-container').attr('style', 'display:none');
    } 
    else if(current_page === 9){
        // $('.navigation-container').attr('style', 'display:none');
    } 
    else if(current_page === 11){
        //  $('.navigation-container').attr('style', 'display:none');
    } 
    else if(current_page === 13){
        //  $('.navigation-container').attr('style', 'display:none');
    } 
    else if(current_page === 15){
        //  $('.navigation-container').attr('style', 'display:none');
    } 
    else if(current_page === 17){
        //  $('.navigation-container').attr('style', 'display:none');
    } 
    else if(current_page === 19){
        //  $('.navigation-container').attr('style', 'display:none');
    } 
    else if(current_page === 21){
         $('.navigation-container').attr('style', 'display:none');
        // stopTimer();
        
        let num = [3, 4, 5];
        let random = Math.floor(Math.random() * num.length);
        imagePuzzle.startGame(game10_Reimages, num[random]);
    } 
    else if(current_page === 23){
        $('.navigation-container').attr('style', 'display:none');
        timer();
    } 
    // else if (current_page === 5) {
    //     console.log(current_page)
    //     /* https://stackoverflow.com/questions/1227286/get-class-list-for-element-with-jquery */
    //     let classList = document.getElementById('game-2-congratulations').className.split(/\s+/);
    //     console.log(classList)
    //     for (let i = 0; i < classList.length; i++) {
    //         if (classList[i] === 'hidden') {
    //             console.log("im here")
    //             next_button.addClass("disabled");
    //             next_button.removeClass("next");
    //         }
    //     }
    // }
    else {
        prev_button.removeClass("disabled");
        prev_button.addClass("previous");
    }
    document.getElementById('current-page').innerText = current_page;
});

$(prev_button).click(function () {
    let current_page = parseInt(document.getElementById('current-page').innerText);
    for (let i = 0; i < 11; i++) {
        if (i + 1 === current_page - 1) {
            sections[i].removeClass("hidden");
        } else {
            sections[i].addClass("hidden");
        }
    }
    current_page--;
    if (current_page === 1) {
        prev_button.addClass("disabled");
        prev_button.removeClass("previous");
    } else {
        next_button.removeClass("disabled");
        next_button.addClass("next");
    }
    document.getElementById('current-page').innerText = current_page;
});

function playSound(){
    var backGroundMusic = document.getElementById('backGroundMusic');
    backGroundMusic.volume = .5;
    backGroundMusic.src = "./assets/music/harry_potter_theme.mp3";
    if(backGroundMusic.paused){
        backGroundMusic.play();
        // document.getElementById("music-stop").style.visibility = "visible";
    } else{
        backGroundMusic.pause();
        // document.getElementById('music-stop').style.visibility = "hidden";
    }
}