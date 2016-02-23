(function() {
    'use strict';

    angular
        .module('app.lab')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'lab',
                config: {
                    url: '/lab',
                    templateUrl: 'app/lab/lab.view.html',
                    controller: 'LabController',
                    controllerAs: 'labVm',
                    title: 'DoYourBeauty - Lab'
                }
            }
        ];
    }
})();
