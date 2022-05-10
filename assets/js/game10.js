var game10_board = $('#game10_board');
game10_board.css('display', 'none');

var qMark = document.getElementById('game10_qMark');
qMark.addEventListener("click", function(){
    $('#game10_qMark').css('display', 'none');
    $('#game10_board').css('display', 'grid');
    $('#game_10').css('height', '665px');
    $('#ingameText_game10').css('visibility', 'hidden');
})

// 총 문제수
const questionLength_10 = 4;

// 정답의 번호
const customAnswer_10 = 2;

// photos 폴더 내 파일 이름(1번 부터 순서대로, 위의 문제 수 만큼만 읽어들이며 22문제 이상으로 문제를 늘리려면 더 추가할 수 있습니다.)
const photosUrlCustom_10 = [
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
for(let i = 0; i < questionLength_10; i++) {
    numbers.push(i);
}

const $10_board = document.getElementById('game10_board'),
    $10_voice = document.getElementById('game10_voice'),
    $10_audioTag = document.getElementById('game10_audio');

var photosUrl = [];
for(let i = 0; i < questionLength_10; i++) {
    const temp = {id: i + 1, url: "./assets/img/game-10-img/"+photosUrlCustom_10[i]};
    photosUrl.push(temp);
}

const soundsUrls_10  = {
        male: {
            find: '/assets/sounds/game_10/male/find.mp3',
            correct: '/assets/sounds/game_10/male/correct.mp3',
            wrong: '/assets/sounds/game_10/male/wrong.mp3',
            0: '/assets/sounds/game_10/male/1.mp3',
            1: '/assets/sounds/game_10/male/2.mp3',
            2: '/assets/sounds/game_10/male/3.mp3',
            3: '/assets/sounds/game_10/male/4.mp3',
            4: '/assets/sounds/game_10/male/5.mp3',
            5: '/assets/sounds/game_10/male/6.mp3',
            6: '/assets/sounds/game_10/male/7.mp3',
            7: '/assets/sounds/game_10/male/8.mp3',
            8: '/assets/sounds/game_10/male/9.mp3',
            9: '/assets/sounds/game_10/male/10.mp3',
            10: '/assets/sounds/game_10/male/11.mp3',
            11: '/assets/sounds/game_10/male/12.mp3',
            12: '/assets/sounds/game_10/male/13.mp3',
            13: '/assets/sounds/game_10/male/14.mp3',
            14: '/assets/sounds/game_10/male/15.mp3',
            15: '/assets/sounds/game_10/male/16.mp3',
            16: '/assets/sounds/game_10/male/17.mp3',
            17: '/assets/sounds/game_10/male/18.mp3',
            18: '/assets/sounds/game_10/male/19.mp3',
            19: '/assets/sounds/game_10/male/20.mp3',
            20: '/assets/sounds/game_10/male/21.mp3',
            21: '/assets/sounds/game_10/male/22.mp3'
        }
    };

// const playSound_10 = (voice, sound) => {
//     $10_audioTag.src = soundsUrls_10[voice][sound];
//     if($('#gaem10_board'))
//     $10_audioTag.play();

//     if($10_audioTag.play() !== undefined){
//         $10_audioTag.then(_ => {
//             $10_audioTag.pause();
//         })
//         .catch(error => {
//             console.log('error!');
//         })
//     }
// };

// const genderVoice_10 = (voice, sound) => {
//     $10_audioTag.pause();
//     $10_audioTag.currentTime = 0;
//     $10_audioTag.src = soundsUrls_10[voice][sound];
//     $10_audioTag.play();
// }

const playSounds_10 = () => {
    // playSound($voice.value, 'find');
    // playSound_10($10_voice.value, number);
    /* setTimeout(() => {
        playSound($voice.value, number);
    }, 4300) */
    $10_audioTag.load();
    $10_audioTag.play();
}

const selectedAnswer_10 = ($event) => {
    const isLiElement = $event.target.localName === "li";
    if (!isLiElement) { return false; }

    const currentSelectedAnswer = $event.target.dataset.id;
    const correctAnswer = $10_board.dataset.answer;

    const isPlayButton = $event.target.dataset.id === 'play-sound';

    if (isPlayButton) {
        return playSounds_10(correctAnswer);
    }
  
    if (currentSelectedAnswer === correctAnswer) {
        $10_board.classList.add('correct');
        // genderVoice($voice.value, 'correct');

        setTimeout(() => {
            // $board.classList.remove('correct');
            // createLevel();
            document.querySelector('.game10-modal-container').classList.remove('hide');
        }, 700);
        $10_audioTag.pause();

        var next_button = $("#next");
            next_button.removeClass('disabled');
            next_button.addClass('next');

    } else {
        $10_board.classList.add('wrong');
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
            $10_board.classList.remove('wrong');
        }, 1500);
    }
}

const shuffle_10 = (numberArray) => {
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

const createLevel_10 = () => {
    $10_board.innerHTML = '';
    // const random = Math.floor(Math.random() * questionLength);
    const random = customAnswer_10 - 1;
    $10_board.dataset.answer = random;
    // playSounds_10(random);
    const randomNumbers = shuffle_10(numbers);
    
    randomNumbers.forEach((number) => {
        const liElement = document.createElement('li');
        liElement.dataset.id = number;
        liElement.style.backgroundImage = "url(" + `${photosUrl[number].url}` + ")";
        liElement.style.backgroundPosition = "center"
        liElement.style.backgroundSize = "cover"
        $10_board.appendChild(liElement)
    });

    const playButton = document.createElement('li');
    playButton.classList.add('play-sound');
    playButton.dataset.id = 'play-sound';
    $10_board.appendChild(playButton);
}

createLevel_10();
$10_board.addEventListener('click', selectedAnswer_10);