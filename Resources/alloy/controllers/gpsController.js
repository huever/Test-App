function Controller() {
    function goToNext() {
        var recordController = Alloy.createController("recordController");
        recordController.getView().open();
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
        layout: "vertical",
        id: "gpsController"
    });
    $.__views.gpsController && $.addTopLevelView($.__views.gpsController);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: "GPS",
        id: "__alloyId3"
    });
    $.__views.gpsController.add($.__views.__alloyId3);
    $.__views.topLabel = Ti.UI.createLabel({
        top: 20,
        text: "Me pareció verte por acá",
        id: "topLabel"
    });
    $.__views.gpsController.add($.__views.topLabel);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "¿Estas en ciudad?",
        id: "__alloyId4"
    });
    $.__views.gpsController.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createButton({
        width: 200,
        height: 35,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: "Ahí estoy!!!",
        id: "__alloyId5"
    });
    $.__views.gpsController.add($.__views.__alloyId5);
    goToNext ? $.__views.__alloyId5.addEventListener("click", goToNext) : __defers["$.__views.__alloyId5!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId5!click!goToNext"] && $.__views.__alloyId5.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;