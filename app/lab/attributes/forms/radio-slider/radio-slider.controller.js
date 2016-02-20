(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('RadioSliderController', RadioSliderController);

    RadioSliderController.$inject = ['$scope'];

    /* @ngInject */
    function RadioSliderController($scope) {
        var vm = this;
        var vm = this;
        vm.choice = null;
        vm.setChoice = setChoice;
        vm.saveChoice = saveChoice;
        vm.percent = 100;


        function setChoice(attributeChoiced) {
          if (vm.choice) {
            vm.percent = 100;
          }
          vm.choice = attributeChoiced;
        }

        function saveChoice() {
          $scope.labVm.choices[vm.attribute.name] = {value: vm.choice, percent: vm.percent};
        }
    }

})();
