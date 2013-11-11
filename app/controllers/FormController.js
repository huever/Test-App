function validate() {
	if ($.textField.value === "") {
		$.whatsYourNameValidation.text = L('whatsYourNameValidation');
	} else {
		$.whatsYourNameValidation.text = '';
		goToNext();
	}
}

function goToNext() {
	var recordController = Alloy.createController('EndController');
	if (OS_IOS) {
		recordController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		recordController.getView().open();
	}
}

