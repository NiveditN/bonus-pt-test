angular.module('bonuspoint').controller('RootCtrl', RootCtrl);

function RootCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log, $meteor, $rootScope, $ionicPopover) {
	$reactive(this).attach($scope);
	
	///////////////////////////////////// SUBSCRIPTIONS /////////////////////////////////////
	
/*	// shops
	var subShops = this.subscribe('shopsByBusinessId', () => [this.getReactively('businessId')], {
		onReady: function () {
			console.log("onReady And the Items actually Arrive", arguments);
		},
		onStop: function (error) {
			if (error) {
				console.log('An error happened - ', error);
			} else {
				console.log('The subscription stopped');
			}
		}
	});

	// documents
	this.subscribe('documents');*/
	
	///////////////////////////////////// SUBSCRIPTIONS /////////////////////////////////////

}