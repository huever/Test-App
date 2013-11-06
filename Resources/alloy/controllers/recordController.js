function Controller() {
    function record() {
        $.recordButton.hide();
        $.recordButton.height = 0;
        $.stopButton.show();
        $.stopButton.height = 80;
        recording.start();
    }
    function stopRecording() {
        file = recording.stop();
        goToNext(file);
    }
    function goToNext(file) {
        var playController = Alloy.createController("playController", {
            file: file
        });
        playController.getView().open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "recordController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.recordController = Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "/images/eq.png",
        layout: "vertical",
        id: "recordController"
    });
    $.__views.recordController && $.addTopLevelView($.__views.recordController);
    $.__views.recordTitle = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: L("recordTitle"),
        id: "recordTitle"
    });
    $.__views.recordController.add($.__views.recordTitle);
    $.__views.recordLabel1 = Ti.UI.createLabel({
        text: L("recordLabel1"),
        color: "white",
        id: "recordLabel1"
    });
    $.__views.recordController.add($.__views.recordLabel1);
    $.__views.recordLabel2 = Ti.UI.createLabel({
        text: L("recordLabel2"),
        color: "white",
        id: "recordLabel2"
    });
    $.__views.recordController.add($.__views.recordLabel2);
    $.__views.recordButton = Ti.UI.createButton({
        width: 80,
        height: 80,
        backgroundColor: "red",
        borderRadius: 40,
        top: 30,
        id: "recordButton"
    });
    $.__views.recordController.add($.__views.recordButton);
    record ? $.__views.recordButton.addEventListener("click", record) : __defers["$.__views.recordButton!click!record"] = true;
    $.__views.stopButton = Ti.UI.createButton({
        width: 80,
        height: 80,
        backgroundColor: "red",
        borderRadius: 0,
        top: 30,
        id: "stopButton"
    });
    $.__views.recordController.add($.__views.stopButton);
    stopRecording ? $.__views.stopButton.addEventListener("click", stopRecording) : __defers["$.__views.stopButton!click!stopRecording"] = true;
    $.__views.recordLabel3 = Ti.UI.createLabel({
        text: L("recordLabel3"),
        color: "white",
        id: "recordLabel3"
    });
    $.__views.recordController.add($.__views.recordLabel3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var file;
    $.stopButton.hide();
    $.stopButton.height = 0;
    Titanium.Media.audioSessionMode;
    Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
    Titanium.Media.audioLineType = Ti.Media.AUDIO_SPEAKER;
    var recording = Ti.Media.createAudioRecorder();
    recording.compression = Ti.Media.AUDIO_FORMAT_ULAW;
    recording.format = Ti.Media.AUDIO_FILEFORMAT_WAVE;
    __defers["$.__views.recordButton!click!record"] && $.__views.recordButton.addEventListener("click", record);
    __defers["$.__views.stopButton!click!stopRecording"] && $.__views.stopButton.addEventListener("click", stopRecording);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;