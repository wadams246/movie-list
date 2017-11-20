'use strict';

angular.module('myApp').controller('NewListCtrl', ['$scope', 'searchService',
  function($scope, searchService) {
    $scope.master = {};
    $scope.searchService = searchService;

    $scope.searchImdb = function() {
      console.log('search imdb');
      $scope.searchService.searchImdb('goonies')
        .then(function(res) {
          console.log('response: ', res);
        })
    }
  }]);
