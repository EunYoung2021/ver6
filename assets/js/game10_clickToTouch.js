// mouse to touch event
// (function() {
    var isTouch = false;
    var simulated_flag = 'handler_simulated';
    var touch_click_array = {};
    const clickMoveThreshold = 20; //Pixels
   
    function mouseHandler(event) {
     if (isTouch) {
      if (!event.hasOwnProperty(simulated_flag)) {
       //Unreliable mouse commands - In my opinion
       var fixed = new jQuery.Event(event);
       console.log(fixed);
       fixed.preventDefault();
       fixed.stopPropagation();
       }
      } else {
      //Mouse commands are consistent
      //TODO: generate corresponding touches
     }
    }
   
    function mouseFromTouch(type, touch) {
     var event = document.createEvent("MouseEvent");
     event.initMouseEvent(type, true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY
     , false, false, false, false, 0, null);
     event[simulated_flag] = true;
   
     touch.target.dispatchEvent(event);
    };
   
    function touchHandler(event) {
     var touches = event.changedTouches
     ,first = touches[0]
     ,type = ""
   
     if (!event.hasOwnProperty(simulated_flag)) {
      isTouch = true;
   
      //Simulate mouse commands
      switch (event.type) {
      case "touchstart":
       for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        touch_click_array[touch.identifier] = { x: touch.screenX, y: touch.screenY };
       }
       mouseFromTouch("mousedown", first);
       break;
      case "touchmove":
       for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        var id = touch.identifier;
        var data = touch_click_array[id];
        if (data !== undefined) {
         if (Math.abs(data.x - touch.screenX) + Math.abs(data.y - touch.screenY) > clickMoveThreshold) {
          delete touch_click_array[id];
         }
        }
       }
       mouseFromTouch("mousemove", first);
       break;
      case "touchcancel":
       //Not sure what should happen here . . .
       break;
      case "touchend":
       mouseFromTouch("mouseup", first);
       for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        if (touch_click_array.hasOwnProperty(touch.identifier)) {
         mouseFromTouch("click", touch);
         delete touch_click_array[touch.identifier];
        }
       }
       break;
      }
     }
    }
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    myCanvas.addEventListener('touchstart', draw.start, false);
    myCanvas.addEventListener('touchend', draw.end, false);
    myCanvas.addEventListener('touchmove', draw.move, false);
    document.addEventListener("mousedown", mouseHandler, true);
     document.addEventListener("mousemove", mouseHandler, true);
    document.addEventListener("mouseup", mouseHandler, true);
    document.addEventListener("click", mouseHandler, true);
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
}
// })();

function scrollDisable(){
    $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
}
function scrollAble(){
    $('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
}