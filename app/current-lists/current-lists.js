'use strict';

angular.module('myApp').controller('CurrentListsCtrl', ['$scope', 'listService',
  function($scope, listService) {

    $scope.listService = listService;
    $scope.lists = [];
    $scope.currentList = [];

    $scope.init = function() {
      $scope.listService.getLists('./mockLists.json')
        .then(function(res) {
          $scope.lists = res.data;
        })
    }

    $scope.viewList = function(list) {
      $scope.currentList = list;
    }
  }]);
