(function() {
    'use strict';

    angular
        .module('app.lab')
        .controller('LabController', LabController);

    LabController.$inject = ['$scope'];

    /* @ngInject */
    function LabController($scope) {
        var vm = this;
        vm.choices = {};
    }

})();
