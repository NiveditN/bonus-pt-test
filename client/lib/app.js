angular
  .module('bonuspoint', [
    'angular-meteor',
    'angular-meteor.auth',
    'ui.router',
    'ionic',
    'angularMoment',
    'ngFileUpload',
    'ngCordova',
    'decipher.history',
    'ionic-color-picker',
    'angular-flippy'
  ]);

angular.module('bonuspoint').config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom')
});

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['bonuspoint']);
}