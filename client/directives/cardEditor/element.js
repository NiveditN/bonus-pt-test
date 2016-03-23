angular.module('bonuspoint').directive('testElement', function() {
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'client/directives/cardEditor/element.html'
	}
});

/*angular.module('bonuspoint').directive('ngResizable', function factory(injectables) {
	console.log('HERE 1')
	var directiveDefinitionObject = {
		priority: 0,
		template: '<div></div>', // or // function(tElement, tAttrs) { ... },
		// or
		// templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
		transclude: false,
		restrict: 'A',
		templateNamespace: 'html',
		scope: false,

		controller: function($scope, $element, $attrs, $transclude, otherInjectables) {
			// ...
		},
		controllerAs: 'stringIdentifier',
		bindToController: false,

		require: '^tempElement', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
		compile: function compile(tElement, tAttrs, transclude) {
			return {
				pre: function preLink(scope, iElement, iAttrs, controller) {
					// ...
				},
				post: function postLink(scope, iElement, iAttrs, controller) {
					// ...
				}
			}
			// or
			// return function postLink( ... ) { ... }
		},
		// or
		// link: {
		//  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
		//  post: function postLink(scope, iElement, iAttrs, controller) { ... }
		// }
		// or
		// link: function postLink( ... ) { ... }
	};
	return directiveDefinitionObject;
});*/