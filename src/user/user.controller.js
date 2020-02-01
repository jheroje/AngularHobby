(function userdetail() {
  'use strict';

  angular
    .module('hobby')
    .controller('UserController', UserController);

  UserController.inject = ['$scope', '$routeParams', 'UserService'];

  function UserController($scope, $routeParams, UserService) {
    $scope.user = {};

    activate();

    ////////////////

    function activate() {
      $scope.user = UserService.get($routeParams.id);
    }
  }
}());
