var imagePuzzle = {
    stepCount: 0,
    startTime: new Date().getTime(),
    startGame: function (game10_Reimages, gridSize) {
        $('#playPanel').show();
        this.setImage(game10_Reimages, gridSize);
        $('#sortable').randomize();
        this.enableSwapping('#sortable li');
        this.stepCount = 0;
        this.startTime = new Date().getTime();
        this.tick();
    },
    tick: function () {
        var now = new Date().getTime();
        var elapsedTime = parseInt((now - imagePuzzle.startTime) / 1000, 10);
        $('#timerPanel').text(elapsedTime);
        timerFunction = setTimeout(imagePuzzle.tick, 1000);
    },
    enableSwapping: function (elem) {
        $(elem).on('mousedown', function (e) {
            scrollDisable();
        })
        $(elem).on('mouseup', function (e) {
            scrollAble();
        })
        $(elem).draggable({
            snap: '#droppable',
            snapMode: 'outer',
            revert: "invalid",
            helper: "clone"
        });
        $(elem).droppable({
            drop: function (event, ui) {
                var $dragElem = $(ui.draggable).clone().replaceAll(this);
                $(this).replaceAll(ui.draggable);

                currentList = $('#sortable > li').map(function (i, el) { return $(el).attr('data-value'); });
                if (isSorted(currentList)){
                    $('#actualImageBox').empty().html($('#gameOver').html());
                    alert('축하합니다! 이미지퍼즐의 방을 클리어하셨습니다. \n 잠시 후 다음 방으로 이동합니다!');
                    let current_page = parseInt(document.getElementById('current-page').innerText);
                    if(current_page + 1 === 22){
                        sections[current_page-1].addClass("hidden");
                        sections[current_page].removeClass("hidden");
                        console.log(sections[current_page])
                        document.getElementById('current-page').innerText = current_page+1;
                        $('.navigation-container').attr('style', 'display:block');
                    }
                }
                else {
                    var now = new Date().getTime();
                    imagePuzzle.stepCount++;
                    $('.stepCount').text(imagePuzzle.stepCount);
                    $('.timeCount').text(parseInt((now - imagePuzzle.startTime) / 1000, 10));
                }

                imagePuzzle.enableSwapping(this);
                imagePuzzle.enableSwapping($dragElem);
            }
        });
    },

    setImage: function (game10_Reimages, gridSize) {
        const sortableElem = document.querySelector('#sortable');
        gridSize = gridSize || 4; // If gridSize is null or not passed, default it as 4.
        var percentage = 100 / (gridSize - 1);
        var image = game10_Reimages[Math.floor(Math.random() * game10_Reimages.length)];
        $('#imgTitle').html(image.title);
        $('#actualImage').attr('src', image.src);
        $('#sortable').empty();
        for (var i = 0; i < gridSize * gridSize; i++) {
            var xpos = (percentage * (i % gridSize)) + '%';
            var ypos = (percentage * Math.floor(i / gridSize)) + '%';
            var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
                'background-image': 'url(' + image.src + ')',
                'background-size': (gridSize * 100) + '%',
                'background-position': xpos + ' ' + ypos,
                'width': (sortableElem.offsetWidth - 5) / gridSize,
                'height': (sortableElem.offsetWidth - 5) / gridSize
            });
            $('#sortable').append(li);
        }
        $('#sortable').randomize();
    }
};

var game10_Reimages = [

    { src: './assets/img/game10/1.jpg', title: '1' },
    { src: './assets/img/game10/2.jpg', title: '2' },
    { src: './assets/img/game10/3.jpg', title: '3' },
    { src: './assets/img/game10/4.jpg', title: '4' },
    { src: './assets/img/game10/5.jpg', title: '5' },
    { src: './assets/img/game10/6.jpg', title: '6' },
    { src: './assets/img/game10/7.jpg', title: '7' },
    { src: './assets/img/game10/8.jpg', title: '8' },
    { src: './assets/img/game10/9.jpg', title: '9' },
    { src: './assets/img/game10/10.jpg', title: '10' },
    { src: './assets/img/game10/11.jpg', title: '11' },
    { src: './assets/img/game10/12.jpg', title: '12' },
    { src: './assets/img/game10/13.jpg', title: '13' },
    { src: './assets/img/game10/14.jpg', title: '14' },
    { src: './assets/img/game10/15.jpg', title: '15' },
    { src: './assets/img/game10/16.jpg', title: '16' },
    { src: './assets/img/game10/17.jpg', title: '17' },
    { src: './assets/img/game10/18.jpg', title: '18' },
    { src: './assets/img/game10/19.jpg', title: '19' },
    { src: './assets/img/game10/20.jpg', title: '20' },
    { src: './assets/img/game10/21.jpg', title: '21' },
    { src: './assets/img/game10/22.jpg', title: '22' },
    { src: './assets/img/game10/23.jpg', title: '23' },
    { src: './assets/img/game10/25.jpg', title: '25' },				
];
    $('#newPhoto').click(function () {
        let num = [3, 4, 5];
        let random = Math.floor(Math.random() * num.length);
        imagePuzzle.startGame(game10_Reimages, num[random]);
    });

function rules() {
    alert('Re arrange the image parts in a way that it correctly forms the picture. \nThe no. of steps taken will be counted.');
}
function about() {
    alert('Developed by Anurag Gandhi. \nHe can be contacted at: viola1k@empas.com');
}

var timerFunction;


function isSorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] != i)
            return false;
    }
    return true;
}

$.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function () {
        $(this).children(selector).sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });
    return this;
};

