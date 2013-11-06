function goToNext(e) {
	var photoController = Alloy.createController('photoController');
	if (OS_IOS) {
		photoController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		photoController.getView().open();
	}
}

$.index.open();
