//CONTROLLERS

movieApp.controller('homeController',['$scope','$location','movieService', function($scope,$location, movieService){

	$scope.movie = movieService.movie;
	$scope.type = movieService.type;
	$scope.$watch('movie', function(){
		movieService.movie = $scope.movie;

	});
	$scope.$watch('type', function(){
		movieService.type = $scope.type;
	});


	$scope.submit = function(){
		$location.path("/movie")
	}

}]);

movieApp.controller('movieController',['$scope','$routeParams','iMoviesService','movieService', function($scope,$routeParams,iMoviesService,movieService){

	$scope.movie = movieService.movie;
	$scope.type = movieService.type;
	$scope.desc = $routeParams.desc || "short";

	$scope.movieResult = iMoviesService.GetMovies($scope.movie,$scope.desc,$scope.type);

}]);

