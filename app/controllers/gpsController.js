getPosition();

function goToNext() {
	var recordController = Alloy.createController('RecordController');
	if (OS_IOS) {
		recordController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		recordController.getView().open();
	}
}

Titanium.Geolocation.accuracy = Titanium.Geolocation.NEAREST_TEN_METERS;
		
function getPosition() {
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
		if (!e.success || e.error)
		{
			alert('error ' + JSON.stringify(e.error));
			return;
		}
		
		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		
		$.locationLat.text = L('longitude') + ': ' + longitude;
		$.locationLong.text = L('latitude') + ': ' + latitude;
		
		
	}); 	
};	

Titanium.Geolocation.addEventListener('location', getPosition);
