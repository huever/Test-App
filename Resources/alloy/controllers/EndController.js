function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "EndController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.EndController = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "EndController"
    });
    $.__views.EndController && $.addTopLevelView($.__views.EndController);
    $.__views.endTitle = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: L("endTitle"),
        id: "endTitle"
    });
    $.__views.EndController.add($.__views.endTitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;