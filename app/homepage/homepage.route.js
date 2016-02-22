(function() {
    'use strict';

    angular
        .module('app.homepage')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'homepage',
                config: {
                    url: '/',
                    templateUrl: 'app/homepage/homepage.view.html',
                    controller: 'HomeController',
                    controllerAs: 'homeVm',
                    title: 'DoYourBeauty'
                }
            }
        ];
    }
})();
