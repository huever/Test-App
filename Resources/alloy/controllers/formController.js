function Controller() {
    function validate() {
        if ("" === $.textField.value) $.whatsYourNameValidation.text = L("whatsYourNameValidation"); else {
            $.whatsYourNameValidation.text = "";
            goToNext();
        }
    }
    function goToNext() {
        var recordController = Alloy.createController("EndController");
        recordController.getView().open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FormController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.FormController = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/images/form.png",
        id: "FormController"
    });
    $.__views.FormController && $.addTopLevelView($.__views.FormController);
    $.__views.formTitle = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: L("formTitle"),
        id: "formTitle"
    });
    $.__views.FormController.add($.__views.formTitle);
    $.__views.whatsYourName = Ti.UI.createLabel({
        text: L("whatsYourName"),
        id: "whatsYourName"
    });
    $.__views.FormController.add($.__views.whatsYourName);
    $.__views.textField = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        width: "250",
        height: "35",
        id: "textField"
    });
    $.__views.FormController.add($.__views.textField);
    $.__views.whatsYourNameValidation = Ti.UI.createLabel({
        color: "red",
        id: "whatsYourNameValidation"
    });
    $.__views.FormController.add($.__views.whatsYourNameValidation);
    $.__views.validate = Ti.UI.createButton({
        width: 190,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: L("validate"),
        id: "validate"
    });
    $.__views.FormController.add($.__views.validate);
    validate ? $.__views.validate.addEventListener("click", validate) : __defers["$.__views.validate!click!validate"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.validate!click!validate"] && $.__views.validate.addEventListener("click", validate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;