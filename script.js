var SmartUnlock = SmartUnlock || {};
var canvas;
var context;

window.onload = function () {

    canvas = document.getElementById('smartUnlockCanvas');

    context = canvas.getContext('2d')
    var event = new SmartUnlock.Events();
     canvas.addEventListener("mousedown", event.startDrag);
    //canvas.addEventListener ("mousemove", drag);
    canvas.addEventListener("mouseup", event.stopLineDrag);
}