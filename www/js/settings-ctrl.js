angular.module('weather-app')
	.controller('SettingsCtrl', ['$scope', function($scope){
		 $scope.active = 'item1';

		  $scope.setActive = function(type) {
		    $scope.active = type;
		  };

		  $scope.isActive = function(type){
		    return type === $scope.active;
		  };
		
	}])