var catched = 0;
        let ingame = false;
        // 向右邊----------------------------------------------------------
        const moveRight = () => {
            if (parseInt($("#catcher").css("left")) > 1050) {
                $("#catcher").stop(true)
            }
            else {
                $("#catcher").animate({
                    left: `+=10px`,
                }, 1, "linear", function () {
                    moveRight()
                })
            }
        }
        $("#btn-right").mousedown(function () {
            $("#stick").css("transform", "rotate(45deg)")
            if (parseInt($("#catcher").css("top")) <= 0 && ingame == false) {
                moveRight()
            }
        })
        $("#btn-right").mouseup(function () {
            $("#stick").css("transform", "rotate(0deg)")
            if (parseInt($("#catcher").css("top")) <= 0 && ingame == false) {
                $("#catcher").stop(true)
            }
        })
        // 向左邊----------------------------------------------------------
        const moveLeft = () => {
            if (parseInt($("#catcher").css("left")) < 50) {
                $("#catcher").stop(true)
            }
            else {
                $("#catcher").animate({
                    left: `-=10px`
                }, 1, "linear", function () {
                    moveLeft()
                })
            }
        }
        $("#btn-left").mousedown(function () {
            $("#stick").css("transform", "rotate(-45deg)")
            if (parseInt($("#catcher").css("top")) <= 0 && ingame == false) {
                moveLeft()
            }
        })
        $("#btn-left").mouseup(function () {
            $("#stick").css("transform", "rotate(0deg)")
            if (parseInt($("#catcher").css("top")) <= 0 && ingame == false) {
                $("#catcher").stop(true)
            }
        })
        // 牛----------------------------------------------------------
        let ring = 0
        const rand = (num) => {
            return Math.round(Math.random() * num)
        }

        const moveleft = (ring) => {
            $(`#ring${ring}`).animate({
                left: `-=5px`
            }, 1, "swing", function () {
                if (parseInt($(`#ring${ring}`).css("left")) < 220) {
                    $(`#ring${ring}`).stop(true);
                    move(ring)
                }
                else {
                    moveleft(ring)
                }
            })
        }

        const move = (ring) => {
            $(`#ring${ring}`).animate({
                left: `+=5px`
            }, 1, "swing", function () {
                if (parseInt($(`#ring${ring}`).css("left")) > 1000) {
                    $(`#ring${ring}`).stop(true);
                    moveleft(ring)
                }
                else {
                    move(ring)
                }
            })
        }
        function setting(){
            for(var i = 0; i < 13; i++){
                $("#box").append(`<img src="./assets/img/game-7-img/ring.gif" id="ring${ring}">`)
                $(`#ring${ring}`).css({
                    top: "450px",
                    left: `${rand(700) + 300}px`
                })
                let random = rand(1)
                if (random == 0) {
                    move(ring)
                }
                else {
                    moveleft(ring)
                }
                ring++;
            }
            if($('img').length > 10){
                clearInterval();
            }
        }

        // 夾取----------------------------------------------------------
        const moveback = () => {
            if (parseInt($("#catcher").css("left")) < 50) {
                $("#catcher").stop(true)
                $("#left-hook").addClass("leftclip-reverse")
                $("#left-hook").removeClass("leftclip")
                $("#right-hook").addClass("rightclip-reverse")
                $("#right-hook").removeClass("rightclip")
                ingame = false
                incatch = false
            }
            else {
                $("#catcher").animate({
                    left: `-=10px`
                }, 1, "linear", function () {
                    moveback()
                })
            }
        }

        const layup = () => {
            if (parseInt($("#catcher").css("top")) < 0) {
                $("#catcher").stop(true)
                $("#catcher").css("top", "0px")
                incatch = true
                moveback()
            }
            else {
                $("#catcher").animate({
                    top: `-=5px`
                }, 1, "linear", function () {
                    layup()
                })
            }
        }

        const roll = () => {
            if (parseInt($("#catcher").css("top")) == 0) {
                $("#roll").stop(true)
                $("#roll").css("height", "0px")
            }
            else {
                $("#roll").animate({
                    height: "-=5px"
                }, 1, "linear", function () {
                    roll()
                })
            }
        }

        const shippingback = (i) => {
            if (parseInt($("img").eq(i).css("left")) < 30) {
                $("img").eq(i).stop(true)
                $("img").eq(i).attr("src", "./assets/img/game-7-img/fall.gif")
                $("img").eq(i).animate({
                    top: "400px"
                }, 1000, "linear", function () {
                    $("img").eq(i).attr("src", "./assets/img/game-7-img/no.gif")
                    $("img").eq(i).addClass("opcity")
                    setTimeout(() => {
                        for (let i = 0; i < $("img").length; i++) {
                            if ($("img").eq(i).css("top") == "400px") {
                                $("img").eq(i).remove()
                            }
                        }
                    }, 500)
                })
            }
            else {
                $("img").eq(i).animate({
                    left: `-=8px`
                }, 1, "linear", function () {
                    shippingback(i)
                })
            }
        }

        const shipping = (i) => {
            $("img").eq(i).stop(true)
            if (parseInt($("img").eq(i).css("top")) < 120) {
                $("img").eq(i).stop(true)
                shippingback(i)
            }
            else {
                $("img").eq(i).animate({
                    top: `-=5px`
                }, 1, "linear", function () {
                    shipping(i)
                })
            }
        }
        let incatch = false;
        $("#btn-catch").click(function () {
            ingame = true;
            if (parseInt($("#catcher").css("top")) <= 0 && incatch == false) {
                $("#catcher").stop(true)
                $("#roll").animate({
                    height: "250px"
                }, 1000, "linear")
                $("#catcher").animate({
                    top: `250px`
                }, 1000, "linear", function () {
                    $("#left-hook").addClass("leftclip")
                    $("#left-hook").removeClass("leftclip-reverse")
                    $("#right-hook").addClass("rightclip")
                    $("#right-hook").removeClass("rightclip-reverse")
                    incatch = true
                    for (let i = 0; i < $("img").length; i++) {
                        if (
                            (parseInt($("#catcher").css("left")) + 50 < parseInt($("img").eq(i).css("left")) + 75) &&
                            (parseInt($("img").eq(i).css("left")) + 75 < parseInt($("#catcher").css("left")) + 150)
                        ) {
                            $("img").eq(i).stop(true)
                            $("img").eq(i).css("left", `${parseInt($("#catcher").css("left")) - 10}px`)
                            setTimeout(() => {
                                $("img").eq(i).attr("src", "./assets/img/game-7-img/catch.gif")
                                shipping(i);
                                ++catched;
                                console.log(catched);
                            }, 100)
                        }
                    }
                    setTimeout(() => {
                        roll()
                        layup()
                    }, 100)
                })
            }
            else if (($("#catcher").css("top") !== "0px") && incatch == false) {
                incatch = true
                $("#catcher").stop(true)
                $("#roll").stop(true)
                $("#left-hook").addClass("leftclip")
                $("#left-hook").removeClass("leftclip-reverse")
                $("#right-hook").addClass("rightclip")
                $("#right-hook").removeClass("rightclip-reverse")
                setTimeout(() => {
                    layup()
                    roll()
                }, 100)
            }
        })
        // 按鈕行為----------------------------------------------------------
        $(window).keydown(function (event) {
            switch (event.keyCode) {
                case 39: $("#btn-right").mousedown();
                    break;
                case 37: $("#btn-left").mousedown()
                    break;
            }
        })
        $(window).keyup(function (event) {
            switch (event.keyCode) {
                case 39: $("#btn-right").mouseup();
                    break;
                case 37: $("#btn-left").mouseup();
                    break;
            }
        })
        $(window).keydown(function (event) {
            if (event.keyCode == 32) {
                $("#btn-catch").click();
                $("#btn-catch").css("background-size", "190px 190px")
                setTimeout(() => {
                    $("#btn-catch").css("background-size", "200px 200px")
                }, 100)
            }
        })


/* modal */
    function closeModal_game7(){
        $('#game7_modal').css('visibility', 'hidden');
    }