angular.module('myApp').directive('listDirective', function () {
    return {
        scope: {
            list: '='
        },
        template: `
          <ul class="current-list">
            <li ng-repeat="movie in list">
              <div style="display: flex; align-items: center">
                <input type="checkbox" />
                <img class="list-size" style="margin-right: 10px" src="{{ movie.Poster }}" >
                <h4>{{ movie.Title }}</h4>
                <h5 style="padding-left: 10px">({{ movie.Rated }}) - </h5>
                <h5 style="padding-left: 5px">{{ movie.Year }} - </h5>
                <h5 style="padding-left: 5px">{{ movie.Genre }}</h5>
              </div>
            </li>
          </ul>
        `
    };
});
