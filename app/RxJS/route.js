'use strict';

angular.module('RxApp.RxJS', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/RxJS', {
            templateUrl: 'App/RxJS/home.html',
            controller: 'View1Ctrl'
        }).when('/RxJS/map', {
            templateUrl: 'app/templates/editor.html',
            controller: 'editorCtrl'
        }).when('/RxJS/select', {
            templateUrl: 'app/templates/editor.html',
            controller: 'editorCtrl'
        }).when('/RxJS/groupby', {
            templateUrl: 'app/templates/editor.html',
            controller: 'editorCtrl'
        }).when('/RxJS/when', {
            templateUrl: 'app/templates/editor.html',
            controller: 'editorCtrl'
        }).when('/RxJS/ourmenu', {
            templateUrl: 'App/RxJS/ourmenu.html',
            controller: 'View1Ctrl'
        }).when('/RxJS/partition', {
            templateUrl: 'app/templates/editor.html',
            controller: 'editorCtrl'
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
            $scope.scriptResults.push(arguments);
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