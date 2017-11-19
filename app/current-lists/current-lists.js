'use strict';

angular.module('myApp.current-lists', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/current-lists', {
    templateUrl: 'current-lists/current-lists.html',
    controller: 'CurrentListsCtrl'
  });
}])

.controller('CurrentListsCtrl', [function() {

}]);
