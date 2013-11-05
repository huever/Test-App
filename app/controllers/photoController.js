$.imageView.hide();
$.imageView.height = 0;
$.continuar.hide();

function selectPhoto() {
	alert("selecciona");
}

function takePhoto() {
	alert("sacar foto");
}

function goToNext() {
	var gpsController = Alloy.createController('gpsController');
	if (Ti.Platform.osname == 'iphone') {
		gpsController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		gpsController.getView().open();
	}
}

function showButtons() {
	$.selectPhoto.title = L("select_photo");
	$.takePhoto.title = L("take_other_photo");
	$.imageView.height = 150;
	$.imageView.show();
	$.continuar.show();
	$.topLabel.text = L("nice_picture");
	//Internacionalizar
	$.showButtons.hide();
}
