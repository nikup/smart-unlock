var SmartUnlock = SmartUnlock || {};
var canvas;
var context;

window.onload = function () {

    canvas = document.getElementById('smartUnlockCanvas');
    context = canvas.getContext('2d');

    var eventHandler = new SmartUnlock.Events();
    eventHandler.drawScreen();
    canvas.addEventListener("mousedown", eventHandler.startDrag);
    //canvas.addEventListener ("mousemove", drag);
    canvas.addEventListener("mouseup", eventHandler.stopLineDrag);
}