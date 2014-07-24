var SmartUnlock = SmartUnlock || {};
var canvas;
var context;

window.onload = function () {

    canvas = document.getElementById('smartUnlockCanvas');
    context = canvas.getContext('2d');

    var eventHandler = new SmartUnlock.Events();
    eventHandler.drawScreen();
    canvas.addEventListener("mousedown", eventHandler.startDrag);
    canvas.addEventListener ("mousemove", eventHandler.drag);
    canvas.addEventListener("mouseup", eventHandler.stopLineDrag);

    function relMouseCoords(event){
	    var totalOffsetX = 0;
	    var totalOffsetY = 0;
	    var canvasX = 0;
	    var canvasY = 0;
	    var currentElement = this;

	    do{
	        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
	        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
	    }
	    while(currentElement = currentElement.offsetParent)

	    canvasX = event.pageX - totalOffsetX;
	    canvasY = event.pageY - totalOffsetY;

	    return {x:canvasX, y:canvasY}
	}
	HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
}