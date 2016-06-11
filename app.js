// MODULE
var weatherApp = angular.module('weatherApp',['ngRoute']);
weatherApp.config(function ($routeProvider){

    $routeProvider
    .when('/',{

        templateUrl:'pages/main.html',
        controller: 'mainController'
    })
	.when('/second',{

        templateUrl:'pages/second.html',
        controller:'secondController'
    })
    .when('/second/:num',{

        templateUrl:'pages/second.html',
        controller:'secondController'
    })

});

weatherApp.service('newService', function(){

	var self = this;
	this.name = 'Praveen Gonthina';
	this.namelength = function(){
	 return self.name.length;
	};


});

// CONTROLLERS

weatherApp.controller('mainController',['$scope','newService', function($scope,newService){

    $scope.people = [{
		name: 'Praveen G',
		street: 'PragathiNagar',
		city: 'Kukatpally',
		state: 'Hyderabad',
		pin: '500090'
	},
	{
		name: 'BOB G',
		street: 'SanathNagar',
		city: 'Vepagunta',
		state: 'VSKP',
		pin: '530027'
	},
	{
		name: 'Revanth M',
		street: 'VNagar',
		city: 'Madillapalem',
		state: 'Vizag',
		pin: '530036'
	}
	]

	$scope.personAddress = function(person) {
		return  person.street + ',' + person.city + ',' + person.state + ',' +
			person.pin;
	}



}]);

weatherApp.controller('secondController',['$scope','$routeParams','newService', function($scope,$routeParams,newService){
    $scope.num = $routeParams.num || 1 ;
	$scope.name = newService.name;
	$scope.$watch('name', function(){
		newService.name = $scope.name;
	});


}]);
weatherApp.directive("searchResult", function(){

	return {
		restrict: 'AEM',
		templateUrl: 'templates/search.html',
		replace: true,
		scope:{
			personObject: "=",
			personAddress: "&"
		}
	}

});




