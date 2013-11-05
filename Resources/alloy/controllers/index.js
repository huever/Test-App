function Controller() {
    function goToNext() {
        var photoController = Alloy.createController("photoController");
        photoController.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: "Inicio",
        id: "__alloyId7"
    });
    $.__views.index.add($.__views.__alloyId7);
    $.__views.topLabel = Ti.UI.createLabel({
        top: 20,
        text: "Bienvenido a la aplicación de pruebas",
        id: "topLabel"
    });
    $.__views.index.add($.__views.topLabel);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        text: "Haga click en iniciar para comenzar",
        id: "__alloyId8"
    });
    $.__views.index.add($.__views.__alloyId8);
    $.__views.imageView = Ti.UI.createImageView({
        image: "/images/apple_logo.jpg",
        width: 150,
        height: 150,
        top: 100,
        id: "imageView"
    });
    $.__views.index.add($.__views.imageView);
    $.__views.__alloyId9 = Ti.UI.createButton({
        width: 200,
        height: 35,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: "Continuar",
        id: "__alloyId9"
    });
    $.__views.index.add($.__views.__alloyId9);
    goToNext ? $.__views.__alloyId9.addEventListener("click", goToNext) : __defers["$.__views.__alloyId9!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId9!click!goToNext"] && $.__views.__alloyId9.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;