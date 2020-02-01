(function app() {
  'use strict';

  angular.module('hobby', ['ngRoute']).config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when("/", {
        controller: "HomeController",
        templateUrl: "/src/home/home.html"
      })
      .when("/user/:id", {
        controller: "UserController",
        templateUrl: "/src/user/user.html"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
}());
