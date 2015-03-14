'use strict';

// Declare app level module which depends on views, and components
angular.module('RxApp', [
  'ngRoute',
  'RxApp.Home',
  'RxApp.Menu',
  'RxApp.RxJS',
  'RxApp.JavaScript'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/NotFound' });
}]);