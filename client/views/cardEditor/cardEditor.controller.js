angular.module('bonuspoint').controller('CardEditorCtrl', CardEditorCtrl);

function CardEditorCtrl($scope, $reactive, $state, $stateParams, $ionicLoading, $ionicPopup, $ionicModal, $log, 
	$ionicGesture, $timeout, History, testService, $timeout, $window) {

	var that = $reactive(this).attach($scope);
	// $reactive(this).attach($scope);
	
	this.keepRatio = keepRatio;
	this.setCardDimensionsByHeight = setCardDimensionsByHeight;
	this.initCardDimensions = initCardDimensions;
	this.cardModelDimensions = {
		height: '',
		width: ''
	}
	
	this.showRight = true;
	this.showLeft = true;
	this.showEditor = false;
	
	// responsiveness variables
	that.showLabels = true;				// shows labels under icons
	that.buttonSize = 'button-small';
	that.screenSize = '';
	that.sidebar = { width: '14%' } 	// or width: 'auto';
	// responsiveness variables

	this.toggleRight = toggleRight;
	this.toggleLeft = toggleLeft;
	this.toggleEditor = toggleEditor;

	this.showDescriptionPopup = showDescriptionPopup;
	this.showRuleSelectorModal = showRuleSelectorModal;
	this.hideRuleSelectorModal = hideRuleSelectorModal;
	this.toggleEditCardName = toggleEditCardName;
	this.toggleEditDescription = toggleEditDescription;
	this.showFrontSide = showFrontSide;
	this.showBackSide = showBackSide;
	this.insertElement = insertElement;

	this.editCardName = false;
	this.editDescription = false;
	this.frontSideActive = true;
	this.cardElements = [
		{ name: 'Text', icon: 'ion-document-text' }, 
		{ name: 'Image', icon: 'ion-image' }, 
		{ name: 'Field', icon: 'ion-pound' }
	];
	this.rules = [
		{ 
			name: 'Stamp Gift', 
			description: 'Description of Stamp Gift rule', 
			icon: 'ion-card', 
			type: 'A' 
		},
		{ 
			name: 'Reserve Point', 
			description: 'Description of Reserve Point rule', 
			icon: 'ion-star', 
			type: 'A' 
		},
		{ 
			name: 'In Effectivity Date', 
			description: 'Description of In Effectivity Date rule', 
			icon: 'ion-calendar', 
			type: 'B' 
		},
		{ 
			name: 'Stamp Gift 2', 
			description: 'Description of Stamp Gift rule', 
			icon: 'ion-card', 
			type: 'A' 
		},
		{ 
			name: 'Reserve Point 2', 
			description: 'Description of Reserve Point rule', 
			icon: 'ion-star', 
			type: 'A' 
		},
		{ 
			name: 'In Effectivity Date 2', 
			description: 'Description of In Effectivity Date rule', 
			icon: 'ion-calendar', 
			type: 'B' 
		}

	];
	this.backgroundOptions = {
		image: {
			name: 'placeholder.jpg'
		},
		color: '#ffffff',
		size: [
			{ name: 'Cover' },
			{ name: 'Contain' },
			{ name: 'Percentage' }
		],
		position: [
			{ name: 'left center' },
			{ name: 'left bottom' },
			{ name: 'right top' },
			{ name: 'right center' },
			{ name: 'right bottom' },
			{ name: 'center top' },
			{ name: 'center center' },
			{ name: 'center bottom' }
		],
		repeat: [
			{ name: 'Horizontal', value: 'repeat-x' },
			{ name: 'Vertical', value: 'repeat-y' },
			{ name: 'No-repeat', value: 'no-repeat' },
			{ name: 'Horizontal & Vertical', value: 'repeat-x repeat-y' }
		],
		percentage: 100
	};

	// Card Model Object
	// this.cardModel = {
	that.cardModel = {
		name: 'Card Model',
		description: '',
		front: {
			background: {
				style: {
					"background-color": "#98FB98",
					"background-image": "url('smiley.gif')",
					"background-repeat": "no-repeat",
					"background-attachment": "fixed",
					"background-position": "30% 20%",
				}
			}
		},
		back: {
			background: {
				style: {
					"background-color": "#FF6347",
					"background-image": "url('smiley.gif')",
					"background-repeat": "no-repeat",
					"background-attachment": "fixed",
					"background-position": "30% 20%"
				}
			}
		}
	};

	this.flip = flip;
	function flip() {
		this.frontSideActive = !(this.frontSideActive);
		console.log('Flipped!')
	}

	this.onSwipeRight = onSwipeRight;
	this.onSwipeLeft = onSwipeLeft;
	function onSwipeRight() {
		console.log('SWIPED RIGHT');
		$rootScope.$broadcast('FLIP_RIGHT');
	}
	function onSwipeLeft() {
		console.log('SWIPED LEFT');
		$rootScope.$broadcast('FLIP_LEFT');
	}	

	this.autorun(() => {
		// console.log('Autorun!!', this.getReactively('cardModel', true));
	});

	function init() {
		if($window.innerWidth <= 640) {
			console.log('Small screen detected');
			console.log(that.showLabels, that.sidebar)
			that.showLabels = false;
			that.sidebar['width'] = 'auto';
			that.buttonSize = 'button-small';
			that.topBarButtonSize = 'button-small';
			that.screenSize = 'small';
		} else if($window.innerWidth >= 1240) {
			console.log('Large screen detected');
			that.showLabels = true;
			that.sidebar['width'] = '14%';
			that.buttonSize = 'button-large';
			that.topBarButtonSize = '';
			that.screenSize = 'medium';
		}
		else {
			that.showLabels = true;
			that.sidebar['width'] = '14%';
			that.buttonSize = '';
			that.topBarButtonSize = '';
			that.screenSize = 'large';
		}
		console.log(that.showLabels, that.sidebar)
		$timeout(function() {
			console.log('Init')
			initCardDimensions();		
			keepRatio($('.cardModel'),0.6);
		}, 1000);		
	}

	function keepRatio(obj,ratio){
    	obj.height(Math.round(obj.width()*ratio));
	}
	function setCardDimensionsByHeight(height) {
		var h = height;
		var w = Math.round(height/(0.6));
		$('.cardModel').height(h);
		$('.cardModel').width(w);
		that.cardModelDimensions = {
			height: h,
			width: w
		}
		that.cardModel.front.background.style.height = h;
		that.cardModel.front.background.style.width = w;
		that.cardModel.back.background.style.height = h;
		that.cardModel.back.background.style.width = w;
		// console.log(that.cardModelDimensions)
	}
	function initCardDimensions() {
		var newCardHeight = $('#editor').height() - $('#topBar').height() - $('#bottomBar').height() - 40;
		// console.log(newCardHeight);
		setCardDimensionsByHeight(newCardHeight);
	}

	function toggleRight() {
		this.showRight = !(this.showRight);
	}
	function toggleLeft() {
		this.showLeft = !(this.showLeft);
	}
	function toggleEditor() {
		function resizeCanvas(obj, height) {
			obj.height(obj.height() + height);
			obj.width(Math.round(obj.height()/(0.6)));
		}
		if (this.showEditor) {
	    	var canvasHeight = $('#elementEditor').height();
	        resizeCanvas($('.cardModel'), canvasHeight);
	        this.showEditor = false;
		} 
		else {
			this.showEditor = true;
			$timeout(function() {
		    	var canvasHeight = $('#elementEditor').height();
				canvasHeight = 0 - canvasHeight;
				resizeCanvas($('.cardModel'), canvasHeight);
			}, 100);
		}		
	}

	function toggleEditCardName() {
		console.log('tapped')
		if(this.cardModel.name.length <= 0) {
			return false;
		}
		this.editCardName = !(this.editCardName);
	}
	function toggleEditDescription() {
		this.editDescription = !(this.editDescription);
	}
	function showFrontSide() {
		this.frontSideActive = true;
	}
	function showBackSide() {
		this.frontSideActive = false;
	}

	function showDescriptionPopup() {
		$scope.data = {	
			description: this.cardModel.description	
		};
		var descriptionPopup = $ionicPopup.show({
			template: '<textarea ng-model="data.description"></textarea>',
			title: 'Enter Card Model description',
			scope: $scope,
			buttons: [
				{ text: 'Cancel' },
				{
					text: '<b>Save</b>',
					type: 'button-positive',
					onTap: function(e) {
						return $scope.data.description;
					}
				}
			]
		});
		descriptionPopup.then(this.$bindToContext(function(res) {
			this.cardModel.description = res;
		}));
	};

	// Modal 
	$ionicModal.fromTemplateUrl('rule-selector-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.ruleSelectorModal = modal;
	});

	function showRuleSelectorModal() {
		$scope.ruleSelectorModal.show();
	}
	function hideRuleSelectorModal() {
		$scope.ruleSelectorModal.hide();
	}

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		// Execute action
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
		// Execute action
	});

	this.background = {
		front: {
			image: '',
			color: this.cardModel.front.background.style['background-color'],
			size: '',
			position: '',
			repeat: '',
			percentage: ''
		},
		back: {
			image: '',
			color: this.cardModel.back.background.style['background-color'],
			size: '',
			position: '',
			repeat: '',
			percentage: ''
		}
	}

	this.bgColor = {
		front: {
			'background-color': this.$bindToContext(this.cardModel.front.background.style['background-color'])
		},
		back: {
			'background-color': this.$bindToContext(this.cardModel.back.background.style['background-color'])
		}
	}

	function insertElement() {
		console.log('Inserting element');
	}

	this.getData = function() {
		console.log('Card Model', this.cardModel);
		console.log('Selected', this.background);
		console.log('Color', this.bgColor);
		console.log($window.innerWidth,  $window.innerHeight);
		console.log(that.sidebar, that.showLabels);
	}

	$(document).ready(function(){
		keepRatio($('.cardModel'),0.6);
	    $(window).resize(function(){
	    	keepRatio($('.cardModel'),0.6);
	    	initCardDimensions();
	    	init();
	    });
	    $('#editor').resize(function(){
	        keepRatio($('.cardModel'),0.6);
	    	initCardDimensions();
	    	init();
	    });	
	    $('.cardModel').resize(function(){
	        keepRatio($('.cardModel'),0.6);
	    	initCardDimensions();
	    	init();
	    });
		initCardDimensions();	 
	});

	init();
	// that.$bindToContext(init());
	// this.$bindToContext(init());

}


