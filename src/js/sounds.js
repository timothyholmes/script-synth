function F(context, position) {
	var _this = this;

	_this.context = context;
	_this.position = position;
};

F.prototype.setup = function() {
	var _this = this;

	_this.osc = _this.context.createOscillator();
	_this.gain = _this.context.createGain();
	_this.osc.connect(_this.gain);
	_this.gain.connect(_this.context.destination)
};

F.prototype.trigger = function(time) {
	var _this = this;

	_this.setup();

	_this.osc.frequency.setValueAtTime(150, time);
	_this.gain.gain.setValueAtTime(1.5, time);

	_this.osc.frequency.exponentialRampToValueAtTime(0.01, time + 1);
	_this.gain.gain.exponentialRampToValueAtTime(0.01, time + 1);

	_this.osc.start(time);

	_this.osc.stop(time + 1);
};