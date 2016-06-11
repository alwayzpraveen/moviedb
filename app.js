// MODULE
var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

//ROUTES
weatherApp.config(function ($routeProvider){

	$routeProvider

	.when('/',{
		templateUrl: 'layouts/home.htm',
		controller:'homeController'
	})
	.when('/forecast',{
		templateUrl: 'layouts/forecast.htm',
		controller:'forecastController'
	})
});

//CONTROLLERS

weatherApp.controller('homeContoller',['$scope', function(){

}]);

weatherApp.controller('forecastContoller',['$scope', function(){

}]);
