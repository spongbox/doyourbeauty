(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('ColorController', ColorController);

    ColorController.$inject = ['$scope'];

    /* @ngInject */
    function ColorController($scope) {
        var vm = this;
        var vm = this;
        vm.choice = null;
        vm.setChoice = setChoice;
        vm.setOpacity = setOpacity;
        vm.saveChoice = saveChoice;
        vm.percent = 100;


        function setChoice(attributeChoiced) {
          if (vm.choice) {
            document.getElementById('form-color-' + vm.choice).style.opacity = 1;
            vm.percent = 100;
          }
          vm.choice = attributeChoiced;
        }

        function saveChoice() {
          $scope.labVm.choices[vm.attribute.name] = {value: vm.choice, percent: vm.percent};
        }

        function setOpacity() {
          document.getElementById('form-color-' + vm.choice).style.opacity = vm.percent / 100;
        }

    }

})();
