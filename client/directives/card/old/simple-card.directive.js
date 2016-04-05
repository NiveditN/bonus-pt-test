angular.module('bonuspoint').directive('simpleCardModel', function() {
	return {
		restrict: 'E',
		scope: {
			cardInfo: '=info'
		},
		templateUrl: 'client/directives/card/old/simple-card.tpl.html'
	}
});