angular.module('myApp').factory('searchService', ['$http', function($http) {
  return {
    searchImdb: function(title) {
      var promise =  $http.get('http://www.omdbapi.com/?apikey=f8033250&t=' + title);

      return promise;
    }
  }
}]);
