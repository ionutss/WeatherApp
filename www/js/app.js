// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('weather-app', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
	console.log(cordova.plugins);
	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

			// Don't remove this line unless you know what you are doing. It stops the viewport
			// from snapping when text inputs are focused. Ionic handles this internally for
			// a much nicer keyboard experience.
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();	
		}
	});
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.tabs.position('bottom');
	$stateProvider
	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html"
	})

	.state('app.home', {
		url: "/home",
		views: {
			"home": {
				templateUrl: "templates/home.html"
			}
		}
	})

	.state('app.settings', {
		url: "/settings",
		views: {
			"home": {
				templateUrl: "templates/settings.html"
			}
		}
	})

	.state('app.forecast', {
		url: "/forecast",
		views: {
			"home": {
				templateUrl: "templates/forecast.html"
			}
		}
	})

	.state('app.hourly', {
		url: "/hourly",
		views: {
			"home": {
				templateUrl: "templates/hourly.html"
			}
		}
	})

	.state('app.locations', {
		url: "/locations",
		views: {
			"home": {
				templateUrl: "templates/locations.html"
			}
		}
	});

	$urlRouterProvider.otherwise('/app/home');
});
