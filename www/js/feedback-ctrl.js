angular.module('weather-app')
    .controller('FeedbackCtrl', ['$scope', '$ionicPopup', function($scope, $ionicPopup) {
    		$scope.vm ={
    			feedback : ''
    		};
            $scope.send = function() {
                $scope.vm.feedback = '';
                $ionicPopup.alert({
                    title: 'Thank you',
                    template: 'Your feedback was succesfully sent.'
                });
            };
    }]);
