var SmartUnlock = SmartUnlock || {};
SmartUnlock.Events = function () {
};

SmartUnlock.Events.prototype = function () {
    var dragData = null,
        dragging = false,
        currentScreen = "home",
        screens = {
            "home": {
                "image": "images/asdfghj.png",
                "buttons": [
                {
                    "screen": "off",
                    "image": "images/off.png",
                    "x": 650,
                    "y": 50,
                    "width": 50,
                    "heigth": 50,
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
        var startDrag = function (ev) {
            ev = ev || eventHandler;
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
                ev = ev || eventHandler;
                //brush.drawLine(context, this.dragData.x, this.dragData.y, ev.clientX, ev.clientY);
                drawScreen();
            }
        },

        drawScreen = function () {
            var img = new Image;
            img.src = screens[currentScreen]["image"];
            context.drawImage(img, 0, 0, 800, 739);
            for (var i = 0; i < screens[currentScreen].buttons.length; i++) {
                var button = screens[currentScreen].buttons[i];
                if (button.image) {
                    var buttonImage = new Image;
                    buttonImage.src = button.image;
                    context.drawImage(buttonImage, button.x, button.y, button.width, button.heigth);
                };
            };
        };

    return {
        startDrag: startDrag,
       // drag: drag,
        stopLineDrag: stopLineDrag,
        drawScreen: drawScreen
    };
}();