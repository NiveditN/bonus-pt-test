angular.module('bonuspoint').controller('CardsCtrl', CardsCtrl);

function CardsCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.click = click;

	function click() {
		console.log('Button clicked');
		console.log(this.file);
	}

	// this.a = "Shop Name";
	// this.b = "Shop City";
	// this.businessId = Meteor.user().profile.businessId;
	// this.value = {};

	// this.subscribe('shops', () => {
		// return [ this.getReactively('value') ];
	// });
	
	// this.helpers({
	// 	myData: () => {
	// 		return Shops.findOne({ businessId: this.getReactively('businessId') });
	// 	}
	// });

}
