function goToNext(e) {
	var recordController = Alloy.createController('recordController');
	if (OS_IOS) {
		recordController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		recordController.getView().open();
	}

}
