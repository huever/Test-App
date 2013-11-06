function Controller() {
    function goToNext() {
        var recordController = Alloy.createController("recordController");
        recordController.getView().open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gpsController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.gpsController = Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "/images/map.png",
        layout: "vertical",
        id: "gpsController"
    });
    $.__views.gpsController && $.addTopLevelView($.__views.gpsController);
    $.__views.gpsTitle = Ti.UI.createLabel({
        top: 25,
        color: "white",
        text: L("gpsTitle"),
        id: "gpsTitle"
    });
    $.__views.gpsController.add($.__views.gpsTitle);
    $.__views.gpsLabel1 = Ti.UI.createLabel({
        text: L("gpsLabel1"),
        color: "white",
        id: "gpsLabel1"
    });
    $.__views.gpsController.add($.__views.gpsLabel1);
    $.__views.gpsLabel2 = Ti.UI.createLabel({
        text: L("gpsLabel2"),
        color: "white",
        id: "gpsLabel2"
    });
    $.__views.gpsController.add($.__views.gpsLabel2);
    $.__views.gpsContinue = Ti.UI.createButton({
        width: 190,
        height: 40,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: L("gpsContinue"),
        id: "gpsContinue"
    });
    $.__views.gpsController.add($.__views.gpsContinue);
    goToNext ? $.__views.gpsContinue.addEventListener("click", goToNext) : __defers["$.__views.gpsContinue!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.gpsContinue!click!goToNext"] && $.__views.gpsContinue.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;