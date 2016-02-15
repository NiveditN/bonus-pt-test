angular
  .module('bonuspoint')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
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
        // user: isNewRegistration
        // user: isAuthorized, 
        // active: isInactive
      }
    })
    .state('signup-step-3', {
      url: '/signup/step-3',
      templateUrl: 'client/views/signup/signup-step-3.html',
      controller: 'SignupCtrl as signup',
      resolve: {
        user: registrationStepThree
        // user: isNewRegistration
        // user: isAuthorized, 
        // active: isInactive
      }
    })
    .state('home', {
      url: '/home',
      abstract: true,
      // templateUrl: 'client/views/dashboard/dashboard.html',
      // controller: 'HomeCtrl as home'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'client/views/dashboard/dashboard.html',
      resolve: {
        user: isAuthorized
      }
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

  $urlRouterProvider.otherwise('dashboard');

  ////////////

  function isAuthorized($q) {
    let deferred = $q.defer();

    if (_.isEmpty(Meteor.user()))
      deferred.reject('AUTH_REQUIRED');
    else if (!Meteor.user().profile.activated) {
      if(!Meteor.user().profile.businessRegistered)
        deferred.reject('NEW_REGISTRATION_STEP_2');
      else
        deferred.reject('NEW_REGISTRATION_STEP_3');
    }
    else
      deferred.resolve();

    return deferred.promise;
  }

  function isNewRegistration($q) {
    let deferred = $q.defer();

    if (_.isEmpty(Meteor.user()))
      deferred.reject('AUTH_REQUIRED');
    else if (Meteor.user().profile.activated)
      deferred.reject('ALREADY_ACTIVE_USER');
    else if (!Meteor.user().profile.activated) {
      if(!Meteor.user().profile.businessRegistered) 
        deferred.reject('NEW_REGISTRATION_STEP_2');
      else
        deferred.reject('NEW_REGISTRATION_STEP_3');
    }
    else
      deferred.resolve();

    return deferred.promise;
  }

  function registrationStepTwo($q) {
    let deferred = $q.defer();

    console.log('here')

    if (_.isEmpty(Meteor.user()))
      deferred.reject('AUTH_REQUIRED');
    else if (Meteor.user().profile.activated)
      deferred.reject('ALREADY_ACTIVE_USER');
    else if(Meteor.user().profile.businessRegistered) {
      console.log('here 2')
      deferred.reject('NEW_REGISTRATION_STEP_3');
    } else
      deferred.resolve();

    return deferred.promise;
  }

  function registrationStepThree($q) {
    let deferred = $q.defer();

    if (_.isEmpty(Meteor.user()))
      deferred.reject('AUTH_REQUIRED');
    else if (Meteor.user().profile.activated)
      deferred.reject('ALREADY_ACTIVE_USER');
    else if(!Meteor.user().profile.businessRegistered)
      deferred.reject('NEW_REGISTRATION_STEP_2');
    else
      deferred.resolve();

    return deferred.promise;
  }  

  function isNotUser($q) {
    let deferred = $q.defer();

    if (_.isEmpty(Meteor.user()))
      deferred.resolve();
    else
      deferred.reject('USER_IS_LOGGED_IN');      

    return deferred.promise;
  }

  // function isAuthorized($q) {
  //   let deferred = $q.defer();

  //   if (_.isEmpty(Meteor.user()))
  //     deferred.reject('AUTH_REQUIRED');
  //   else
  //     deferred.resolve();

  //   return deferred.promise;
  // }

  // function isInactive($q) {
  //   let deferred = $q.defer();

  //   if (Meteor.user().profile.activated)
  //     deferred.reject('ALREADY_ACTIVE_USER');
  //   else
  //     deferred.resolve();

  //   return deferred.promise;
  // }

}