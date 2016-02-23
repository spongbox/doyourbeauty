(function() {
    'use strict';

    angular
        .module('app.lab.products')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$scope', '$state', 'dataservice'];

    /* @ngInject */
    function ProductsController($scope, $state, dataservice) {
        var vm = this;

        vm.select = select;

        activate();

        function activate() {
          dataservice.ready().then(getProducts);
        }

        function getProducts() {
          vm.products = dataservice.getProducts();
        }

        function select(product) {
          $scope.labVm.choices.product = product;
        }
    }

})();
