(function() {
    'use strict';

    angular
        .module('app.lab')
        .controller('LabController', LabController);


    /* @ngInject */
    function LabController() {
        var vm = this;
        vm.choices = {};
    }

})();
