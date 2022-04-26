var game9_board = $('#game9_board');
game9_board.css('display', 'none');

var qMark = document.getElementById('game9_qMark');
qMark.addEventListener("click", function(){
    $('#game9_qMark').css('display', 'none');
    $('#game9_board').css('display', 'grid');
    $('#game_9').css('height', '665px');
    $('#ingameText_game9').css('visibility', 'hidden');
})

// 총 문제수
const questionLength_9 = 4;

// 정답의 번호
const customAnswer_9 = 3;

// photos 폴더 내 파일 이름(1번 부터 순서대로, 위의 문제 수 만큼만 읽어들이며 22문제 이상으로 문제를 늘리려면 더 추가할 수 있습니다.)
const photosUrlCustom_9 = [
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8,jpg",
    "9.jpeg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.png",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg"
]

var numbers = [];
for(let i = 0; i < questionLength_9; i++) {
    numbers.push(i);
}

const $9_board = document.getElementById('game9_board'),
    $9_voice = document.getElementById('game9_voice'),
    $9_audioTag = document.getElementById('game9_audio');

var photosUrl = [];
for(let i = 0; i < questionLength_9; i++) {
    const temp = {id: i + 1, url: "./assets/img/game-9-img/"+photosUrlCustom_9[i]};
    photosUrl.push(temp);
}

const soundsUrls  = {
        male: {
            find: '/assets/sounds/game_9/male/find.MP3',
            correct: '/assets/sounds/game_9/male/correct.MP3',
            wrong: '/assets/sounds/game_9/male/wrong.MP3',
            0: '/assets/sounds/game_9/male/1.MP3',
            1: '/assets/sounds/game_9/male/2.MP3',
            2: '/assets/sounds/game_9/male/3.MP3',
            3: '/assets/sounds/game_9/male/4.MP3',
            4: '/assets/sounds/game_9/male/5.MP3',
            5: '/assets/sounds/game_9/male/6.MP3',
            6: '/assets/sounds/game_9/male/7.MP3',
            7: '/assets/sounds/game_9/male/8.MP3',
            8: '/assets/sounds/game_9/male/9.MP3',
            9: '/assets/sounds/game_9/male/10.MP3',
            10: '/assets/sounds/game_9/male/11.MP3',
            11: '/assets/sounds/game_9/male/12.MP3',
            12: '/assets/sounds/game_9/male/13.MP3',
            13: '/assets/sounds/game_9/male/14.MP3',
            14: '/assets/sounds/game_9/male/15.MP3',
            15: '/assets/sounds/game_9/male/16.MP3',
            16: '/assets/sounds/game_9/male/17.MP3',
            17: '/assets/sounds/game_9/male/18.MP3',
            18: '/assets/sounds/game_9/male/19.MP3',
            19: '/assets/sounds/game_9/male/20.MP3',
            20: '/assets/sounds/game_9/male/21.MP3',
            21: '/assets/sounds/game_9/male/22.MP3'
        },
        female: {
            find: '/assets/sounds/game_9/female/find.MP3',
            correct: '/assets/sounds/game_9/female/correct.MP3',
            wrong: '/assets/sounds/game_9/female/wrong.MP3',
            0: '/assets/sounds/game_9/female/1.MP3',
            1: '/assets/sounds/game_9/female/2.MP3',
            2: '/assets/sounds/game_9/female/3.MP3',
            3: '/assets/sounds/game_9/female/4.MP3',
            4: '/assets/sounds/game_9/female/5.MP3',
            5: '/assets/sounds/game_9/female/6.MP3',
            6: '/assets/sounds/game_9/female/7.MP3',
            7: '/assets/sounds/game_9/female/8.MP3',
            8: '/assets/sounds/game_9/female/9.MP3',
            9: '/assets/sounds/game_9/female/10.MP3',
            10: '/assets/sounds/game_9/female/11.MP3',
            11: '/assets/sounds/game_9/female/12.MP3',
            12: '/assets/sounds/game_9/female/13.MP3',
            13: '/assets/sounds/game_9/female/14.MP3',
            14: '/assets/sounds/game_9/female/15.MP3',
            15: '/assets/sounds/game_9/female/16.MP3',
            16: '/assets/sounds/game_9/female/17.MP3',
            17: '/assets/sounds/game_9/female/18.MP3',
            18: '/assets/sounds/game_9/female/19.MP3',
            19: '/assets/sounds/game_9/female/20.MP3',
            20: '/assets/sounds/game_9/female/21.MP3',
            21: '/assets/sounds/game_9/female/22.MP3'
        }   
    };

const playSound_game9 = (voice, sound) => {
    $9_audioTag.src = soundsUrls[voice][sound];
    $9_audioTag.play();
};

const genderVoice_game9 = (voice, sound) => {
    $9_audioTag.src = soundsUrls[voice][sound];
    $9_audioTag.play();
}

const playSounds_game9 = (number) => {
    // playSound($voice.value, 'find');
    playSound_game9($9_voice.value, number);
    /* setTimeout(() => {
        playSound($voice.value, number);
    }, 4300) */
}

const selectedAnswer = ($event) => {
    const isLiElement = $event.target.localName === "li";
    if (!isLiElement) { return false; }

    const currentSelectedAnswer = $event.target.dataset.id;
    const correctAnswer = $9_board.dataset.answer;

    const isPlayButton = $event.target.dataset.id === 'play-sound';

    if (isPlayButton) {
        return playSounds_game9(correctAnswer);
    }
  
    if (currentSelectedAnswer === correctAnswer) {
        $9_board.classList.add('correct');
        // genderVoice($voice.value, 'correct');

        setTimeout(() => {
            // $board.classList.remove('correct');
            // createLevel();
            document.querySelector('.game9-modal-container').classList.remove('hide');
        }, 700);
        $9_audioTag.pause();

        var next_button = $("#next");
            next_button.removeClass('disabled');
            next_button.addClass('next');


    } else {
        $9_board.classList.add('wrong');
        // genderVoice($voice.value, 'wrong');

        // setTimeout(() => {
        //     playSound($voice.value, currentSelectedAnswer);
        // }, 3500);

        // setTimeout(() => {
        //     playSound($voice.value, 'find');
        // }, 5500);

        // setTimeout(() => {
        //     playSound($voice.value, correctAnswer);
        // }, 10000);

        setTimeout(() => {
            $9_board.classList.remove('wrong');
        }, 1500);
    }
}

const shuffle_game9 = (numberArray) => {
    let counter = numberArray.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = numberArray[counter];
        numberArray[counter] = numberArray[index];
        numberArray[index] = temp;
    }
    return numberArray;
} 

const createLevel = () => {
    $9_board.innerHTML = '';
    // const random = Math.floor(Math.random() * questionLength);
    const random = customAnswer_9 - 1;
    $9_board.dataset.answer = random;
    // playSounds(random);
    const randomNumbers = shuffle_game9(numbers);
    
    randomNumbers.forEach((number) => {
        const liElement = document.createElement('li');
        liElement.dataset.id = number;
        liElement.style.backgroundImage = "url(" + `${photosUrl[number].url}` + ")";
        liElement.style.backgroundPosition = "center"
        liElement.style.backgroundSize = "cover"
        $9_board.appendChild(liElement)
    });

    const playButton = document.createElement('li');
    playButton.classList.add('play-sound');
    playButton.dataset.id = 'play-sound';
    $9_board.appendChild(playButton);
}

createLevel();
$9_board.addEventListener('click', selectedAnswer);