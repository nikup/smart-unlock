var SmartUnlock = SmartUnlock || {};
SmartUnlock.Events = function () {
    var dragData = null,
        dragging = false,
        currentScreen = "home",
        screens = {
            "home": {
                "image": "",
                "buttons": [
                {
                    "screen": "off",
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "heigth": 0,
                }, {
                    "screen": "mainMenu",
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "heigth": 0,
                }]
            },
            "off": {
                "image": "",
                "buttons": [
                {
                    "screen": "lock",
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "heigth": 0,
                }]
            },
            "mainMenu": {
                "state": "diasable",
                "image": "",
                "buttons": [
                {
                    "state": "diasable",
                    "screen": "mainMenu",
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "heigth": 0
                }, {
                    "state": "enableSlider",
                    "screen": "mainMenu",
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "heigth": 0
                }, {
                    "state": "enablePattern",
                    "screen": "mainMenu",
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "heigth": 0
                }, {
                    "screen": "configureSlider",
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "heigth": 0
                }, {
                    "screen": "configurePatterns",
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "heigth": 0
                }]
            }
        };  
};

SmartUnlock.Events.prototype = function () {
        var startDrag = function (ev) {
            ev = ev || event;
            this.dragging = true;
            this.dragData = {
                x: ev.clientX,
                y: ev.clientY
            };
        },
            //drag = function (ev, context) {
            //    if (this.dragData && this.dragging) {
            //        ev = ev || event;
            //        context.beginPath();
            //        context.moveTo(dragData.x, dragData.y);
            //        context.lineTo(ev.clientX, ev.clientY);
            //        context.lineWidth = 5;
            //        context.strokeStyle = 'blue';
            //        context.stroke();
            //        dragData = {
            //            x: ev.clientX,
            //            y: ev.clientY
            //        };
            //    }
            //},
        stopLineDrag = function (ev) {
            if (this.dragData) {
                ev = ev || event;
                //brush.drawLine(context, this.dragData.x, this.dragData.y, ev.clientX, ev.clientY);
            }
        };

    return {
        startDrag: startDrag,
       // drag: drag,
        stopLineDrag: stopLineDrag
    };
}();