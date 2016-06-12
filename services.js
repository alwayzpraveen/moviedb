//CUSTOMSERVICES
movieApp.service('movieService', function(){

	this.movie = "";
	this.type= "";

});

movieApp.service('iMoviesService', ['$resource',function($resource){

	this.GetMovies = function(movie,desc,type){

	var MovieAPI =
		$resource("http://www.omdbapi.com/?",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
		return MovieAPI.get({t: movie, plot: desc, type:type});
	}
}]);
