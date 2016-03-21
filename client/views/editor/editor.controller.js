angular.module('bonuspoint').controller('EditorCtrl', EditorCtrl);

function EditorCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log, $meteor, $rootScope, $ionicPopover, user) {
	$reactive(this).attach($scope);

	///////////////////////////////////// SUBSCRIPTIONS /////////////////////////////////////
	
	// documents
	this.subscribe('documents');
	
	///////////////////////////////////// SUBSCRIPTIONS /////////////////////////////////////

	this.exit = exit;

	function exit() {
		console.log('Exit Editor');
		if (Meteor.isCordova) {
			screen.unlockOrientation();
		}
		$state.go('root.home.dashboard');
	}

}