function Controller() {
    function goToNext() {
        var recordController = Alloy.createController("RecordController");
        recordController.getView().open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    }
    function getPosition() {
        Ti.Geolocation.getCurrentPosition(function(e) {
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
    this.__controllerPath = "GpsController";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.GpsController = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        backgroundImage: "/images/map.png",
        id: "GpsController"
    });
    $.__views.GpsController && $.addTopLevelView($.__views.GpsController);
    $.__views.gpsTitle = Ti.UI.createLabel({
        color: "white",
        top: 25,
        text: L("gpsTitle"),
        id: "gpsTitle"
    });
    $.__views.GpsController.add($.__views.gpsTitle);
    $.__views.gpsLabel1 = Ti.UI.createLabel({
        color: "white",
        text: L("gpsLabel1"),
        id: "gpsLabel1"
    });
    $.__views.GpsController.add($.__views.gpsLabel1);
    $.__views.gpsLabel2 = Ti.UI.createLabel({
        color: "white",
        text: L("gpsLabel2"),
        id: "gpsLabel2"
    });
    $.__views.GpsController.add($.__views.gpsLabel2);
    $.__views.locationLat = Ti.UI.createLabel({
        color: "white",
        id: "locationLat"
    });
    $.__views.GpsController.add($.__views.locationLat);
    $.__views.locationLong = Ti.UI.createLabel({
        color: "white",
        id: "locationLong"
    });
    $.__views.GpsController.add($.__views.locationLong);
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
    $.__views.GpsController.add($.__views.gpsContinue);
    goToNext ? $.__views.gpsContinue.addEventListener("click", goToNext) : __defers["$.__views.gpsContinue!click!goToNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    getPosition();
    Ti.Geolocation.accuracy = Titanium.Geolocation.NEAREST_TEN_METERS;
    Ti.Geolocation.addEventListener("location", getPosition);
    $.GpsController.addEventListener("close", function() {
        Ti.Geolocation.removeEventListener("location", getPosition);
    });
    __defers["$.__views.gpsContinue!click!goToNext"] && $.__views.gpsContinue.addEventListener("click", goToNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;