angular.module('bonuspoint').controller('TestCtrl', TestCtrl);

function TestCtrl($scope, $reactive, $state, $stateParams, $ionicLoading, $ionicPopup, $log, 
	$cordovaBarcodeScanner, $ionicGesture, $timeout, History, testService, $rootScope, CARD_CONSTANTS) {

	$reactive(this).attach($scope);

	this.card = {};
	this.cardModel = {};

	this.subscribe('cards', () => [], {
		onReady: function() {
			// console.log('CARDS READY')
		}
	});
	this.subscribe('cardModels', () => [], {
		onReady: function() {
			// console.log('CARD MODELS READY')
		}
	});

	this.autorun(() => {
		this.card = Cards.findOne();
		this.cardModel = CardModels.findOne();	
	});

	//////////////////  CARD  //////////////////

	this.cardFront = true;
	this.flipCard = flipCard;
	function flipCard() {
		this.cardFront = !(this.cardFront);
	}

	//////////////////  CARD MODEL  //////////////////

	this.cardModelFront = true;
	this.flipModel = flipModel;
	function flipModel() {
		this.cardModelFront = !(this.cardModelFront);
	}

	// border:2px solid blue; padding: 100px; background-color: lightblue

	//////////////////  FLIP + SWIPE  //////////////////

	this.onSwipe = onSwipe;
	this.onSwipeRight = onSwipeRight;
	this.onSwipeLeft = onSwipeLeft;
	function onSwipe() {
		console.log('SWIPED');
		$rootScope.$broadcast('FLIP_IT');
	}
	function onSwipeRight() {
		console.log('SWIPED RIGHT');
		$rootScope.$broadcast('FLIP_RIGHT');
	}
	function onSwipeLeft() {
		console.log('SWIPED LEFT');
		$rootScope.$broadcast('FLIP_LEFT');
	}

	////////////////// SCREEN ORIENTATION //////////////////
	this.getOrientation = getOrientation;
	this.landscape = landscape;
	this.portrait = portrait;
	this.unlockOrientation = unlockOrientation;
	this.webLandscape = webLandscape;
	this.webPortrait = webPortrait;

	function getOrientation() {
		console.log(screen.orientation.type)
	}

	function landscape() {
		if (!Meteor.isCordova) {
			return false;
		}
		screen.lockOrientation('landscape');
	}

	function portrait() {
		if (!Meteor.isCordova) {
			return false;
		}
		screen.lockOrientation('portrait');
	}

	function unlockOrientation() {
		if (!Meteor.isCordova) {
			return false;
		}
		screen.unlockOrientation();
	}

	function webLandscape() {
		screen.orientation.lock('landscape');	
		// screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
		// if (screen.lockOrientationUniversal("landscape-primary")) {
		//   // orientation was locked
		//   console.log('SUCCESS')
		// } else {
		//   // orientation lock failed
		//   console.log('FAILED')
		// }
	}

	function webPortrait() {
		screen.orientation.lock('portrait');	
		// screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
		// if (screen.lockOrientationUniversal("portrait-primary")) {
		//   // orientation was locked
		//   console.log('SUCCESS')
		// } else {
		//   // orientation lock failed
		//   console.log('FAILED')
		// }	
	}

	////////////////// CUSTOM FILE UPLOAD //////////////////
	
	// $scope.selectedFile = {};
	$scope.fileName = {};
	this.getFile = getFile;
	$scope.images = [];

	function getFile() {
		console.log('Getting file');
		console.log($scope)
		console.log($scope.selectedFile);
	}

	$scope.fileChange = function(file) {
		console.log('File changed!', file);
	}

	this.upload = (file) => {
		console.log('adding files')
		if (file) {
			Documents.insert(file, function(err, result) {
				console.log('File uploaded')
				console.log(err, result)
				console.log($scope.images)
				$scope.images.push(result._id);
				console.log($scope.images);
			});
		}
	};

	this.addImages = (files) => {
		console.log('adding files')
		if (files.length > 0) {
			Documents.insert(files[0], function(err, result) {
				console.log('File uploaded')
				console.log(err, result)
				console.log($scope.images)
				$scope.images.push(result._id);
				console.log($scope.images);
			});
		}
	};

	// doesn't work

	// this.file = null;
	this.click = click;
	function click() {
		console.log('Button clicked');
		console.log(this.file);
	}
	
	// doesn't work
	
	////////////////// GridFS //////////////////

	this.getImages = getImages;

	function getImages() {
		console.log('Getting images');
		this.image = Documents.findOne();
		console.log('Image', this.image);
		// this.images = Documents.find().fetch();
		// console.log('Images', this.images);
	}

	////////////////// SERVICES //////////////////

	this.setService = setService;
	this.getService = getService;
	this.serviceData = {};
	this.controllerData = {	key: 'has a value' };
	
	function setService() {
		console.log('Setting service');
		testService.set(this.controllerData);
	}

	function getService() {
		console.log('Getting service');
		this.serviceData = testService.get();
		console.log('Got data: ', this.serviceData);
	}

	/////////////////// CARD MODEL //////////////////

	// this.getCard = getCsard;
	// this.card = {};
	
	// function getCard () {
	// 	console.log('getting card')
	// 	console.log('THIS 1', this)
	// 	Meteor.call('getCard', this.$bindToContext(function(err, res) {
	// 		console.log(err, res);
	// 		this.card = res;
	// 	}));
	// }

	////////////////// HISTORY: Simple ///////////////////

	$scope.foo = 'bar'; 
	$scope.count = 0;
    History.watch('foo', $scope);
    History.watch('count', $scope);

    $scope.changeFoo = function() {
    	$scope.count = $scope.count + 1;
    	$scope.foo = 'bar' + $scope.count;
    }

    $scope.undo = function() {
    	History.undo('foo', $scope);
    	History.undo('count', $scope);
    }

    $scope.redo = function() {
    	History.redo('foo', $scope);
    	History.redo('count', $scope);
    }

	/////////////////// HISTORY: Object //////////////////

	$scope.qux = {
		value: 'norf',
		array: [{ id: 0, name: "john" },{ id:1, name: "lock" }]
	} 
	$scope.baz = 0;
    History.watch('baz', $scope);
    History.watch('qux', $scope);

    $scope.changeBaz = function() {
    	$scope.baz = $scope.baz + 1;
    	$scope.qux.value = 'norf' + $scope.baz;
    }

    $scope.changeArray = function() {
    	$scope.baz = $scope.baz + 1;
    	$scope.qux.array.push({ id: $scope.baz, name: $scope.qux.value })
    }

    $scope.undo2 = function() {
    	History.undo('baz', $scope);
    	History.undo('qux', $scope);
    }

    $scope.redo2 = function() {
    	History.redo('baz', $scope);
    	History.redo('qux', $scope);
    }

	////////////////// DRAGGABLE + RESIZABLE ///////////////////

	$('#drag-e-1').draggable();
	$('#drag-e-2').draggable();
	$('#drag-e-1').resizable();
	$('#drag-e-2').resizable();

	$scope.getData = function() {
		var pos = $('#drag-e-1').position();
		// console.log('Position', pos);
		console.log(pos.top);
		console.log(pos.left);
	}

	////////////////// MISCELLANEOUS ///////////////////

	/*
	this.addTestImages = (files, imageFor) => {
		console.log('adding files', files, imageFor)
		if (files.length > 0) {
			imageUpload(files[0], function(err, result) {
				console.log(images);
				images.push(result._id);
				console.log(images);
			});
		}
	};

	function imageUpload(files, callback) {
		Documents.insert(files[0], function(err, result) {
			console.log('File uploaded', err, result);
			return callback(err, result);
		});
	}

	*/

	// this.images = (this.images || {}).map((image) => {
	// 	return image._id;
	// });



	// this.saveImage = () => {
	// 	if (this.myImage !== '') {
	// 		Images.insert(this.myImage, (err, fileObj) => {
	// 			console.log('inserting image')
	// 			if (!this.images) {
	// 				this.images = [];
	// 			}

	// 			this.images.push(fileObj);
	// 			this.imgSrc = undefined;
	// 			this.myImage = '';
	// 		});
	// 	}
	// };

}
