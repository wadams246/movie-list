'use strict';

angular.module('myApp').controller('NewListCtrl', ['$scope', 'searchService',
  function($scope, searchService) {
    $scope.master = {};
    $scope.searchService = searchService;
    $scope.searchText = '';
    $scope.movie = {};
    $scope.movieFound = false;

    $scope.searchImdb = function(title) {
      $scope.searchService.searchImdb(title)
        .then(function(res) {
          $scope.movie = res.data;
        })
    }

  }]);
