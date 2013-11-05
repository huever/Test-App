function Controller() {
    function selectPhoto() {
        alert("selecciona");
    }
    function takePhoto() {
        alert("sacar foto");
    }
    function goToNext() {
        var gpsController = Alloy.createController("gpsController");
        gpsController.getView().open();
    }
    function showButtons() {
        $.selectPhoto.title = L("select_photo");
        $.takePhoto.title = L("take_other_photo");
        $.imageView.height = 150;
        $.imageView.show();
        $.continuar.show();
        $.topLabel.text = L("nice_picture");
        $.showButtons.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "photoController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.photoController = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "photoController"
    });
    $.__views.photoController && $.addTopLevelView($.__views.photoController);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        top: 25,
        color: "black",
        text: "Fotos",
        id: "__alloyId10"
    });
    $.__views.photoController.add($.__views.__alloyId10);
    $.__views.topLabel = Ti.UI.createLabel({
        top: 20,
        text: "Utiliza la mejor foto que tengas!",
        id: "topLabel"
    });
    $.__views.photoController.add($.__views.topLabel);
    $.__views.imageView = Ti.UI.createImageView({
        image: "/images/apple_logo.jpg",
        width: 150,
        height: 150,
        top: 10,
        id: "imageView"
    });
    $.__views.photoController.add($.__views.imageView);
    $.__views.selectPhoto = Ti.UI.createButton({
        width: 200,
        height: 35,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: "Seleccionar de Biblioteca",
        id: "selectPhoto"
    });
    $.__views.photoController.add($.__views.selectPhoto);
    selectPhoto ? $.__views.selectPhoto.addEventListener("click", selectPhoto) : __defers["$.__views.selectPhoto!click!selectPhoto"] = true;
    $.__views.takePhoto = Ti.UI.createButton({
        width: 200,
        height: 35,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: "Tomar foto",
        id: "takePhoto"
    });
    $.__views.photoController.add($.__views.takePhoto);
    takePhoto ? $.__views.takePhoto.addEventListener("click", takePhoto) : __defers["$.__views.takePhoto!click!takePhoto"] = true;
    $.__views.continuar = Ti.UI.createButton({
        width: 200,
        height: 35,
        backgroundColor: "#b0e88d",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: "Continuar",
        id: "continuar"
    });
    $.__views.photoController.add($.__views.continuar);
    goToNext ? $.__views.continuar.addEventListener("click", goToNext) : __defers["$.__views.continuar!click!goToNext"] = true;
    $.__views.showButtons = Ti.UI.createButton({
        title: "Ver Botones",
        id: "showButtons"
    });
    $.__views.photoController.add($.__views.showButtons);
    showButtons ? $.__views.showButtons.addEventListener("click", showButtons) : __defers["$.__views.showButtons!click!showButtons"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.imageView.hide();
    $.imageView.height = 0;
    $.continuar.hide();
    __defers["$.__views.selectPhoto!click!selectPhoto"] && $.__views.selectPhoto.addEventListener("click", selectPhoto);
    __defers["$.__views.takePhoto!click!takePhoto"] && $.__views.takePhoto.addEventListener("click", takePhoto);
    __defers["$.__views.continuar!click!goToNext"] && $.__views.continuar.addEventListener("click", goToNext);
    __defers["$.__views.showButtons!click!showButtons"] && $.__views.showButtons.addEventListener("click", showButtons);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;