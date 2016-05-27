(function(){

	angular.module('thScriptSynth')

	.controller('SynthController', ['$scope', function($scope){
		var _this = this;
		var context = new (window.AudioContext || window.webkitAudioContext)();

		var keyBoard = new Keyboard(context);

		_this.playSound = function(type) {
			keyBoard.keys[type].trigger(context.currentTime);
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
