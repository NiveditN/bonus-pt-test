angular.module('bonuspoint').controller('SignupCtrl', SignupCtrl);

function SignupCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log, BUSINESS_CONSTANTS) {
	$reactive(this).attach($scope);

	$scope.imageIdFront = null;
	$scope.imageIdBack = null;
	$scope.businessDocument = null;

	this.signup = signup;
	this.registerBusiness = registerBusiness;
	this.createProfile = createProfile;
	this.setProfileData = setProfileData;
	this.goToLogin = goToLogin;
	
	this.securityQuestions = BUSINESS_CONSTANTS.securityQuestions;
	this.countries = BUSINESS_CONSTANTS.countries;
	this.ownerIdTypes = BUSINESS_CONSTANTS.ownerIdTypes;
	this.salutations = BUSINESS_CONSTANTS.salutations;

	this.securityQuestion = this.securityQuestions[0];
	this.business = {
		country: this.countries[0],
		businessDocument: $scope.businessDocument
	}
	this.profile = {
		country: this.countries[0],
		ownerIdType: this.ownerIdTypes[0],
		salutation: this.salutations[0],
		imageFront: $scope.imageIdFront,
		imageBack: $scope.imageIdBack
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

		Meteor.call('createUser', userData, function(err, res) {
			if(err) {
				console.log('Error', err);
				if(err.reason === "Login forbidden") {
					return checkStatus(userData);
				}
				return showErrorPopup(err, 'Something went wrong');
			}
			console.log('User created', Meteor.user(), 'Verify email');
		})
	}

	function checkStatus (userData) {
		showVerificationPopup(userData.email, function() {
			Meteor.loginWithPassword(userData.email, userData.password, function(err, res) { 
				if(err) {
					console.log('Error', err);
					if(err.reason === 'Login forbidden') {
						return checkStatus(userData);
					}
					return showErrorPopup(err.reason);					
				}
				console.log('Login success', res, Meteor.user());
				return $state.go('signup-step-2');	
			});
		});
	}

	function registerBusiness() {

		// || _.isEmpty(this.business.established)
		if( _.isEmpty(this.business.storeName) || _.isEmpty(this.business.licenseNumber) 
			|| _.isEmpty(this.business.line1) || _.isEmpty(this.business.line2) || _.isEmpty(this.business.city) 
			|| _.isEmpty(this.business.state) || _.isEmpty(this.business.postalCode) ) {
			return showInvalidPopup();
		} else {

			this.business.businessDocument = $scope.businessDocument;
			console.log('IN BUSINESS');
			console.log(this.business);

			// return false;
			
			Meteor.call('registerBusiness', this.business, function(err, res) {
				if(err) {
					console.log('Error', err);
					return showErrorPopup(err, 'Something went wrong');
				}
				console.log('Success', res, Meteor.user());
				return $state.go('signup-step-3');
			});
		}
	}

	function createProfile() {

		// || _.isEmpty(this.profile.dateOfBirth) || _.isEmpty(this.profile.mobile) 
		if( _.isEmpty(this.profile.firstName) || _.isEmpty(this.profile.middleName) || _.isEmpty(this.profile.lastName) 
			|| _.isEmpty(this.profile.line1)
			|| _.isEmpty(this.profile.line2) || _.isEmpty(this.profile.city) || _.isEmpty(this.profile.state)
			|| _.isEmpty(this.profile.postalCode) ) {
			return showInvalidPopup();
		} else {

			this.profile.imageFront = $scope.imageIdFront;
			this.profile.imageBack = $scope.imageIdBack;
			console.log('IN PROFILE')
			console.log(this.profile)

			// return false;

			Meteor.call('createProfile', this.profile, function(err, res) {
				if(err) {
					console.log('Error', err);
					return showErrorPopup(err, 'Something went wrong');
				}
				console.log('Success', res);
				showSuccessPopup();
				return $state.go('root.home.dashboard');
			});
		}
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

	function goToLogin() {
		return Meteor.logout();
	}

	this.addIdFront = (files) => {
		$scope.showLoader();
		console.log('adding files', files)
		if (files.length > 0) {
			Documents.insert(files[0], function(err, result) {
				console.log('File uploaded', err, result);
				$scope.imageIdFront = result._id;
				$scope.hideLoader();					
			});
		}
	};
	this.addIdBack = (files) => {	
		$scope.showLoader();	
		console.log('adding files', files)
		if (files.length > 0) {
			Documents.insert(files[0], function(err, result) {
				console.log('File uploaded', err, result);
				$scope.imageIdBack = result._id;	
				$scope.hideLoader();						
			});
		}
	};
	this.addBusinessDocument = (files) => {
		$scope.showLoader();
		console.log('adding files', files)
		if (files.length > 0) {
			Documents.insert(files[0], function(err, result) {
				console.log('File uploaded', err, result);
				$scope.businessDocument = result._id;
				$scope.hideLoader();		
			});
		}
	};

	$scope.showLoader = function() {
		$ionicLoading.show({
			template: 'Uploading File...'
		});
	};
	$scope.hideLoader = function(){
		$ionicLoading.hide();
	};

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

	function showVerificationPopup(email, callback) {
		console.log('Verif', email)
		var verificationPopup = $ionicPopup.alert({
			title: 'Verify your email',
			template: '<div> Please verify your email address before proceeding. </div>',
			cssClass: 'text-center',
			okText: 'Done!'
		});
		verificationPopup.then((res) => {
			if(res)	return callback();
		});
	}

}