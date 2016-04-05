angular.module('bonuspoint').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log, $meteor, $rootScope, $ionicPopover, user) {
	$reactive(this).attach($scope);

	this.logout = logout;
	this.user = user;
	this.init = init;

	function init(callback) {
		// console.log('Initializing user data: ', Meteor.user());
		this.businessId = Meteor.user().profile.businessId;
		this.fullName = Meteor.user().profile.name.firstName + " " + Meteor.user().profile.name.lastName;
		this.emailId = Meteor.user().emails[0].address;
		if(callback) {
			return callback();
		}
	}
	
	function logout() {
		Meteor.logout();
	}


	///////////////////////////////////// SUBSCRIPTIONS /////////////////////////////////////
	
	// users
	this.subscribe('users');

	// businesses
	this.subscribe('businesses');

	// shops
	var subShops = this.subscribe('shopsByBusinessId', () => [this.getReactively('businessId')], {
		onReady: function () {
			// console.log("onReady And the Items actually Arrive", arguments);
		},
		onStop: function (error) {
			if (error) {
				console.log('An error happened - ', error);
			} else {
				// console.log('The subscription stopped');
			}
		}
	});

	// documents
	this.subscribe('documents');

	// cards
	// this.subscribe('cardModels');
	// this.subscribe('cards');
	
	///////////////////////////////////// SUBSCRIPTIONS /////////////////////////////////////


	this.autorun(() => {
		// console.log('Autorun: user changed ', this.getReactively('user'));
		this.init();
		this.shop = Shops.find().fetch()[0];			
	});

	$ionicPopover.fromTemplateUrl('profile-popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.popover = popover;
	});

	$scope.openPopover = function($event) {
		$scope.popover.show($event);
	};

	$scope.closePopover = function() {
		$scope.popover.hide();
	};

	$scope.$watch('currentUser', function() {
		$scope.popover.hide();
		$state.go('login');
		// if(angular.isUndefined($rootScope.currentUser)) {
		// 	console.log('User logged out')
		// 	$state.go('login');
		// }        
    }, true);

}
