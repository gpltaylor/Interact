'use strict';

angular.module('RxApp.Home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'App/Home/home.html',
        controller: 'MenuCtrl'
    }).when('/AboutUs', {
        templateUrl: 'App/Home/aboutus.html',
        controller: 'MenuCtrl'
    }).when('/GettingStarted', {
        templateUrl: 'App/Home/gettingstarted.html',
        controller: 'MenuCtrl'
    }).when('/ContactUs', {
        templateUrl: 'App/Home/contactus.html',
        controller: 'MenuCtrl'
    }).when('/Contribute', {
        templateUrl: 'App/Home/contribute.html',
        controller: 'MenuCtrl'
    });
}]);