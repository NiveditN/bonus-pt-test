angular.module('bonuspoint').controller('SignupCtrl', SignupCtrl);

function SignupCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.signup = signup;
	this.registerBusiness = registerBusiness;
	this.createProfile = createProfile;
	
	this.securityQuestions = [{
		id: 1,
		content: 'Which street did you grow up on?'
	}, {
		id: 2,
		content: 'What is your favorite color?'
	}];
	this.countries = [{	id: 1, name: 'Hong Kong'	}, { id: 2,	name: 'China' }];
	this.ownerIdTypes = [{ id: 1, name: 'Government ID' }, { id: 2, name: 'Other ID' }]

	this.securityQuestion = this.securityQuestions[0];
	this.business = {
		country: this.countries[0]
	}
	this.profile = {
		country: this.countries[0],
		ownerIdType: this.ownerIdTypes[0]
	}
	// this.businessCountry = this.countries[0];
	// this.profileCountry = this.countries[0];

	function signup() {

		return $state.go('signup-step-2');

		///////

		if(_.isEmpty(this.email) || _.isEmpty(this.password) || _.isEmpty(this.confirmPassword) || _.isEmpty(this.securityAnswer)) {
			return showInvalidPopup();
		}
		if(this.password !== this.confirmPassword) {
			return showInvalidPopup();
		}
		if(!this.terms) {
			return showInvalidPopup();
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
				return showErrorPopup();
			}
			// return showSuccessPopup();
			return $state.go('signup-step-2');
		})

	}

	function registerBusiness() {

		console.log('IN BUSINESS');
		console.log(this.business);

		// storeName, ownerName, established, licenseNumber, line1, line2, city, state, postalCode, country

		// insert business
		// insert established, address, licenseNumber
		Meteor.call('registerBusiness', this.business, function(err, res) {
			if(err) {
				return console.log('Error', err);
			}

			// update user 
			// insert businessId 
			// var this.businessId = res;

			// Meteor.call('registerBusinessId', this.businessId, function(err, res) {

			// })

			// Meteor.call('updateUserProfile')

			return console.log('Success', res);
		});

		// insert shop
		// insert name, ownerName, address, businessId

	}

	function createProfile() {

		console.log('IN PROFILE')
		console.log(this.profile)
		// country, name(3), gender, salutation, DOB, mobile, address, owner id proof

		// update business
		// insert ownerId information

		// update user 
		// insert profile with country, name(3), gender, salutation, DOB, mobile, address,

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