(function() {
  'use strict';

  angular
      .module('app.lab.attributes')
      .controller('ImgRadioController', ImgRadioController);

  ImgRadioController.$inject = ['$scope'];

  /* @ngInject */
  function ImgRadioController($scope) {
    var vm = this;
    vm.choice = null;
    vm.setChoice = setChoice;


    function setChoice(attributeChoiced) {
      vm.choice = attributeChoiced;
      $scope.labVm.choices[vm.attribute.name] = attributeChoiced;
    }

  }

})();
