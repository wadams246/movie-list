'use strict';

angular.module('myApp').controller('NewListCtrl', ['$scope', 'searchService',
  function($scope, searchService) {
    $scope.master = {};
    $scope.searchService = searchService;
    $scope.searchText = '';

    $scope.searchImdb = function(title) {
      console.log('search imdb');
      $scope.searchService.searchImdb(title)
        .then(function(res) {
          console.log('response: ', res);
        })
    }
  }]);
