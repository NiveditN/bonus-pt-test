angular.module('bonuspoint').controller('AuthCtrl', AuthCtrl);

function AuthCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
	$reactive(this).attach($scope);

	this.signup = signup;
	this.getData = getData;

	this.values = [{
		id: 1,
		label: 'aLabel',
		subItem: { name: 'aSubItem' }
	}, {
		id: 2,
		label: 'bLabel',
		subItem: { name: 'bSubItem' }
	}];

	this.securityQuestion = { name: 'aSubItem' };

	function getData() {
		console.log('GETTING DATA')
		console.log(this.email)
	}

	function signup() {

		// all fields must be filled correctly

		// if(_isEmpty(this.email)) return;


	}


}