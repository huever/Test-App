function Controller() {
    function goToNext() {
        var photoController = Alloy.createController("PhotoController");
        photoController.getView().open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
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
        backgroundImage: "/images/index.png",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.indexLabel1 = Ti.UI.createLabel({
        text: L("indexLabel1"),
        top: 30,
        id: "indexLabel1"
    });
    $.__views.index.add($.__views.indexLabel1);
    $.__views.indexLabel2 = Ti.UI.createLabel({
        text: L("indexLabel2"),
        id: "indexLabel2"
    });
    $.__views.index.add($.__views.indexLabel2);
    $.__views.imageView = Ti.UI.createImageView({
        image: "/images/logo.png",
        top: 50,
        id: "imageView"
    });
    $.__views.index.add($.__views.imageView);
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
    $.__views.index.add($.__views.continueLabel);
    goToNext ? $.__views.continueLabel.addEventListener("click", goToNext) : __defers["$.__views.continueLabel!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.continueLabel!click!goToNext"] && $.__views.continueLabel.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;