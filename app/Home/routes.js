'use strict';

angular.module('RxApp.Home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/Home/home.html',
        controller: 'MenuCtrl'
    }).when('/AboutUs', {
        templateUrl: 'app/Home/aboutus.html',
        controller: 'MenuCtrl'
    }).when('/GettingStarted', {
        templateUrl: 'app/Home/gettingstarted.html',
        controller: 'MenuCtrl'
    }).when('/ContactUs', {
        templateUrl: 'app/Home/contactus.html',
        controller: 'MenuCtrl'
    }).when('/Contribute', {
        templateUrl: 'app/Home/contribute.html',
        controller: 'MenuCtrl'
    });
}]);