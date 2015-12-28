angular.module('weather-app')
	.controller('HomeCtrl', ['$scope', '$ionicPopup', '$cordovaSocialSharing', '$ionicPopover', 'weatherApi', '$cordovaGeolocation', function($scope, $ionicPopup, $cordovaSocialSharing, $ionicPopover, weatherApi, $cordovaGeolocation){

        $scope.vm =
        {
            tempC: 0,
            weather: null,
            location: null,
            icon: ''
        };

        var geoPos;

		$scope.share = function(){
			$ionicPopup.confirm({
              title: 'Share screen!',
              template: 'You are about to share a screenshot on social media.'
            })
            .then(function(res){
            	if(res){
            		$cordovaSocialSharing.share("bal bla", "awala", null, "http://asd");
            	}
            });
		};

        $ionicPopover.fromTemplateUrl('templates/location-popover.html', {
                scope: $scope
              }).then(function(popover) {
                $scope.popover = popover;
              });

        $scope.openPopover = function($event) {
                
                    $scope.popover.show($event);
                  };

        $cordovaGeolocation.getCurrentPosition()
            .then(function(position){
                geoPos = position.coords;
                weatherApi.getData(geoPos.latitude, geoPos.longitude, function(data){
                    console.log(data);
                     $scope.vm.weather = data;
                     $scope.vm.tempC =  Math.round( (data.main.temp - 273.15) * 10 ) / 10;
                     $scope.vm.iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                     $scope.vm.location = data.name;
                    return data;
                });
            });

        

       


	}]);