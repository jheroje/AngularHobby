(function Giffactory() {
  'use strict';

  angular
    .module('hobby')
    .factory('GifService', GifService);

  GifService.$inject = ['$http', 'Config'];

  function GifService($http, Config) {
    const giphyKey = Config.GIPHY_API_KEY;
    const service = {
      search: search
    };

    return service;

    ////////////////

    function search(category) {
      return $http.get(`http://api.giphy.com/v1/gifs/search?q=${category}&limit=8&api_key=${giphyKey}`)
        .then((response) => response.data.data.map((gif) => (gif.images.original.url)));
    }
  }
}());
