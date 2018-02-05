'use strict';

angular.module('myApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('current-lists', {
        url: '/current-lists',
        templateUrl: 'current-lists/current-lists.html',
        controller: 'CurrentListsCtrl'
      })
      .state('new-list', {
        url: '/new-list',
        templateUrl: 'new-list/new-list.html',
        controller: 'NewListCtrl'
      })


    // $urlRouterProvider.otherwise('/');
  }]);
