angular.module('bonuspoint').controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.login = login;
	this.showInvalidPopup = showInvalidPopup;

	function login() {
		if(_.isEmpty(this.email) || _.isEmpty(this.password)) {
			return this.showInvalidPopup();
		} else {
			Meteor.loginWithPassword(this.email, this.password, function(err, res) { 
				if(err) {
					return console.log('Error', err);
				}
				return console.log('Success', res);
			});
		}
	}

	function showInvalidPopup() {
		var invalidPopup = $ionicPopup.alert({
			title: "Invalid data",
			template: '<div>Please enter valid email and password.</div>',
			cssClass: 'text-center'
		});
		invalidPopup.then((res) => {
			console.log('Compliance will be rewarded.');
		});
	}

}