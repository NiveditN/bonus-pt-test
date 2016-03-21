angular.module('bonuspoint').controller('ShopCtrl', ShopCtrl);

function ShopCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log, BUSINESS_CONSTANTS) {
	$reactive(this).attach($scope);
	// this.businessId = Meteor.user().profile.businessId;

	this.update = update;
	this.toggleView = toggleView;

	this.autorun(() => {
		// console.log('Autorun!!', this.getReactively('businessId'));
		this.shop = Shops.find().fetch()[0];
		console.log(BUSINESS_CONSTANTS);
		console.log(this.shop)
	});

	this.countries = BUSINESS_CONSTANTS.countries;

	function toggleView(callback) {
		this.showUpdateView = !this.showUpdateView;
	}

	function update() {
		console.log(this.shop);
		Meteor.call('updateShop', this.shop, function(err, res) {
			console.log(err, res);
		});
	}

	// $watch('this.shop.address.country', function() {
	// 	console.log('COUNTRY CHANGE', this.shop.address.country)
	// })

	// this.helpers({
	// 	shopData: () => {
	// 		console.log('GETTING DATA')
	// 	  	return Shops.find({});
	// 	},
	// 	shop: () => {
	// 		return this.shopData[0];
	// 	}
	// });

	/*
	this.click = click;
	function click(shop) {
		console.log('Button clicked', this, this.auth.currentUser)
		console.log(subscriptionHandle)
		console.log(this.shop)
	}
	*/

}
