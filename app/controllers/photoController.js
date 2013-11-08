$.imageView.hide();
$.imageView.height = 0;
$.continueLabel.hide();

function selectPhoto() {
	Titanium.Media.openPhotoGallery({
		success : function(event) {
			var image = event.media;

			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.imageView.image = image;
			}
			showButtons();
		},
		cancel : function() {

		},
		error : function(error) {
		}
	});
}

function takePhoto() {
	Titanium.Media.showCamera({
		success : function(event) {
			var image = event.media;

			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.imageView.image = image;
			}			
			showButtons();
		},
		cancel : function() {

		},
		error : function(error) {
		}
	});
}

function goToNext() {
	var gpsController = Alloy.createController('GpsController');
	if (OS_IOS) {
		gpsController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		gpsController.getView().open();
	}
}

function showButtons() {
	$.selectPhoto.title = L("selectOtherPhoto");
	$.takePhoto.title = L("takeOtherPhoto");
	$.imageView.height = 200;
	$.imageView.show();
	$.continueLabel.show();
	$.photoLabel1.text = L("nicePicture");
}
