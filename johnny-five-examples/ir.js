var five = require("johnny-five");

five.Board().on("ready", function() {
    // console.log(five.IR.Reflect.Collection.init)
    // console.log(five.IR.Reflect.Collection.listenerCount)
    // console.log(five.IR.Reflect.Collection[0].Function)
    // console.log(five.IR.Reflect.Collection.EventEmitter)
    // console.log(five.IR.Reflect.Array)
    var calibrating = true;
    var eyes = new five.IR.Reflect.Collection({
        emitter: 4,
        pins: ["A0", "A1", "A2", "A3", "A4", "A5"],
    });

    // calibrate for two seconds
    eyes.calibrateUntil(function() {
        return !calibrating;
    });
    setTimeout(function() {
        calibrating = false;
    }, 2000);

    eyes.enable();

    // "line"
    //
    // Fires continuously once calibrated
    //
    eyes.on("line", function(line) {
        console.log("line: ", eyes.emitter, eyes.content);
    });
});