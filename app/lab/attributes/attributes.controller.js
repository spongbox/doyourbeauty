(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('AttributesController', AttributesController);

    AttributesController.$inject = ['$scope', '$state'];
    /* @ngInject */
    function AttributesController($scope, $state) {
        var vm = this;
        vm.getForm = getForm;
        vm.choiceValidate = choiceValidate;

        activate();

        function activate() {
          if (typeof $scope.labVm.choices.product === "undefined") {
            $state.go('lab.products');
            return;
          }

          vm.attributes = $scope.labVm.choices.product.attributes;
        }

        function getForm(attribute) {
          return "app/lab/attributes/forms/" + attribute.form + "/" +  attribute.form + ".view.html";
        }

        function choiceValidate(attribute) {
          return typeof $scope.labVm.choices[attribute.name] !== "undefined";
        }
    }

})();
