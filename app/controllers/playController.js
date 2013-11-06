var args = arguments[0];
var sound;

playSound();

function goToNext(e) {
	var formController = Alloy.createController('formController');
	if (OS_IOS) {
		formController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		formController.getView().open();
	}
}

function playSound() {
	file = args.file;
	
	sound = Titanium.Media.createSound({
		url : file
	});
	sound.addEventListener('complete', function() {
		alert(L('endRecording'));
	});
	sound.play();
}