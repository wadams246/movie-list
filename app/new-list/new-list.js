'use strict';

angular.module('myApp').controller('NewListCtrl', ['$scope', 'searchService',
  function($scope, searchService) {
    $scope.master = {};
    $scope.searchService = searchService;
    $scope.searchText = '';
    $scope.movie = {};
    $scope.list = {};
    $scope.movieFound = false;
    $scope.currentList = [];
    $scope.successMessage = false;
    $scope.invalidName = false;

    $scope.searchImdb = function(title) {
      $scope.searchService.searchImdb(title)
        .then(function(res) {
          $scope.movie = res.data;
        })
    }

    $scope.addMovie = function(movie) {
      if($scope.currentList.indexOf(movie) < 0) {
        $scope.currentList.push(movie);
      }
      $scope.successMessage = true;
      console.log('curentList: ', $scope.currentList);
    }

    $scope.createList = function() {
      $scpe.invalidName = false;
      if($scope.list.name === undefined || $scope.list.name.length < 1) {
        $scope.invalidName = true;
      } else {
        $scope.listService.addList()
          .then(function(res) {
            console.log('res: ', res);
          })
      }
    }
  }]);
