'use strict';

angular.module('RxApp.Moment', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Moment/', {
            templateUrl: 'App/Moment/home.html',
            controller: 'View1Ctrl'
        }).when('/Moment/format', {
            templateUrl: 'App/Moment/format.html',
            controller: 'View1Ctrl'
        });
    }]);