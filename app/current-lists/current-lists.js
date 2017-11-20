'use strict';

angular.module('myApp').controller('CurrentListsCtrl', ['$scope', 'listService',
  function($scope, listService) {

    $scope.listService = listService;
    $scope.lists = [];
    $scope.selectedList = '';
    $scope.currentList = [];

    $scope.init = function() {
      $scope.listService.getLists('./mockLists.json')
        .then(function(res) {
          $scope.lists = res.data;
        })
    }

    $scope.viewList = function(list) {
      $scope.currentList = list.list;
      $scope.selectedList = list.listName;
    }

    $scope.$on('deleteItem', function(event, movie) {
      $scope.listService.removeItem(true)
        .then(function(res) {
          var index = $scope.currentList.indexOf(movie);
          $scope.currentList.splice(index, 1);
        })
    })
  }]);
