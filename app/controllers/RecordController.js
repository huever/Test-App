var file;

$.stopButton.hide();
$.stopButton.height = 0;

var currentSessionMode = Titanium.Media.audioSessionMode;
Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
Titanium.Media.audioLineType = Ti.Media.AUDIO_SPEAKER;
var recording = Ti.Media.createAudioRecorder();
recording.compression = Ti.Media.AUDIO_FORMAT_ULAW;
recording.format = Ti.Media.AUDIO_FILEFORMAT_WAVE;

function record(e) {
	$.recordButton.hide();
	$.recordButton.height = 0;
	$.stopButton.show();
	$.stopButton.height = 150;
	recording.start();
}

function stopRecording(e) {
	file = recording.stop();
	goToNext(file);
}

function goToNext(file) {
	var playController = Alloy.createController('PlayController', {
		file : file
	});
	if (OS_IOS) {
		playController.getView().open({
			transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	} else {
		playController.getView().open();
	}
}
