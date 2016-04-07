function Key(context, frequency) {
	var _this = this;

	_this.context = context;
	_this.frequency = frequency;
};

Key.prototype.setup = function() {
	var _this = this;

	_this.osc = _this.context.createOscillator();
	_this.gain = _this.context.createGain();
	_this.osc.connect(_this.gain);
	_this.gain.connect(_this.context.destination)
};

Key.prototype.trigger = function(time) {
	var _this = this;

	_this.setup();

	_this.osc.frequency.value = _this.frequency;
	_this.gain.gain.value = 1.5;

	_this.osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.3);
	_this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

	_this.osc.start(time);
	_this.osc.stop(time + 0.75);
};