angular.module('bonuspoint').directive('detectGestures', function($ionicGesture) {
  return {
    restrict :  'A',

    link : function(scope, elem, attrs) {
      var gestureType = attrs.gestureType;

      switch(gestureType) {
        case 'swipe':
          $ionicGesture.on('swipe', scope.reportEvent, elem);
          break;
        case 'swiperight':
          $ionicGesture.on('swiperight', scope.reportEvent, elem);
          break;
        case 'swipeleft':
          $ionicGesture.on('swipeleft', scope.reportEvent, elem);
          break;
        case 'doubletap':
          $ionicGesture.on('doubletap', scope.reportEvent, elem);
          break;
        case 'tap':
          $ionicGesture.on('tap', scope.reportEvent, elem);
          break;
      	case 'drag':
          $ionicGesture.on('drag', scope.reportEvent, elem);
          break;
        case 'scroll':
          $ionicGesture.on('scroll', scope.reportEvent, elem);
          break;
      }
    }
  }
})

angular.module('bonuspoint').directive('myDialog', function() {
	return {
		restrict: 'E',
		// transclude: true,
		scope: {
	      selFile: '=selectedFile'
	    },
		templateUrl: 'client/views/test/my-dialog.html',
		link: function(scope, element, attrs) {
			element.children('input[type=file]').on('change',function(event) {
				scope.selectedFile = event.target.files[0];
		       	console.log('File: ', scope.selectedFile)
		        scope.$apply();
			})
		}
	};
});

angular.module('bonuspoint').directive('fileupload', [ function() {
    return {
        restrict:'E',
      	templateUrl:'client/views/test/fileupload.html',
        transclude: true,
        replace:true,
        scope: {
            selectedFile: '=',
            get: '&getFile'
        },
        // controller: ['$scope', function($scope ){
        //   console.log($scope.filename);
        //   console.log($scope.file);
        // }],
        link: function($scope, element, attrs) {
		    element.children('input[type=file]').on('change',function(event) {
		        console.log('fire! angular#element change event');
		       
		       	var file = event.target.files[0];
		       	$scope.file = file;
		       	// $scope.selectedFile = file.name;
            $scope.selectedFile = file;
		       	console.log('File: ', file, $scope.selectedFile)
		        $scope.$apply();
		        console.log('Inner scope', $scope)
		    });

		    $scope.getFile = function() {
		    	return $scope.file;
		    }
		    
		    element.children('.button').on('click',function(event) {
		        console.log('fire! angular#element click event');
		        ionic.trigger('click', { target: document.querySelector('.fileupload') });
		    });
        }
    };
}]);

