'use strict';

angular.module('RxApp.Moment', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Moment/', {
            templateUrl: 'App/Moment/home.html',
            controller: 'editorCtrl'
        }).when('/Moment/:pod', {
            templateUrl: 'app/templates/editor.html',
            controller: 'editorCtrl'
        });
    }]);