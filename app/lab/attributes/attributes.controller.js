(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('AttributesController', AttributesController);

    AttributesController.$inject = ['$scope', '$state', 'smoothScroll', '$filter', '$window', '$document'];
    /* @ngInject */
    function AttributesController($scope, $state, smoothScroll, $filter, $window, $document) {
        var vm = this;
        vm.product = null;
        vm.attributes = [];
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
          var i = vm.attributes.length;
          var notFound = true;
          while (i > 0 && notFound) {
            if (document.getElementById(vm.attributes[i-1].name) && document.getElementById(vm.attributes[i-1].name).offsetTop - 200 <= $window.pageYOffset) {
              vm.current = vm.attributes[i-1];
              notFound = false;
              $scope.$apply();
            }
            i--;
          }
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
          smoothScroll(elmnt, {
             offset: 180,
             duration: 1000,
             easing: 'easeOutCubic'
          });
        }

        $scope.$on("$destroy", function() {
          $window.removeEventListener("scroll", checkPos);
        });
    }

})();
