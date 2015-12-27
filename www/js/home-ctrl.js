angular.module('weather-app')
	.controller('HomeCtrl', ['$scope', '$ionicPopup', '$cordovaSocialSharing', function($scope, $ionicPopup, $cordovaSocialSharing){

		$scope.share = function(){
			$ionicPopup.confirm({
              title: 'Share screen!',
              template: 'You are about to share a screenshot on social media.'
            })
            .then(function(res){
            	if(res){

            		$cordovaSocialSharing.share("bal bla", "awala", null, "http://asd");
            		console.log(window.plugins);

            		//window.plugins.socialsharing.share(null, null, 'file://' + r.filePath);
            	}
            });
		};
	}])