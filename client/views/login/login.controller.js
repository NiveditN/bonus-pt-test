angular.module('bonuspoint').controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.login = login;
	this.showInvalidPopup = showInvalidPopup;
	this.showSuccessPopup = showSuccessPopup;
	this.showErrorPopup = showErrorPopup;

	function login() {
		if(_.isEmpty(this.email) || _.isEmpty(this.password)) {
			return this.showInvalidPopup();
		} else {
			Meteor.loginWithPassword(this.email, this.password, function(err, res) { 
				if(err) {
					// this.showErrorPopup(err);
					return console.log('Error', err);
				}
				// this.showSuccessPopup();
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

	function showSuccessPopup() {
		var successPopup = $ionicPopup.alert({
			title: "Login successful",
			template: '<div>Login successful!</div>',
			cssClass: 'text-center'
		});
		successPopup.then((res) => {
			console.log('Compliance will be rewarded.');
		});
	}

	function showErrorPopup(err) {
		var errorPopup = $ionicPopup.alert({
			title: "Login failed",
			template: '<div>'+ err + '</div>',
			cssClass: 'text-center'
		});
		errorPopup.then((res) => {
			console.log('Compliance will be rewarded.');
		});
	}

}