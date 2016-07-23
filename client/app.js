var app = angular.module('app', ['ngRoute']);

(function(){
	app.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'frontController',
				templateUrl: 'partials/frontpage.html'
			})
			.when('/dashboard',
			{
				controller: 'indexController',
				templateUrl: 'partials/index.html'
			})
			.when('/poll/:id', {
				controller: 'showController',
				templateUrl: 'partials/show.html'
			})
			.when('/friend/delete/:id', {
				controller: 'indexController',
				templateUrl: 'partials/index.html'
			})
			.when('/create',
			{
				controller: 'indexController',
				templateUrl: 'partials/new.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
}());
