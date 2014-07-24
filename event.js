var SmartUnlock = SmartUnlock || {};
SmartUnlock.Events = function () {
};

SmartUnlock.Events.prototype = function () {
    var dragData = null,
        dragging = false,
        currentScreen = "home",
        state = "disabled",
        lockPattern = false,
        theLockPattern = [],
        anotherPattern = [],
        lockAction = "default",
        slideAction = "default",
        dots = [
        {
            "x": 210,
            "y": 225,
            "n": 1
        }, {
            "x": 290,
            "y": 225,
            "n": 2
        }, {
            "x": 365,
            "y": 225,
            "n": 3
        }, {
            "x": 210,
            "y": 310,
            "n": 4
        }, {
            "x": 290,
            "y": 310,
            "n": 5
        }, {
            "x": 365,
            "y": 310,
            "n": 6
        }, {
            "x": 210,
            "y": 395,
            "n": 7
        }, {
            "x": 290,
            "y": 395,
            "n": 8
        }, {
            "x": 365,
            "y": 395,
            "n": 9
        }],
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
                    "y": 285,
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
                    "x": 340,
                    "y": 150,
                    "width": 50,
                    "heigth": 50
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
            "configurePatterns": {
                "image": "images/confPatterns.jpg",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "choosePattern",
                    "x": 170,
                    "y": 120,
                    "width": 225,
                    "heigth": 50
                }]
            },
            "choosePattern": {
                "image": "images/somepattern.png",
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
                    "y": 150,
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
                    "screen": "home",
                    "action": "call",
                    "x": 170,
                    "y": 140,
                    "width": 250,
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
                    "screen": "home",
                    "action": "sms",
                    "x": 200,
                    "y": 376,
                    "width": 250,
                    "heigth": 150
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
                    "screen": "home",
                    "action": "facebook",
                    "x": 185,
                    "y": 185,
                    "width": 66,
                    "heigth": 66
                }, {
                    "screen": "home",
                    "action": "twitter",
                    "x": 185,
                    "y": 265,
                    "width": 66,
                    "heigth": 66
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
                    "screen": "home",
                    "action": "pdf",
                    "x": 190,
                    "y": 170,
                    "width": 70,
                    "heigth": 70
                }]
            },
            "sliderLock": {
                "template": "images/sliderscreen-",
                "image": "images/sliderscreen-default.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }, {
                    "screen": "home",
                    "x": 285,
                    "y": 376,
                    "width": 110,
                    "heigth": 40
                }, {
                    "screen": "action",
                    "x": 175,
                    "y": 376,
                    "width": 110,
                    "heigth": 40
                }]
            },
            "action": {
                "template": "images/action-",
                "image": "images/action-default.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }]
            },
            "patternLock": {
                "image": "images/patternsscreen.png",
                "buttons": [
                {
                    "screen": "off",
                    "x": 550,
                    "y": 0,
                    "width": 50,
                    "heigth": 50
                }]
            }
        }; 
        var startDrag = function (ev) {
            ev = ev || eventHandler;
            this.dragging = true;
            var coords = canvas.relMouseCoords(ev);
            this.dragData = [{
                x: coords.x,
                y: coords.y
            }];
        },
        drag = function (ev) {
            if (this.dragData && this.dragging) {
                ev = ev || event;
                var coords = canvas.relMouseCoords(ev);
                context.beginPath();
                context.moveTo(this.dragData.x, this.dragData.y);
                context.arc(coords.x, coords.y, 10, 0 ,2*Math.PI);
                //context.lineTo(coords.x, coords.y);
                context.lineWidth = 20;
                context.strokeStyle = 'rgba(255, 247, 127, 0.2)';
                context.stroke();
                this.dragData.push({
                    x: coords.x,
                    y: coords.y
                });
            }
        },
        stopLineDrag = function (ev) {
            if (this.dragData) {
                ev = ev || eventHandler;
                //brush.drawLine(context, this.dragData.x, this.dragData.y, ev.clientX, ev.clientY);
                if (currentScreen == "setLockPattern") {
                    for (var i = 0; i < this.dragData.length; i++) {
                        for (var j = 0; j < dots.length; j++) {
                            if(this.dragData[i].x > dots[j].x - 10 && this.dragData[i].x < dots[j].x + 10 &&
                                this.dragData[i].y > dots[j].y - 10 && this.dragData[i].y < dots[j].y + 10) {
                                theLockPattern.push(dots[j].n);
                            }
                        };
                    };
                    theLockPattern = theLockPattern.filter(function(elem, pos) {
                        return theLockPattern.indexOf(elem) == pos;
                    });
                };

                if (currentScreen == "choosePattern") {
                    for (var i = 0; i < this.dragData.length; i++) {
                        for (var j = 0; j < dots.length; j++) {
                            if(this.dragData[i].x > dots[j].x - 5 && this.dragData[i].x < dots[j].x + 5 &&
                                this.dragData[i].y > dots[j].y - 5 && this.dragData[i].y < dots[j].y + 5) {
                                anotherPattern.push(dots[j].n);
                            }
                        };  
                    };
                    anotherPattern = anotherPattern.filter(function(elem, pos) {
                        return anotherPattern.indexOf(elem) == pos;
                    });
                };

                if (currentScreen == "patternLock") {
                    var currentPattern = [];
                    for (var i = 0; i < this.dragData.length; i++) {
                        for (var j = 0; j < dots.length; j++) {
                            if(this.dragData[i].x > dots[j].x - 5 && this.dragData[i].x < dots[j].x + 5 &&
                                this.dragData[i].y > dots[j].y - 5 && this.dragData[i].y < dots[j].y + 5) {
                                currentPattern.push(dots[j].n);
                            }
                        };  
                    };
                    currentPattern = currentPattern.filter(function(elem, pos) {
                        return currentPattern.indexOf(elem) == pos;
                    });

                    if (arraysIdentical(currentPattern, theLockPattern)) {
                        currentScreen = "home";
                    };
                    if (arraysIdentical(currentPattern, anotherPattern)) {
                        currentScreen = "action";
                    };
                };

                var coords = canvas.relMouseCoords(ev);
                pressButton(coords.x, coords.y);
                drawScreen();
                this.dragging = false;
                this.dragData = null;
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
                    if (button.action) {
                        console.log(button.action);
                        if (state == "sliders") {
                            slideAction = button.action;
                        }
                        if (state == "patterns") {
                            lockAction = button.action;
                            console.log(lockAction);
                        }
                        
                    };
                    
                    if (currentScreen == "lock") {
                        if (state == "sliders") {
                            currentScreen = "sliderLock";
                        } else if (state == "patterns") {
                            currentScreen = "patternLock";
                        } else {
                            currentScreen = "home"
                        };
                    };

                    if (currentScreen == "sliderLock") {
                        screens.sliderLock.image = screens.sliderLock.template + slideAction + ".png";
                    };

                    
                    console.log(currentScreen);
                    break;                    
                };
            };

            if (currentScreen == "action") {
                if (state == "sliders") {
                    screens.action.image = screens.action.template + slideAction + ".png";
                };
                if (state == "patterns") {
                    screens.action.image = screens.action.template + lockAction + ".png";
                };
            };
        },
        arraysIdentical = function (a, b) {
            var i = a.length;
            if (i != b.length) return false;
            while (i--) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        };

    return {
        startDrag: startDrag,
        drag: drag,
        stopLineDrag: stopLineDrag,
        drawScreen: drawScreen
    };
}();