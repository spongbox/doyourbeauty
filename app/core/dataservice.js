(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var jsonURL = '/ressources/products.json';
        var promise = $http.get(jsonURL);
        var data = null;
        var service = {
          ready: ready,
          getProducts: getProducts
        };

        return service;

        function getProducts() {
          return data.products;
        }

        function ready() {
          return promise.then(function(result) {
            data = result.data;
            return true;
          }, function() {
            logger.error('Impossible de récupérer les données');
            return false;
          })
        }
    }
})();
