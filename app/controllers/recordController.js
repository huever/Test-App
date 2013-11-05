function goToNext(e) {
	var playController = Alloy.createController('playController');
	if (Ti.Platform.osname == 'iphone') {
		playController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		playController.getView().open();
	}
}
