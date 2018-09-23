var five = require("johnny-five"), 
    board, button;
var board = new five.Board();

board.on("ready", function() {
    console.log(this)
    var index = 0;
    var rainbow = [1, "FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];
    var led = new five.Led.RGB({
            pins: {
            red: 6,
            green: 5,
            blue: 3
            }
        });

        this.repl.inject({
            led: led
        });

    button = new five.Button(2);
    board.repl.inject({
        button: button
    });
    
    button.on("hold", function() {
        console.log( "Button held" );
    });
    
    button.on("down", function() {
        if(rainbow[index] === 1) {
            led.off();
            index += 1;
        } else {
            led.on()
            led.color(rainbow[index]);
            index += 1;
            if (index === rainbow.length) {
                index = 0;
            }
        }
    });

    button.on("up", function() {
        console.log( "Button released" );
    });

});