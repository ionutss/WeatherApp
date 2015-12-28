angular.module('weather-app')
    .controller('LocationsCtrl', ['$scope', '$cordovaGeolocation', '$http', '$ionicPopup', 'weatherApi', function($scope, $cordovaGeolocation, $http, $ionicPopup,weatherApi) {
        $scope.vm = {
            city: '',
            savedLocations: []
        };

        $cordovaGeolocation.getCurrentPosition()
            .then(function(position) {
                console.log(position);
               
                console.log($scope.vm.currentPosition);
                weatherApi.getData(position.coords.latitude, position.coords.longitude, function(data){
                	$scope.vm.currentPosition = data.name;
                });
            });
        $scope.showPopup = function() {
            var myPopup = $ionicPopup.show({
                template: '<input ng-model="vm.city">',
                title: 'Enter a city name',
                scope: $scope,
                buttons: [{
                    text: 'Cancel'
                }, {
                    text: '<b>Find</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.vm.city) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.vm.city + "&appid=2b32e0eaebf4117e246f1a3d85e6b970")
                                .then(function(response) {
                                    if (response.data.name) {
                                        $scope.vm.savedLocations.push(response.data.name);
                                    } else {
                                        $ionicPopup.alert({
                                            title: 'Error',
                                            template: 'Sorry no location was found.'
                                        });
                                    }
                                })
                                .catch(function(err) {
                                    console.log('err');
                                });
                        }
                    }
                }]
            });
        }




    }]);
