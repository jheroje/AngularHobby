(function userfactory() {
  'use strict';

  angular
    .module('hobby')
    .factory('UserService', UserService);

  function UserService() {
    const service = {
      saveUsers: saveUsers,
      loadUsers: loadUsers,
      get: get
    };

    return service;

    ////////////////

    function get(id) {
      const users = loadUsers();
      return (users.filter((user) => user.id === id))[0];
    }

    function saveUsers(users) {
      localStorage.setItem('users', JSON.stringify(users));
    }

    function loadUsers() {
      return 'users' in localStorage ? JSON.parse(localStorage.getItem('users')) : [];
    }
  }
}());
