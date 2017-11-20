angular.module('myApp').factory('listService', ['$http', function($http) {
  return {
    addList: function(listObj) {
      var promise = $q(function(resolve, reject) {
        setTimeout(function() {
          if (okToGreet(name)) {
            resolve('Hello, ' + name + '!');
          } else {
            reject('Greeting ' + name + ' is not allowed.');
          }
        }, 1000);
      });
      return promise;
    },
    getLists: function(url) {
      var promise = $http.get(url);

      return promise;
    }
  }
}]);
