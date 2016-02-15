angular.module('bonuspoint').controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.login = login;

	function login() {
		if(_.isEmpty(this.email) || _.isEmpty(this.password)) {
			return showInvalidPopup();
		} else {
			Meteor.loginWithPassword(this.email, this.password, function(err, res) { 
				if(err) {
					console.log('Error', err);
					if (!(typeof err !== undefined && err)) {
						err = 'Incorrect email or password.';
					}
					return showErrorPopup(err.reason);					
				}
				console.log('Success', res);
				console.log(Meteor.user());
				return $state.go('dashboard');				
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
			console.log('Invalid pop-up closed');
		});
	}

	function showSuccessPopup() {
		var successPopup = $ionicPopup.alert({
			title: "Login successful",
			template: '<div>Login successful!</div>',
			cssClass: 'text-center'
		});
		successPopup.then((res) => {
			console.log('Success pop-up closed.');
		});
	}

	function showErrorPopup(err) {
		var errorPopup = $ionicPopup.alert({
			title: "Login failed",
			template: '<div>'+ err + '</div>',
			cssClass: 'text-center'
		});
		errorPopup.then((res) => {
			console.log('Error pop-up closed.');
		});
	}

}