angular.module('bonuspoint').controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $state, $stateParams, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.login = login;

	/* Method to verify email: This needs to be on the landing controller */
	if (Accounts._verifyEmailToken) { 
		Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) { 
			if (err != null) { if (err.message == 'Verify email link expired [403]') 
				{ console.log('This verification link has expired.') } } 
			else { console.log('You have been verified!') } 
		});
	}

	function login() {
		if(_.isEmpty(this.email) || _.isEmpty(this.password)) {
			return showInvalidPopup();
		} else {
			Meteor.loginWithPassword(this.email, this.password, function(err, res) { 
				if(err) {
					console.log('Error', err);
					if(err.reason === 'Login forbidden') {
						return showErrorPopup('Please verify your email address.')
					}
					return showErrorPopup(err.reason);					
				}
				console.log('Success', res);
				console.log(Meteor.user());
				return $state.go('root.home.dashboard');				
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