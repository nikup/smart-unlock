var SmartUnlock = SmartUnlock || {};
SmartUnlock.Events = function () {
};

SmartUnlock.Events.prototype = function () {
    var dragData = null,
        dragging = false,
        currentScreen = "home",
        state = "disabled",
        lockPattern = false,
        screens = {
            "home": {
                "image": "images/home.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "mainMenu",
                    "x": 350,
                    "y": 250,
                    "width": 70,
                    "heigth": 70
                }]
            },
            "off": {
                "image": "images/offscreen.png",
                "buttons": [
                {
                    "screen": "lock",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }]
            },
            "mainMenu": {
                "template": "images/addnewpatterns-",
                "image": "images/addnewpatterns-disabled.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "state": "disabled",
                    "screen": "mainMenu",
                    "x": 160,
                    "y": 180,
                    "width": 250,
                    "heigth": 30
                }, {
                    "state": "sliders",
                    "screen": "mainMenu",
                    "x": 160,
                    "y": 110,
                    "width": 250,
                    "heigth": 30
                }, {
                    "state": "patterns",
                    "screen": "mainMenu",
                    "altScreen": "setLockPattern",
                    "x": 160,
                    "y": 145,
                    "width": 250,
                    "heigth": 30
                }, {
                    "screen": "configureSlider",
                    "x": 160,
                    "y": 250,
                    "width": 250,
                    "heigth": 30
                }, {
                    "screen": "configurePatterns",
                    "x": 160,
                    "y": 0,
                    "width": 250,
                    "heigth": 30
                }]
            },
            "setLockPattern": {
                "image": "images/unlockpattern.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "mainMenu",
                    "x": 160,
                    "y": 180,
                    "width": 250,
                    "heigth": 30
                }]
            },
            "configureSlider": {
                "image": "images/configureSlider.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "chooseFunc",
                    "x": 340,
                    "y": 376,
                    "width": 50,
                    "heigth": 50
                }]
            },
            "chooseFunc": {
                "image": "images/choosefrom.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "chooseContact",
                    "x": 180,
                    "y": 130,
                    "width": 200,
                    "heigth": 40
                }, {
                    "screen": "chooseSMS",
                    "x": 180,
                    "y": 170,
                    "width": 200,
                    "heigth": 40
                }, {
                    "screen": "chooseApp",
                    "x": 180,
                    "y": 220,
                    "width": 200,
                    "heigth": 40
                }, {
                    "screen": "chooseFile",
                    "x": 180,
                    "y": 260,
                    "width": 200,
                    "heigth": 40
                }]
            },
            "chooseContact": {
                "image": "images/mama.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "chooseFunc",
                    "x": 340,
                    "y": 376,
                    "width": 50,
                    "heigth": 50
                }]
            },
            "chooseSMS": {
                "image": "images/mamapalachinki.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "chooseFunc",
                    "x": 340,
                    "y": 376,
                    "width": 50,
                    "heigth": 50
                }]
            },
            "chooseApp": {
                "image": "images/appss.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "chooseFunc",
                    "x": 340,
                    "y": 376,
                    "width": 50,
                    "heigth": 50
                }]
            },
            "chooseFile": {
                "image": "images/pdfche.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "chooseFunc",
                    "x": 340,
                    "y": 376,
                    "width": 50,
                    "heigth": 50
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
                    context.drawImage(img, 0, 0, 600, 554);
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
                    if (button.state) {
                        state = button.state;
                    };
                    if (currentScreen == "mainMenu") {
                        screens.mainMenu.image = screens.mainMenu.template + state + ".png";
                        if (button.altScreen && !lockPattern) {
                            currentScreen = button.altScreen;
                        }
                    };
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