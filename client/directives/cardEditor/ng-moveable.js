angular.module('bonuspoint').directive('ngMoveable', function() {
	var config = { containment: "#editArea", scroll: false, stack: '#editArea div'}
	return {
		restrict: 'A',
		scope: true,
		link: function postLink(scope, elem) {
			elem.draggable(config);
		}
	};	
});