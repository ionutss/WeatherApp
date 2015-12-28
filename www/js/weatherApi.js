angular.module('weather-app')
	.factory('weatherApi', ['$http', function($http){
		return {
			getData: function(lat, lon, callback){
			//$http.get("http://api.openweathermap.org/data/2.5/weather?q=cluj-napoca&appid=2b32e0eaebf4117e246f1a3d85e6b970")
				$http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=2b32e0eaebf4117e246f1a3d85e6b970")
					.then(function(response){
						callback(response.data);
					})
					.catch(function(){
						console.log("Error while making HTTP request");
					});
			},
			getForecast: function(lat, lon, callback){
				$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&units=metric&cnt=15&appid=2b32e0eaebf4117e246f1a3d85e6b970")
					.then(function(response){
						callback(response.data);
					})
					.catch(function(){
						console.log("Error while making HTTP request");
					});
			}
		}
		
	}]);