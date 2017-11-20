angular.module('myApp').factory('listService', ['$http', '$q', function($http, $q) {
  return {
    addList: function(listObj, success) {
      var promise = $q(function(resolve, reject) {
        setTimeout(function() {
          if (success) {
            resolve('200', listObj);
          } else {
            reject('500 Error');
          }
        }, 200);
      });
      return promise;
    },
    getLists: function(url) {
      var promise = $http.get(url);

      return promise;
    },
    removeItem: function(success) {
      var promise = $q(function(resolve, reject) {
        setTimeout(function() {
          if (success) {
            resolve('200');
          } else {
            reject('500');
          }
        }, 200);
      });

      return promise;
    }
  }
}]);
