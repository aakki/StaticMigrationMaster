'use strict';
angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/store/store.html',
            controller: 'StoreController as store'
        })
        .when('/home', {
            templateUrl: 'views/home/home.html'
        })
        .when('/Login', {
            templateUrl: 'views/signin/storesignIn.html',
            controller: 'LoginController as Login'
        })
        .when('/Register', {
            templateUrl: 'views/singup/storesignup.html',
            controller: 'RegisterController as Register'
        })
        .otherwise({
            redirectTo: '/'
        });
}