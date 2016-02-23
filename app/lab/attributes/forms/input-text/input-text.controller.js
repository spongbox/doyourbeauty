(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('InputTextController', InputTextController);

    InputTextController.$inject = ['$scope'];

    /* @ngInject */
    function InputTextController($scope) {
        var vm = this;
        vm.choice = null;
        vm.setChoice = setChoice;

        function setChoice() {
          if (vm.choice !== "" && vm.choice !== null) {
            $scope.labVm.choices[vm.attribute.name] = vm.choice;
            $scope.attributesVm.goToNext(document.querySelector('#' + vm.attribute.name));
          } else {
            delete $scope.labVm.choices[vm.attribute.name];
          }
        }
    }

})();
