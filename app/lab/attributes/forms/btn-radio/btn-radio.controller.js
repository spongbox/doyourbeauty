(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('BtnRadioController', BtnRadioController);

    BtnRadioController.$inject = ['$scope'];

    /* @ngInject */
    function BtnRadioController($scope) {
        var vm = this;
        vm.choice = null;
        vm.setChoice = setChoice;


        function setChoice(attributeChoiced) {
          vm.choice = attributeChoiced;
          $scope.labVm.choices[vm.attribute.name] = attributeChoiced;
        }

    }

})();
