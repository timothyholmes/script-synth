(function(){

	angular.module('thScriptSynth')

	.controller('SynthController', ['$scope', function($scope){
		var _this = this;
		var context = new (window.AudioContext || window.webkitAudioContext)();

		var keyBoard = {
			lowf: new Key(context, 87.31),
			lowfs: new Key(context, 92.50),
			lowg: new Key(context, 98.00),
			lowgs: new Key(context, 103.83),
			lowa: new Key(context, 110.00),
			lowas: new Key(context, 116.54),
			lowb: new Key(context, 123.47),
			lowc: new Key(context, 130.81),
			lowcs: new Key(context, 138.59),
			lowd: new Key(context, 146.83),
			lowds: new Key(context, 155.56),
			lowe: new Key(context, 164.81),
			highf: new Key(context, 174.61),
			highfs: new Key(context, 185.00),
			highg: new Key(context, 196.00),
			highgs: new Key(context, 207.65),
			higha: new Key(context, 220.00),
			highas: new Key(context, 233.08),
			highb: new Key(context, 246.94),
			highc: new Key(context, 261.63),
			highcs: new Key(context, 277.18),
			highd: new Key(context, 293.66),
			highds: new Key(context, 311.13),
			highe: new Key(context, 329.63)
		};

		_this.playSound = function(type) {
			keyBoard[type].trigger(context.currentTime);
		};
	}])

	.directive('thSynth', function () {

		var directiveDefinitionObject = {
			templateUrl: './templates/synth.html',
			controller: 'SynthController',
			controllerAs: 'synthCtrl'
		};

		return directiveDefinitionObject;

	});
})();
