angular.module('bonuspoint').directive('cardElement', function() {
	return {
		restrict: 'E',
		scope: {
			'element': '=',
			'type': '=',
			'name': '='
		},
		controller: ['$scope', function($scope) {
			// business logic
			$scope.stampRows = [];
			$scope.generateStampMatrix = function() {
				console.log('Generating stamp matrix');
				var id = 0, count = 0, i = 0, j = 0;
				for(i = 0; i < $scope.element.rows; i++) {
					$scope.stampColumn = [];
					for(j = 0; j < $scope.element.columns; j++) {
						count = (i * $scope.element.columns) + (j+1);
						if(count <= $scope.element.transactionData.stampsAttained.defaultValue) {
							// render stamp
							$scope.stampColumn.push({ stamp: true });
						} else {
							// render stamp placeholder
							$scope.stampColumn.push({ stamp: false });
						}						
					}
					$scope.stampRows.push($scope.stampColumn);					
				}
				console.log('Final stamp row', $scope.stampRows)
			}
			if(!angular.isUndefined($scope.name) && $scope.name === 'stampGift') {
				$scope.generateStampMatrix();
			}	
		}],
		link: function(scope, element, attrs) {
			// DOM manipulation logic
		},
		templateUrl: 'client/directives/cardElement/cardElement.html'
	}
});