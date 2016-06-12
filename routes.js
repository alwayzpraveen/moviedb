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
	.when('/movie/:desc',{
		templateUrl: 'layouts/movie.htm',
		controller:'movieController'
	})
});

