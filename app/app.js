'use strict';

angular.module('myApp', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
    .when('/current-lists', {
      templateUrl: 'current-lists/current-lists.html',
      controller: 'CurrentListsCtrl'
    })
    .when('/new-list', {
      templateUrl: 'new-list/new-list.html',
      controller: 'NewListCtrl'
    });

  $routeProvider.otherwise({redirectTo: '/'});
}]);
