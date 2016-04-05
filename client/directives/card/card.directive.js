angular.module('bonuspoint').directive('card', function() {
	return {
		restrict: 'E',
		scope: {
			card: '=',
			activeSide: '='
		},
		templateUrl: 'client/directives/card/card.html',
		controller: ['$scope', function($scope) {

			$scope.$watch('card', function(val) {
				if(!angular.isUndefined($scope.card) && $scope.card) {
					$scope.cardModel = CardModels.findOne({ _id: $scope.card.cardModelId });
					console.log('Card Data', $scope.card, $scope.cardModel);
					$scope.renderCard();	
				}
			});

			$scope.renderCard = function() {
				
				$scope.data = {
					user: {},
					business: {},
					shop: {}
				};
				
				$scope.data.user = Meteor.users.findOne({ _id: $scope.card.userId });
				$scope.data.business = Businesses.findOne({ _id: $scope.card.businessId });
				$scope.data.shop = Shops.findOne({ businessId: $scope.card.businessId });

				console.log($scope.data)

				$scope.getNestedValue = function(array, item) {
					// iterate through nested object to get final value
					angular.forEach(array, function(value, key) {
						if(key > 0 && !angular.isUndefined(item) && item.hasOwnProperty(value)) {
							item = item[value];	
						}
					})
					if(!angular.isUndefined(item) && item.length > 0) {	return item; } 
					else { return ''; }
				}

				$scope.setFields = function() {
					// iterate through list of fields in CardModel
					angular.forEach($scope.cardModel.fields, function(field) {
						$scope.array = field.name.split('.');
						// get Collection name
						$scope.collection = $scope.array[0];
						if($scope.collection.toLowerCase() === "users") {
							// insert data into cardModel
							field.name = $scope.getNestedValue($scope.array, angular.copy($scope.data.user));
						} else if ($scope.collection.toLowerCase() === "businesses") {
							// insert data into cardModel
							field.name = $scope.getNestedValue($scope.array, angular.copy($scope.data.business));
						}				
					})
				}
				
				//////// SET CARD DATA ////////
				
				// stampsAttained
				$scope.cardModel.rules.stampGift.transactionData.stampsAttained.defaultValue = $scope.card.data.stampGift.stampsAttained;
				// startDate
				$scope.cardModel.rules.startDate.dataFields.date.defaultValue = $scope.card.data.startDate;
				// endDate
				$scope.cardModel.rules.endDate.dataFields.date.defaultValue = $scope.card.data.endDate;
				// fields				
				if(!angular.isUndefined($scope.cardModel.fields) && $scope.cardModel.fields.length > 0) {
					$scope.setFields();
				}

				//////// SET CARD DATA ////////
			}					
		}],		
	}
});