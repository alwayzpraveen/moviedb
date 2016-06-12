// MODULE
var movieApp = angular.module('movieApp', ['ngRoute','ngResource']);

//ROUTES
movieApp.config(function ($routeProvider){

	$routeProvider

	.when('/',{
		templateUrl: 'layouts/home.htm',
		controller:'homeController'
	})
	.when('/movie',{
		templateUrl: 'layouts/movie.htm',
		controller:'movieController'
	})
});

//CUSTOMSERVICES
movieApp.service('movieService', function(){

	this.movie = "";

});


//CONTROLLERS

movieApp.controller('homeController',['$scope','movieService', function($scope, movieService){

	$scope.movie = movieService.movie;
	$scope.$watch('movie', function(){
		movieService.movie = $scope.movie;
	});

}]);

movieApp.controller('movieController',['$scope','$resource','movieService', function($scope,$resource,movieService){

	$scope.movie = movieService.movie;

	$scope.MovieAPI =
		$resource("http://www.omdbapi.com/?",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
	$scope.movieResult = $scope.MovieAPI.get({t: $scope.movie, plot: 'short'});


}]);
