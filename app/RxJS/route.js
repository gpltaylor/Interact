'use strict';

angular.module('RxApp.RxJS', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/RxJS', {
        templateUrl: 'App/RxJS/home.html',
        controller: 'View1Ctrl'
    }).when('/RxJS/map', {
        templateUrl: 'App/RxJS/map.html',
        controller: 'View1Ctrl'
    }).when('/RxJS/select', {
        templateUrl: 'App/RxJS/select.html',
        controller: 'View1Ctrl'
    }).when('/RxJS/groupby', {
        templateUrl: 'App/RxJS/groupby.html',
        controller: 'View1Ctrl'
    }).when('/RxJS/when', {
        templateUrl: 'App/RxJS/when.html',
        controller: 'View1Ctrl'
    }).when('/RxJS/ourmenu', {
        templateUrl: 'App/RxJS/ourmenu.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', function ($scope) {
    // Load the Editor if one is found
    $scope.scriptResults = [];

    if ($('#editor').length !== 0) {
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/twilight");
        editor.getSession().setMode("ace/mode/javascript");
    }

    console.log = function () {
        $scope.scriptResults.push(JSON.stringify(arguments));
        $scope.$apply();
    };

    $scope.runScript = function () {
        // Evil but fits a purpose here.
        try {
            eval(editor.getValue());
        } catch (ex) {
            console.log(ex.message, ex.stack);
        }
    };

    $scope.clearResults = function () {
        $scope.scriptResults = [];
    }

}]);