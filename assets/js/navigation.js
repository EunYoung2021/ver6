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
            if(i === 20){
                console.log(i);
            }
        } else {
            sections[i].addClass("hidden");
        }
    }
    current_page++;
    if (current_page === 24) {
        next_button.addClass("disabled");
        next_button.removeClass("next");
    }
    //  else if(current_page === 3){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 5){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 7){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 9){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 11){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 13){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 15){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 17){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 19){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 21){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
    //  else if(current_page === 23){
    //     console.log(current_page);
    //     next_button.addClass('disabled');
    //     next_button.removeClass('next');
    // } 
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

function playSound(sound){
    var backGroundMusic = document.getElementById('backGroundMusic');
    backGroundMusic.volume = .25;
    if(backGroundMusic.paused){
        backGroundMusic.play();
        // document.getElementById("music-stop").style.visibility = "visible";
    } else{
        backGroundMusic.pause();
        // document.getElementById('music-stop').style.visibility = "hidden";
    }
}