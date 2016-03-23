angular.module('bonuspoint').directive('ngResizable', function() {
	var config = { containment: "#editArea" }
	return {
		restrict: 'A',
		scope: true,
		link: function postLink(scope, elem) {
			elem.resizable(config);
		}
	};	
});