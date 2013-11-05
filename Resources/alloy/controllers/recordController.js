function Controller() {
    function goToNext() {
        var playController = Alloy.createController("playController");
        playController.getView().open();
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
        layout: "vertical",
        id: "recordController"
    });
    $.__views.recordController && $.addTopLevelView($.__views.recordController);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: "Grabar",
        id: "__alloyId16"
    });
    $.__views.recordController.add($.__views.__alloyId16);
    $.__views.topLabel = Ti.UI.createLabel({
        top: 20,
        text: "Cuando te vi estabas cantando",
        id: "topLabel"
    });
    $.__views.recordController.add($.__views.topLabel);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "Puedo escuchar tu voz?",
        id: "__alloyId17"
    });
    $.__views.recordController.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createButton({
        width: 40,
        height: 40,
        backgroundColor: "red",
        borderRadius: 10,
        id: "__alloyId18"
    });
    $.__views.recordController.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "Grabar voz",
        id: "__alloyId19"
    });
    $.__views.recordController.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createButton({
        width: 200,
        height: 35,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: "Continuar",
        id: "__alloyId20"
    });
    $.__views.recordController.add($.__views.__alloyId20);
    goToNext ? $.__views.__alloyId20.addEventListener("click", goToNext) : __defers["$.__views.__alloyId20!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId20!click!goToNext"] && $.__views.__alloyId20.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;