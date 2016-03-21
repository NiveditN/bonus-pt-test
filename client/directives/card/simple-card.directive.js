angular.module('bonuspoint').directive('simpleCardModel', function() {
	return {
		restrict: 'E',
		scope: {
			cardInfo: '=info'
		},
		templateUrl: 'client/directives/card/simple-card.tpl.html'
	}
});