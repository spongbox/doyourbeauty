(function() {
    'use strict';

    angular
        .module('app.lab.products')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'lab.products',
                config: {
                    url: '/products',
                    title: 'DoYourBeauty - products',
                    controller: 'ProductsController',
                    controllerAs: 'productsVm',
                    templateUrl: 'app/lab/products/products.view.html'
                }
            }
        ];
    }
})();
