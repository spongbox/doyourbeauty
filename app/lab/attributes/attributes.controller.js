(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('AttributesController', AttributesController);

    AttributesController.$inject = ['$scope', '$state', '$filter', '$rootScope','$window', '$document'];
    /* @ngInject */
    function AttributesController($scope, $state, $filter, $rootScope, $window, $document) {
        var vm = this;
        vm.product = null;
        vm.attributes = [];
        vm.offset = 218;
        vm.getForm = getForm;
        vm.getResultView = getResultView;
        vm.choiceValidate = choiceValidate;
        vm.render = render;
        vm.goToNext = goToNext;


        $window.addEventListener("scroll", checkPos);

        activate();

        function activate() {
          if (typeof $scope.labVm.choices.product === "undefined") {
            $state.go('lab.products');
            return;
          }
          $rootScope.smallHeader = true;
          vm.product = $scope.labVm.choices.product;
          vm.attributes = $filter('orderBy')(vm.product.attributes, 'order');
          vm.current = vm.attributes[0];
        }

        function getForm(attribute) {
          return "app/lab/attributes/forms/" + attribute.form + "/" +  attribute.form + ".view.html";
        }

        function getResultView(product) {
          return "app/lab/attributes/results/" + product.name + "/" + product.name + ".view.html";
        }

        function choiceValidate(attribute) {
          return typeof $scope.labVm.choices[attribute.name] !== "undefined";
        }

        function checkPos(e) {
          var i = 0;
          var notFound = true;
          var lastAttribute =  vm.attributes[0];
          while (i < vm.attributes.length && notFound) {
            var elemnt = angular.element(document.getElementById(vm.attributes[i].name));
            var posStart = elemnt.prop('offsetTop') - vm.offset - 5;
            var posEnd = elemnt.prop('offsetTop') + elemnt[0].offsetHeight - vm.offset - 5;
            if ($document.scrollTop() >= posStart) {
              if ($document.scrollTop() <= posEnd) {
                vm.current = vm.attributes[i];
                notFound = false;
              } else {
                lastAttribute = vm.attributes[i + 1];
              }
            }
            i++;
          }
          if (notFound) {
              vm.current = lastAttribute;
          }
          $scope.$apply();

        }

        function render(attribute) {
          if (attribute.name !== vm.current.name) {
            goTo(document.querySelector('#' + attribute.name));
          }
        }

        function goToNext(current) {
          var nextElmnt = angular.element(current).next();
          goTo(nextElmnt[0]);
        }

        function goTo(elmnt) {
          $document.scrollToElement(elmnt, vm.offset, 1000);
        }

        $scope.$on("$destroy", function() {
          $rootScope.smallHeader = false;
          $window.removeEventListener("scroll", checkPos);
        });
    }

})();
