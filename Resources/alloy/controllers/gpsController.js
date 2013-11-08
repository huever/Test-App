function Controller() {
    function goToNext() {
        var recordController = Alloy.createController("recordController");
        recordController.getView().open();
    }
    function getPosition() {
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (!e.success || e.error) {
                alert("error " + JSON.stringify(e.error));
                return;
            }
            var longitude = e.coords.longitude;
            var latitude = e.coords.latitude;
            e.coords.altitude;
            e.coords.heading;
            e.coords.accuracy;
            e.coords.speed;
            e.coords.timestamp;
            e.coords.altitudeAccuracy;
            $.locationLat.text = L("longitude") + ": " + longitude;
            $.locationLong.text = L("latitude") + ": " + latitude;
        });
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
        backgroundImage: "/images/map.png",
        layout: "vertical",
        id: "gpsController"
    });
    $.__views.gpsController && $.addTopLevelView($.__views.gpsController);
    $.__views.gpsTitle = Ti.UI.createLabel({
        color: "white",
        top: 25,
        text: L("gpsTitle"),
        id: "gpsTitle"
    });
    $.__views.gpsController.add($.__views.gpsTitle);
    $.__views.gpsLabel1 = Ti.UI.createLabel({
        color: "white",
        text: L("gpsLabel1"),
        id: "gpsLabel1"
    });
    $.__views.gpsController.add($.__views.gpsLabel1);
    $.__views.gpsLabel2 = Ti.UI.createLabel({
        color: "white",
        text: L("gpsLabel2"),
        id: "gpsLabel2"
    });
    $.__views.gpsController.add($.__views.gpsLabel2);
    $.__views.locationLat = Ti.UI.createLabel({
        color: "white",
        id: "locationLat"
    });
    $.__views.gpsController.add($.__views.locationLat);
    $.__views.locationLong = Ti.UI.createLabel({
        color: "white",
        id: "locationLong"
    });
    $.__views.gpsController.add($.__views.locationLong);
    $.__views.gpsContinue = Ti.UI.createButton({
        width: 190,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#a5d686",
        top: 10,
        color: "black",
        title: L("gpsContinue"),
        id: "gpsContinue"
    });
    $.__views.gpsController.add($.__views.gpsContinue);
    goToNext ? $.__views.gpsContinue.addEventListener("click", goToNext) : __defers["$.__views.gpsContinue!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    getPosition();
    Titanium.Geolocation.accuracy = Titanium.Geolocation.NEAREST_TEN_METERS;
    Titanium.Geolocation.addEventListener("location", getPosition);
    __defers["$.__views.gpsContinue!click!goToNext"] && $.__views.gpsContinue.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;