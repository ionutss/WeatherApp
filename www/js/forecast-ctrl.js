angular.module('weather-app')
	.controller('ForecastCtrl', ['$scope', 'weatherApi', '$cordovaGeolocation', function($scope, weatherApi, $cordovaGeolocation){

		$scope.vm = 
		{
			forecast: null
		};
		var geoPos;

		$cordovaGeolocation.getCurrentPosition()
			.then(function(position){
				geoPos = position.coords;
				weatherApi.getForecast(geoPos.latitude, geoPos.longitude, function(data){
					console.log(data);
					for(var i = 0; i< data.list.length; i++){
						data.list[i].dt = new Date(1000 * data.list[i].dt).toLocaleDateString(); 
					}
					$scope.vm.forecast = data;
				});
			});
		
		
	}]);