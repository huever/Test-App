function Controller() {
    function goToNext() {
        var formController = Alloy.createController("formController");
        formController.getView().open();
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
        layout: "vertical",
        id: "playController"
    });
    $.__views.playController && $.addTopLevelView($.__views.playController);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: "Reproducir",
        id: "__alloyId11"
    });
    $.__views.playController.add($.__views.__alloyId11);
    $.__views.topLabel = Ti.UI.createLabel({
        top: 20,
        text: "No estoy seguro que seas vos",
        id: "topLabel"
    });
    $.__views.playController.add($.__views.topLabel);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "Dejame escuchar de nuevo",
        id: "__alloyId12"
    });
    $.__views.playController.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        width: 40,
        height: 40,
        backgroundColor: "green",
        borderRadius: 10,
        id: "__alloyId13"
    });
    $.__views.playController.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        text: "Reproducir voz",
        id: "__alloyId14"
    });
    $.__views.playController.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createButton({
        width: 200,
        height: 35,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: "Continuar",
        id: "__alloyId15"
    });
    $.__views.playController.add($.__views.__alloyId15);
    goToNext ? $.__views.__alloyId15.addEventListener("click", goToNext) : __defers["$.__views.__alloyId15!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId15!click!goToNext"] && $.__views.__alloyId15.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;