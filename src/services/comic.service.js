(function Comicfactory() {
  'use strict';

  angular
    .module('hobby')
    .factory('ComicService', ComicService);

  ComicService.$inject = ['$http', 'Config'];

  function ComicService($http, Config) {
    const marvelKey = Config.MARVEL_API_KEY;
    const service = {
      search: search
    };

    return service;

    ////////////////

    function search(title) {
      return $http.get(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${title}&limit=8&apikey=${marvelKey}`)
        .then((response) => response.data.data.results
        .map((comic) => (comic.images[0] !== undefined ? `${comic.images[0].path}.${comic.images[0].extension}` : '')));
    }
  }
}());
