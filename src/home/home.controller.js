(function home() {
  'use strict';

  angular
    .module('hobby')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'UserService', 'GifService', 'ComicService'];

  function HomeController($scope, UserService, GifService, ComicService) {
    $scope.new = {};
    $scope.temp = {};
    $scope.users = [];
    $scope.editing = false;
    $scope.formView = "new";
    // Methods
    $scope.reset = reset;
    $scope.create = create;
    $scope.remove = remove;
    $scope.edit = edit;
    $scope.modify = modify;
    // Services
    $scope.findGif = findGif;
    $scope.findComic = findComic;
    $scope.gifs = [];
    $scope.comics = [];

    activate();

    ////////////////

    function activate() {
      $scope.users = UserService.loadUsers();
    }

    function reset() {
      if ($scope.editing) {
        $scope.editing = false;
      }

      $scope.new = {};
      $scope.userForm.$setPristine();
    }

    function create(user) {
      randId();
      $scope.users.push(user);
      UserService.saveUsers($scope.users);
      reset();
    }

    function remove(user) {
      $scope.users = $scope.users.filter((el) => (el !== user));
      UserService.saveUsers($scope.users);
    }

    function edit(user) {
      $scope.new = angular.copy(user);
      $scope.temp = user;
      $scope.editing = true;
    }

    function modify(user) {
      remove($scope.temp);
      create(user);
    }

    function randId() {
      $scope.new.id = Math.random().toString(36).substr(2, 20);
    }

    function findGif(category) {
      GifService.search(category).then((gifs) => ($scope.gifs = gifs));
    }

    function findComic(title) {
      ComicService.search(title).then((comics) => ($scope.comics = comics));
    }
  }
}());
