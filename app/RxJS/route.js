'use strict';

angular.module('RxApp.RxJS', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/RxJS', {
            templateUrl: 'app/RxJS/home.html'
        }).when('/RxJS/:pod', {
            templateUrl: 'app/templates/editor.html',
            controller: 'editorCtrl'
        });
    }]);