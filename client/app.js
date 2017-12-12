var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/main.html'
  })
  .when('/dash',{
    templateUrl: 'partials/dash.html'
  })
  .otherwise({
    redirectTo: '/main.html'
  })
})
