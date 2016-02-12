angular.module('bonuspoint').controller('SignupCtrl', SignupCtrl);

function SignupCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.signup = signup;
	this.showInvalidPopup = showInvalidPopup;
	this.showErrorPopup = showErrorPopup;
	this.showSuccessPopup = showSuccessPopup;

	this.securityQuestions = [{
		id: 1,
		content: 'Which street did you grow up on?'
	}, {
		id: 2,
		content: 'What is your favorite color?'
	}];
	this.securityQuestion = this.securityQuestions[0];

	function signup() {

		// console.log(this.securityQuestion);

		if(_.isEmpty(this.email) || _.isEmpty(this.password) || _.isEmpty(this.confirmPassword) || _.isEmpty(this.securityAnswer)) {
			return this.showInvalidPopup();
		}
		if(this.password !== this.confirmPassword) {
			return this.showInvalidPopup();
		}
		if(!this.terms) {
			return this.showInvalidPopup();
		}

		Accounts.createUser({
			email: this.email,
			password: this.password,
			profile: {
				securityQuestion: {
					id: this.securityQuestion.id,
					content: this.securityQuestion.content
				},
				securityAnswer: this.securityAnswer
			}
		}, function(err, res) {
			if(err) {
				// return this.showErrorPopup(err);
				return;
			}
			// return this.showSuccessPopup();
			return showSuccessPopup()
		})

	}

	function showInvalidPopup() {
		var invalidPopup = $ionicPopup.alert({
			title: "Invalid data",
			template: '<div>Please enter all fields.</div>',
			cssClass: 'text-center'
		});
		invalidPopup.then((res) => {
			console.log('Compliance will be rewarded.');
		});
	}

	function showSuccessPopup() {
		var successPopup = $ionicPopup.alert({
			title: "User created",
			template: '<div>Step 1 completed!</div>',
			cssClass: 'text-center'
		});
		successPopup.then((res) => {
			console.log('Compliance will be rewarded.');
		});
	}

	function showErrorPopup(err) {
		var errorPopup = $ionicPopup.alert({
			title: "User not created",
			template: '<div>'+ err + '</div>',
			cssClass: 'text-center'
		});
		errorPopup.then((res) => {
			console.log('Compliance will be rewarded.');
		});
	}

}