function Controller() {
    function selectPhoto() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                var image = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && ($.imageView.image = image);
                showButtons();
            },
            cancel: function() {},
            error: function() {}
        });
    }
    function takePhoto() {
        Titanium.Media.showCamera({
            success: function(event) {
                var image = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && ($.imageView.image = image);
                showButtons();
            },
            cancel: function() {},
            error: function() {}
        });
    }
    function goToNext() {
        var gpsController = Alloy.createController("GpsController");
        gpsController.getView().open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    }
    function showButtons() {
        $.selectPhoto.title = L("selectOtherPhoto");
        $.takePhoto.title = L("takeOtherPhoto");
        $.removeClass($.imageView, "hidden");
        $.continueLabel.show();
        $.photoLabel1.text = L("nicePicture");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "PhotoController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.PhotoController = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/images/camera.png",
        id: "PhotoController"
    });
    $.__views.PhotoController && $.addTopLevelView($.__views.PhotoController);
    $.__views.photoTitle = Ti.UI.createLabel({
        top: 25,
        color: "white",
        text: L("photoTitle"),
        id: "photoTitle"
    });
    $.__views.PhotoController.add($.__views.photoTitle);
    $.__views.photoLabel1 = Ti.UI.createLabel({
        text: L("photoLabel1"),
        color: "white",
        id: "photoLabel1"
    });
    $.__views.PhotoController.add($.__views.photoLabel1);
    $.__views.imageView = Ti.UI.createImageView({
        top: 10,
        id: "imageView"
    });
    $.__views.PhotoController.add($.__views.imageView);
    $.__views.selectPhoto = Ti.UI.createButton({
        width: 190,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: L("selectPhoto"),
        id: "selectPhoto"
    });
    $.__views.PhotoController.add($.__views.selectPhoto);
    selectPhoto ? $.__views.selectPhoto.addEventListener("click", selectPhoto) : __defers["$.__views.selectPhoto!click!selectPhoto"] = true;
    $.__views.takePhoto = Ti.UI.createButton({
        width: 190,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: L("takePhoto"),
        id: "takePhoto"
    });
    $.__views.PhotoController.add($.__views.takePhoto);
    takePhoto ? $.__views.takePhoto.addEventListener("click", takePhoto) : __defers["$.__views.takePhoto!click!takePhoto"] = true;
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
    $.__views.PhotoController.add($.__views.continueLabel);
    goToNext ? $.__views.continueLabel.addEventListener("click", goToNext) : __defers["$.__views.continueLabel!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.continueLabel.hide();
    $.addClass($.imageView, "hidden");
    __defers["$.__views.selectPhoto!click!selectPhoto"] && $.__views.selectPhoto.addEventListener("click", selectPhoto);
    __defers["$.__views.takePhoto!click!takePhoto"] && $.__views.takePhoto.addEventListener("click", takePhoto);
    __defers["$.__views.continueLabel!click!goToNext"] && $.__views.continueLabel.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;