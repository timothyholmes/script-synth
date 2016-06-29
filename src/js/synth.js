(function(){
    'use strict';

    angular.module('thScriptSynth')

    .controller('SynthController', ['$scope', function($scope){
        var _this = this,
            context = new window.AudioContext(),
            keyBoard = new Keyboard(context);

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
