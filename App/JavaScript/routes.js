'use strict';

angular.module('RxApp.JavaScript', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/JavaScript', {
        templateUrl: 'App/RxJS/home.html',
        controller: 'View1Ctrl'
    }).when('/JavaScript/variables', {
        templateUrl: 'App/JavaScript/variables.html',
        controller: 'View1Ctrl'
    });
}]);