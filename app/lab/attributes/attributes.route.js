(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'lab.attributes',
                config: {
                    url: '/attributes',
                    title: 'DoYourBeauty - attributes',
                    controller: 'AttributesController',
                    controllerAs: 'attributesVm',
                    templateUrl: 'app/lab/attributes/attributes.view.html'
                }
            }
        ];
    }
})();
