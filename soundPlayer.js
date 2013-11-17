var SoundPlayer = function(channels) {
 this.audiochannels = new Array();
  for (a=0;a<channels;a++) {									        // prepare the channels
		this.audiochannels[a] = new Array();
		this.audiochannels[a]['channel'] = new Audio();	// create a new audio object
		this.audiochannels[a]['finished'] = -1;					// expected end time for this channel
	}
}

SoundPlayer.prototype.play = function(s) {
	for (a=0;a<this.audiochannels.length;a++) {
		thistime = new Date();
		if (this.audiochannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
			this.audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
			this.audiochannels[a]['channel'].src = document.getElementById(s).src;
			this.audiochannels[a]['channel'].load();
			this.audiochannels[a]['channel'].play();
			break;
		}
	}
}
