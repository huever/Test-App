function goToNext(e) {
	var formController = Alloy.createController('formController');
	if (Ti.Platform.osname == 'iphone') {
		formController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		formController.getView().open();
	}
}
