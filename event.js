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
                    "heigth": 50
                }, {
                    "screen": "mainMenu",
                    "image": "images/10562044_868045486558778_153414427_o.jpg",
                    "x": 475,
                    "y": 360,
                    "width": 50,
                    "heigth": 50
                }]
            },
            "off": {
                "image": "images/offscreen.png",
                "buttons": [
                {
                    "screen": "lock",
                    "image": "images/off.png",
                    "x": 650,
                    "y": 50,
                    "width": 50,
                    "heigth": 50
                }]
            },
            "mainMenu": {
                "state": "diasable",
                "image": "images/addnewpatterns.png",
                "buttons": [
                {
                    "screen": "off",
                    "image": "images/off.png",
                    "x": 650,
                    "y": 50,
                    "width": 50,
                    "heigth": 50
                }, {
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
                var coords = canvas.relMouseCoords(ev);
                pressButton(coords.x, coords.y);
                drawScreen();
            }
        },

        drawScreen = function () {
            var img = new Image, buttonImages = [];
            if (screens[currentScreen]["image"]) {
                img.src = screens[currentScreen]["image"];
                img.onload = function(){
                    context.drawImage(img, 0, 0, 800, 739);
                };
            };
            for (var i = 0; i < screens[currentScreen].buttons.length; i++) {
                var button = screens[currentScreen].buttons[i];
                if (button.image) {
                    buttonImages[i] = new Image;
                    buttonImages[i].src = button.image;
                    buttonImages[i].onload = (function(value, button){
                       return function(){
                           context.drawImage(buttonImages[value], button.x, button.y, button.width, button.heigth);
                       }
                   })(i, button);
                };
            };
        },

        pressButton = function (x, y) {
            for (var i = 0; i < screens[currentScreen].buttons.length; i++) {
                var button = screens[currentScreen].buttons[i];
                if (button.x < x && button.x + button.width > x && button.y < y && button.y + button.heigth > y) {
                    currentScreen = button.screen;
                    console.log(currentScreen);
                    break;                    
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