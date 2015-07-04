'use strict';

angular.module('RxApp.JavaScript', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/JavaScript', {
        templateUrl: 'App/JavaScript/home.html',
        controller: 'editorCtrl'
    }).when('/JavaScript/variables', {
        templateUrl: 'app/templates/editor.html',
        controller: 'editorCtrl'
    }).when('/JavaScript/functions/reuse', {
        templateUrl: 'app/templates/editor.html',
        controller: 'editorCtrl'
    }).when('/JavaScript/:pod', {
        templateUrl: 'app/templates/editor.html',
        controller: 'editorCtrl'
    });
}]);