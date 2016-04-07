(function(){

	angular.module('thScriptSynth')

	.controller('SynthController', ['$scope', function($scope){

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