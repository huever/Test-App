function Controller() {
    function validate() {
        alert("Escribiste: " + $.textField.value);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "formController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.formController = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "formController"
    });
    $.__views.formController && $.addTopLevelView($.__views.formController);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: "Form",
        id: "__alloyId0"
    });
    $.__views.formController.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Cuale era tu nombre?",
        id: "__alloyId1"
    });
    $.__views.formController.add($.__views.__alloyId1);
    $.__views.textField = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        width: "250",
        height: "35",
        id: "textField"
    });
    $.__views.formController.add($.__views.textField);
    $.__views.__alloyId2 = Ti.UI.createButton({
        width: 200,
        height: 35,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: "Validar",
        id: "__alloyId2"
    });
    $.__views.formController.add($.__views.__alloyId2);
    validate ? $.__views.__alloyId2.addEventListener("click", validate) : __defers["$.__views.__alloyId2!click!validate"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2!click!validate"] && $.__views.__alloyId2.addEventListener("click", validate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;