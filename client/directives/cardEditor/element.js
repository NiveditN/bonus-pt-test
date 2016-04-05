angular.module('bonuspoint').directive('testElement', function() {
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'client/directives/cardEditor/element.html'
	}
});