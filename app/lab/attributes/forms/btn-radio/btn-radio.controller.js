(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('BtnRadioController', BtnRadioController);

    BtnRadioController.$inject = ['$scope', '$filter'];

    /* @ngInject */
    function BtnRadioController($scope, $filter) {
        var vm = this;
        vm.choice = null;
        vm.imgPreview = null;
        vm.setChoice = setChoice;
        vm.setImgPreview = setImgPreview;
        vm.setDefault = setDefault;

        function setChoice(attributeChoiced) {
          vm.choice = attributeChoiced;
          $scope.labVm.choices[vm.attribute.name] = attributeChoiced;
          setImgPreview(vm.choice.img);
        }

        function setImgPreview(img) {
          if (vm.attribute.haveImgPreview) {
            vm.imgPreview = img;
          }
        }

        function setDefault(def) {
          if (typeof def !== "undefined") {
            setChoice($filter('getByName')(vm.attribute.values, def));
          }
        }

    }

})();
