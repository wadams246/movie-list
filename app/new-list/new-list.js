'use strict';

angular.module('myApp').controller('NewListCtrl', ['$scope', 'searchService', 'listService',
  function($scope, searchService, listService) {
    $scope.master = {};
    $scope.searchService = searchService;
    $scope.listService = listService;
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
      angular.forEach($scope.currentList, function(i) {
        console.log('i: ', i);
      })
    }

    $scope.createList = function() {
      $scope.invalidName = false;
      if($scope.list.name === undefined || $scope.list.name.length < 1) {
        $scope.invalidName = true;
      } else {
        $scope.listService.addList()
          .then(function(res) {
            console.log('res: ', res);
          })
      }
    }

    $scope.getList = function() {
      $scope.listService.getList()
        .then(function(res) {
          console.log('res: ', res)
        })
    }
  }]);
