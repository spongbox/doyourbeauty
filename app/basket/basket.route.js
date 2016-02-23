(function() {
    'use strict';

    angular
        .module('app.basket')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'basket',
                config: {
                    url: '/panier',
                    templateUrl: 'app/basket/basket.view.html',
                    controller: 'BasketController',
                    controllerAs: 'basket',
                    title: 'DoYourBeauty'
                }
            }
        ];
    }
})();
