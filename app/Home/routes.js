'use strict';

angular.module('RxApp.Home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'App/Home/home.html',
        controller: 'MenuCtrl'
    });
}]);