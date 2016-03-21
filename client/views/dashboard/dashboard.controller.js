angular.module('bonuspoint').controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $ionicPopover, $log, $cordovaBarcodeScanner, $ionicPlatform, $meteor) {

	var that = $reactive(this).attach($scope);

	that.scanCode = scanCode;
    that.toggleView = toggleView;
    that.showAbortPopup = showAbortPopup;
    that.showErrorPopup = showErrorPopup;

	that.showOptions = false;
    that.actions = {
    	stamp: true,
    	card: true,
    	gift: false
    }
    that.isCordova = Meteor.isCordova;

	function toggleView(callback) {
		console.log('In toggle view');
		console.log(that.showOptions);
		that.showOptions = !that.showOptions;
		console.log(that.showOptions);
		console.log('Leaving toggle view');
	}
	
	function getShop() {
		Meteor.call('getShopByBusinessId', Meteor.user().profile.businessId, function(err, result) {
			if(err) {
				return console.log('Error', err);
			} 
			// console.log('Success', result);
			that.shop = result;
			console.log('Shop:', that.shop);
			return result.name;
		});
	}

	function scanCode() {		
		if (!Meteor.isCordova) {
			that.showErrorPopup('Scanning is available on mobile devices only.');
			return false;
		}
		console.log('Scanning QR Code');
		$cordovaBarcodeScanner.scan().then(function(barcodeData) {
			console.log('Success');
			// INFO: barcodeData = { text: 'text here', format: 'QR_CODE', cancelled: false }
			$meteor.call('scanData', barcodeData).then(
				function(data){
					console.log(that.showOptions);
					that.toggleView();	
					console.log(that.showOptions);
				},
				function(err){
					console.log('failed', err);
				}
			); 
		}, function(error) {
			console.log('Error in barcode scanning: ', error)				    
		});
	}	

	function showAbortPopup() {
		var abortPopup = $ionicPopup.confirm({
			title: "Abort",
			template: '<div>Are you sure you want to abort the current transaction?</div>',
			cssClass: 'text-center',
			okText: 'Yes',
			okType: 'button-positive button-clear',
			cancelText: 'Cancel',
      		cancelType: 'button-dark button-clear'
		});
		abortPopup.then((res) => {
			if(!res) return;
			console.log('Transaction canceled.');
			that.toggleView();
		});
	}

	function showErrorPopup(error) {
		var errorPopup = $ionicPopup.alert({
			title: "Error",
			template: '<div>' + error + '</div>',
			cssClass: 'text-center'
		});
		errorPopup.then((res) => {
			if(!res) return;
			console.log('Error popup closed.');
		});
	}

	var error = "This action is unavailable."
	// var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';
	var template = "<ion-popover-view style='height: 57px'> <ion-content> <div class='list'> <div class='item'>"  + error + "</div> </div> </ion-content> </ion-popover-view>";

	that.popover = $ionicPopover.fromTemplate(template, {
		scope: $scope
	});

	that.openPopover = function($event) {
		that.popover.show($event);
	};
	that.closePopover = function() {
		// that.popover.hide();
		that.popover.remove();
	};

}
