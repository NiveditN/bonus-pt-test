angular.module('bonuspoint').directive('compiledCardModel', function() {
	return {
		restrict: 'E',
		scope: {
			cardInfo: '=info'
		},
		templateUrl: 'client/directives/card/compiled-card-front.tpl.html'
	}
});

angular.module('bonuspoint').directive('compiledCardModelBack', function() {
	return {
		restrict: 'E',
		scope: {
			cardInfo: '=info'
		},
		templateUrl: 'client/directives/card/compiled-card-back.tpl.html',
		link: function (scope, element, attrs) {

			scope.stampRows = 0;
			scope.stampCols = 0;
			scope.stampRowsArray = [];
			scope.stampColsArray = [];


			scope.$watch('cardInfo', function(newValue, oldValue) {
				console.log("CARD CHANGES")
				if(!angular.isUndefined(scope.cardInfo.cardElements.rules.stampGift.stamps.rows)) {
					scope.stampRows = scope.cardInfo.cardElements.rules.stampGift.stamps.rows;		
					scope.stampRowsArray = new Array(scope.stampRows);			
				} 
				if(!angular.isUndefined(scope.cardInfo.cardElements.rules.stampGift.stamps.columns)) {
					scope.stampCols = scope.cardInfo.cardElements.rules.stampGift.stamps.columns;
					scope.stampColsArray = new Array(scope.stampCols);
				}				
			}, true);

			scope.range = function(n) {
				console.log('RANGE', n);
				return new Array(n);
			};
			scope.getStampRows = function() {
				return new Array(scope.stampRows);
			}	
			scope.getStampColumns = function() {
				return new Array(scope.stampCols);
			}					
		}		
	}
});