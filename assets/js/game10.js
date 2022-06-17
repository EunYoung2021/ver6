var game10_images = [

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
    { src: './assets/img/game10/24.jpg', title: '24' },
    { src: './assets/img/game10/25.jpg', title: '25' },				
    ];


    window.onload = function () {
        var gridSize = $('#levelPanel :radio:checked').val();
        imagePuzzle.startGame(game10_images, gridSize);
        $('#newPhoto').click(function () {
            var gridSize = $('#levelPanel :radio:checked').val();  // Take the updated gridSize from UI.
            imagePuzzle.startGame(game10_images, gridSize);
        });
    
        $('#levelPanel :radio').change(function (e) {
            var gridSize = $(this).val();
            imagePuzzle.startGame(game10_images, gridSize);
        });
    };
    function rules() {
        alert('Re arrange the image parts in a way that it correctly forms the picture. \nThe no. of steps taken will be counted.');
    }
    function about() {
        alert('Developed by Anurag Gandhi. \nHe can be contacted at: viola1k@empas.com');
    }