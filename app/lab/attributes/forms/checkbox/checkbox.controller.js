(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('CheckboxController', CheckboxController);

    CheckboxController.$inject = ['$scope'];

    /* @ngInject */
    function CheckboxController($scope) {
        var vm = this;
        vm.choices = [];
        vm.exists = exists;
        vm.toggle = toggle;
        vm.saveChoices = saveChoices;

        function exists(value) {
          return vm.choices.indexOf(value) > -1;
        }

        function toggle(value) {
          var idx = vm.choices.indexOf(value);
          if (idx > -1) {
            vm.choices.splice(idx, 1);
          } else {
            vm.choices.push(value);
          }
        };

        function saveChoices() {
          $scope.labVm.choices[vm.attribute.name] = vm.choices;
          $scope.attributesVm.goToNext(document.querySelector('#' + vm.attribute.name));
        }

    }

})();
