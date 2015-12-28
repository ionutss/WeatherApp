angular.module('weather-app')
	.controller('HourlyCtrl', ['$scope', 'weatherApi', '$cordovaGeolocation', '$timeout', function($scope, weatherApi, $cordovaGeolocation, $timeout){

		$scope.vm = 
		{
			hourly: null
		};
		var geoPos;
		$timeout(function(){
				$cordovaGeolocation.getCurrentPosition()
			.then(function(position){
				geoPos = position.coords;
				weatherApi.getHourly(geoPos.latitude, geoPos.longitude, function(data){
					console.log(data);
					for(var i = 0; i< data.list.length; i++){
						data.list[i].dt = new Date(1000 * data.list[i].dt).toLocaleString(); 
						data.list[i].weather.icon = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"
					}
					$scope.vm.hourly = data;
				});
			});
		});
	
		
		
	}]);