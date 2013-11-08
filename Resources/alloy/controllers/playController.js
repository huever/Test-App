function Controller() {
    function goToNext() {
        var formController = Alloy.createController("formController");
        formController.getView().open();
    }
    function playSound() {
        file = args.file;
        sound = Titanium.Media.createSound({
            url: file
        });
        sound.addEventListener("complete", function() {
            alert(L("endRecording"));
        });
        sound.play();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "playController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.playController = Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "/images/eq.png",
        layout: "vertical",
        id: "playController"
    });
    $.__views.playController && $.addTopLevelView($.__views.playController);
    $.__views.playtitle = Ti.UI.createLabel({
        top: 25,
        color: "black",
        id: "playtitle"
    });
    $.__views.playController.add($.__views.playtitle);
    $.__views.playLabel1 = Ti.UI.createLabel({
        text: L("playLabel1"),
        color: "white",
        id: "playLabel1"
    });
    $.__views.playController.add($.__views.playLabel1);
    $.__views.playLabel2 = Ti.UI.createLabel({
        text: L("playLabel2"),
        color: "white",
        id: "playLabel2"
    });
    $.__views.playController.add($.__views.playLabel2);
    $.__views.playButton = Ti.UI.createButton({
        backgroundImage: "/images/play.png",
        width: 150,
        height: 150,
        top: 30,
        id: "playButton"
    });
    $.__views.playController.add($.__views.playButton);
    playSound ? $.__views.playButton.addEventListener("click", playSound) : __defers["$.__views.playButton!click!playSound"] = true;
    $.__views.continueLabel = Ti.UI.createButton({
        width: 190,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: L("continueLabel"),
        id: "continueLabel"
    });
    $.__views.playController.add($.__views.continueLabel);
    goToNext ? $.__views.continueLabel.addEventListener("click", goToNext) : __defers["$.__views.continueLabel!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0];
    var sound;
    playSound();
    __defers["$.__views.playButton!click!playSound"] && $.__views.playButton.addEventListener("click", playSound);
    __defers["$.__views.continueLabel!click!goToNext"] && $.__views.continueLabel.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;