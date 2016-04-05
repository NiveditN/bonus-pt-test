angular.module('bonuspoint').directive('cardModel', function() {
	return {
		restrict: 'E',
		scope: {
			'model': '=',
			'activeSide': '='
		},		
		templateUrl: 'client/directives/cardModel/cardModel.html'
	}
});