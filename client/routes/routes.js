angular
.module('bonuspoint')
.config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$stateProvider
	.state('verify-email', {
		url: "/verify-email/:token"
	})
	.state('root', {
		url: '',
		templateUrl: 'client/views/root/root.html',
		controller: 'RootCtrl as root',
		abstract: true
	})
	.state('root.home', {
		url: '',
		resolve: {
			user: isAuthorized
		},
		abstract: true,
		templateUrl: 'client/views/home/home.html',
		controller: 'HomeCtrl as home',
	})
	.state('root.home.dashboard', {
		url: '/dashboard',
		views: {
			'tab-dashboard': {
				templateUrl: 'client/views/dashboard/dashboard.html',
				controller: 'DashboardCtrl as dashboard'
			}
		}
	})
	.state('root.home.shop', {
		url: '/shop',
		views: {
			'tab-shop': {
				templateUrl: 'client/views/shop/shop.html',
				controller: 'ShopCtrl as shopCtrl'  
			}
		}
	})
	.state('root.home.cards', {
		url: '/cards',
		views: {
			'tab-cards': {
				templateUrl: 'client/views/cards/cards.html',
				controller: 'CardsCtrl as cardsCtrl'  
			}
		}
	})
	.state('root.home.test', {
		url: '/test',
		views: {
			'tab-test': {
				templateUrl: 'client/views/test/test.html',
				controller: 'TestCtrl as test'  
			}
		}
	})
	.state('root.editor', {
		url: '',
		resolve: {
			user: isAuthorized,
			screenOrientation: function() {
				if (Meteor.isCordova) {
					screen.lockOrientation('landscape');
				}				
			}
		},
		abstract: true,
		templateUrl: 'client/views/editor/editor.html',
		controller: 'EditorCtrl as editor'
	})
	.state('root.editor.card', {
		url: '/card-editor',
		views: {
			'card-editor': {
				templateUrl: 'client/views/cardEditor/cardEditor.html',
				controller: 'CardEditorCtrl as cardEditor'  
			}
		}
	})
	.state('login', {
		url: '/login',
		templateUrl: 'client/views/login/login.html',
		controller: 'LoginCtrl as logger',
		resolve: {
			user: isNotUser
		}
	})
	.state('signup', {
		url: '/signup',
		templateUrl: 'client/views/signup/signup-step-1.html',
		controller: 'SignupCtrl as signup',
		resolve: {
			user: isNotUser
		}
	})
	.state('signup-step-2', {
		url: '/signup/step-2',
		templateUrl: 'client/views/signup/signup-step-2.html',
		controller: 'SignupCtrl as signup',
		resolve: {
			user: registrationStepTwo
		}
	})
	.state('signup-step-3', {
		url: '/signup/step-3',
		templateUrl: 'client/views/signup/signup-step-3.html',
		controller: 'SignupCtrl as signup',
		resolve: {
			user: registrationStepThree
		}
	})

	$urlRouterProvider.otherwise('dashboard');


	////////////

	function isNotUser($q) {
		let deferred = $q.defer();
		if (_.isEmpty(Meteor.user())) {
			console.log('Login required');
			// Meteor.logout();
			deferred.resolve();
		}
		else {
			deferred.reject('USER_IS_LOGGED_IN');      
		}
		return deferred.promise;
	}

	function isAuthorized($auth) {
		return $auth.requireValidUser(function(user) {
			if(!user.profile.activated) {
				if(!user.profile.businessRegistered) {
					return 'NEW_REGISTRATION_STEP_2';
				} 
				else {
					return 'NEW_REGISTRATION_STEP_3';
				}
			} else {
				return true;
			}
		});
	}

	function registrationStepTwo($auth) {
		return $auth.requireValidUser(function(user) {
			if(user.profile.activated) {
				return 'ALREADY_ACTIVE_USER';
			} else if(user.profile.businessRegistered) {
				return 'NEW_REGISTRATION_STEP_3';
			} else {
				return true;
			}
		});
	}

	function registrationStepThree($auth) {
		return $auth.requireValidUser(function(user) {
			if(user.profile.activated) {
				return 'ALREADY_ACTIVE_USER';
			} else if(!user.profile.businessRegistered) {
				return 'NEW_REGISTRATION_STEP_2';
			} else {
				return true;
			}
		});
	}

}

