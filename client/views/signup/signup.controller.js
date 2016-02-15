angular.module('bonuspoint').controller('SignupCtrl', SignupCtrl);

function SignupCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.signup = signup;
	this.registerBusiness = registerBusiness;
	this.createProfile = createProfile;
	this.setProfileData = setProfileData;
	
	this.securityQuestions = [{
		id: 1,
		content: 'Which street did you grow up on?'
	}, {
		id: 2,
		content: 'What is your favorite color?'
	}];
	this.countries = [{	id: 1, name: 'Hong Kong' }, { id: 2, name: 'China' }];
	this.ownerIdTypes = [{ id: 1, name: 'Government ID' }, { id: 2, name: 'Other ID' }];
	this.salutations = [{ id: 1, name: 'Mr.' }, { id: 2, name: 'Ms.' }, { id: 3, name: 'Mrs.' }];

	this.securityQuestion = this.securityQuestions[0];
	this.business = {
		country: this.countries[0]
	}
	this.profile = {
		country: this.countries[0],
		ownerIdType: this.ownerIdTypes[0],
		salutation: this.salutations[0]
	}

	function signup() {

		if(_.isEmpty(this.email) || _.isEmpty(this.password) || _.isEmpty(this.confirmPassword)) {
			return showInvalidPopup();
		}
		if(this.password !== this.confirmPassword) {
			return showInvalidPopup();
		}
		if(!this.terms) {
			return showInvalidPopup();
		}

		var userData = {
			email: this.email,
			password: this.password,
			profile: {
			// 	securityQuestion: {
			// 		id: this.securityQuestion.id,
			// 		content: this.securityQuestion.content
			// 	},
			// 	securityAnswer: this.securityAnswer
			}
		}
		console.log(userData)

		Accounts.createUser(userData, function(err, res) {
			if(err) {
				console.log('signup failed', err);
				return showErrorPopup(err, 'Something went wrong');
			}
			console.log('User created', Meteor.user());
			return $state.go('signup-step-2');
		});

	}

	function registerBusiness() {
		console.log('IN BUSINESS');
		console.log(this.business);
		
		Meteor.call('registerBusiness', this.business, function(err, res) {
			if(err) {
				console.log('Error', err);
				return showErrorPopup(err, 'Something went wrong');
			}
			console.log('Success', res, Meteor.user());
			return $state.go('signup-step-3');
		});
	}

	function createProfile() {

		console.log('IN PROFILE')
		console.log(this.profile)

		Meteor.call('createProfile', this.profile, function(err, res) {
			if(err) {
				console.log('Error', err);
				return showErrorPopup(err, 'Something went wrong');
			}
			console.log('Success', res);
			showSuccessPopup();
			return $state.go('dashboard');
		});
	}

	function setProfileData(profile) {
		console.log('setting profile data');

		Meteor.call('getBusinessAddress', function(err, res) {
			if(err) {
				return console.log('Error setting address', err);
			}
			console.log('Success', res);
			console.log(profile);

			var fetchedAddress = res.address;
			profile.line1 = fetchedAddress.line1;
			profile.line2 = fetchedAddress.line2;
			profile.city = fetchedAddress.city;
			profile.state = fetchedAddress.state;
			profile.postalCode = fetchedAddress.postalCode;
			profile.country.name = fetchedAddress.country;
		});
	}

	function showInvalidPopup() {
		var invalidPopup = $ionicPopup.alert({
			title: "Invalid data",
			template: '<div>Please enter all fields.</div>',
			cssClass: 'text-center'
		});
		invalidPopup.then((res) => {
			console.log('Closed invalid data pop-up.');
		});
	}

	function showSuccessPopup() {
		var successPopup = $ionicPopup.alert({
			title: "Registration complete",
			template: '<div>Welcome to BonusPoint!</div>',
			cssClass: 'text-center'
		});
		successPopup.then((res) => {
			console.log('Registration complete');
		});
	}

	function showErrorPopup(err, title) {
		var errorPopup = $ionicPopup.alert({
			title: title,
			template: '<div>'+ err.reason + '</div>',
			cssClass: 'text-center'
		});
		errorPopup.then((res) => {
			console.log('Closed error pop-up.');
		});
	}

}