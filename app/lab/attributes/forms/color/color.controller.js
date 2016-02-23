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
            document.getElementById('form-color-' + vm.choice.value).style.opacity = 1;
            vm.percent = 100;
          }
          vm.choice = attributeChoiced;
        }

        function saveChoice() {
          $scope.labVm.choices[vm.attribute.name] = vm.choice;
          $scope.labVm.choices[vm.attribute.name].percent = parseFloat(vm.percent);
          $scope.attributesVm.goToNext(document.querySelector('#' + vm.attribute.name));
        }

        function setOpacity() {
          document.getElementById('form-color-' + vm.choice.value).style.opacity = vm.percent / 100;
        }

    }

})();
