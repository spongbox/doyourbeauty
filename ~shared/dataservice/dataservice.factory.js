(function() {
  'use strict';

  angular.module('apphhhhh')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q'];

  function dataservice($http) {

    var promise =  $http.get('/ressources/products.json');
    var data = null;
    var service = {
      getProducts: getProducts,
      ready: ready
    };

    return service;
    /////////////////

    function getProducts() {
      return data;
    }

    function ready() {
      return $http.get('/ressources/products.json')
        .then(function (results) {
          data = results.data;
          return true;
        }, function () {
          return false;
        });
    }
  }
})();
