angular
  .module('bonuspoint')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'client/views/login/login.html',
      controller: 'LoginCtrl as logger'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'client/views/signup/signup-step-1.html',
      controller: 'SignupCtrl as signup'
    })
    .state('signup-step-2', {
      url: '/signup/step-2',
      templateUrl: 'client/views/signup/signup-step-2.html',
      controller: 'SignupCtrl as signup'
    })
    .state('signup-step-3', {
      url: '/signup/step-3',
      templateUrl: 'client/views/signup/signup-step-3.html',
      controller: 'SignupCtrl as signup'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'client/views/dashboard/dashboard.html'
    })
    /*.state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html',
      resolve: {
        user: isAuthorized,
        chats() {
          return Meteor.subscribe('chats');
        }
      }
    })
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chats.html',
          controller: 'ChatsCtrl as chats'
        }
      }
    })
    .state('tab.chat', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chat.html',
          controller: 'ChatCtrl as chat'
        }
      }
    })
    .state('confirmation', {
      url: '/confirmation/:phone',
      templateUrl: 'client/templates/confirmation.html',
      controller: 'ConfirmationCtrl as confirmation'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'client/templates/profile.html',
      controller: 'ProfileCtrl as profile',
      resolve: {
        user: isAuthorized
      }
    })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'client/templates/settings.html',
          controller: 'SettingsCtrl as settings',
        }
      }
    });*/

  $urlRouterProvider.otherwise('login');

  ////////////

  /*function isAuthorized($q) {
    let deferred = $q.defer();

    if (_.isEmpty(Meteor.user()))
      deferred.reject('AUTH_REQUIRED');
    else
      deferred.resolve();

    return deferred.promise;
  }*/
}