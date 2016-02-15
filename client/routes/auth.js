angular
  .module('bonuspoint')
  .run(run);

function run($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page

    console.log('AUTH ERROR', error)

    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
    if(error === 'NEW_REGISTRATION_STEP_2') {
      $state.go('signup-step-2'); 
    }
    if(error === 'NEW_REGISTRATION_STEP_3') {
      $state.go('signup-step-3'); 
    }
    if(error === 'ALREADY_ACTIVE_USER') {
    	$state.go('dashboard');
    }
    if(error === 'USER_IS_LOGGED_IN') {
    	$state.go('dashboard');	
    }
  });
}