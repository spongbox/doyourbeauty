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
        vm.isFinish = isFinish;


        $window.addEventListener("scroll", checkPos);

        activate();

        function activate() {
          if (typeof $scope.labVm.choices.product === "undefined") {
            $state.go('lab.products');
            return;
          }
          $document.scrollTop(0, 0);
          $rootScope.smallHeader = true;
          vm.product = $scope.labVm.choices.product;
          vm.attributes = $filter('orderBy')(vm.product.attributes, 'order');
          vm.current = vm.attributes[0];
        }

        function getForm(attribute) {
          return "app/lab/attributes/forms/" + attribute.form + "/" +  attribute.form + ".view.html";
        }

        function getResultView(product) {
          return "app/lab/attributes/summary/" + product.name + "/" + product.name + ".view.html";
        }

        function choiceValidate(attribute) {
          return typeof $scope.labVm.choices[attribute.name] !== "undefined";
        }

        function checkPos(e) {
          checkStatusLabNav()

          var i = 0;
          var notFound = true;
          var lastAttribute = vm.attributes[0];
          var $summary = $('#summary');
          while (i < vm.attributes.length && notFound) {
            var elemnt = angular.element(document.getElementById(vm.attributes[i].name));
            var posStart = elemnt.prop('offsetTop') - vm.offset - 5;
            var posEnd = elemnt.prop('offsetTop') + elemnt[0].offsetHeight - vm.offset - 5;
            if ($document.scrollTop() >= posStart) {
              if ($document.scrollTop() <= posEnd) {
                vm.current = vm.attributes[i];
                notFound = false;
              } else {
                if (i == vm.attributes.length - 1) {
                    vm.current = "summary";
                    notFound = false;
                } else {
                  lastAttribute = vm.attributes[i + 1];
                }
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
          if (attribute == 'summary') {
              goTo(document.querySelector('#summary'));
          } else if (!vm.current || attribute.name !== vm.current.name) {
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

        function isFinish() {
          var lengthChoices = Object.keys($scope.labVm.choices).length;
          return lengthChoices == vm.attributes.length + 1;
        }

        function checkStatusLabNav() {
          /*if ($('#lab nav').offset().top - 100 <= $document.scrollTop()) {
            $('#lab nav').css({
              position: 'fixed',
              top: 100
            });
          }*/
        }

        $scope.$on("$destroy", function() {
          $rootScope.smallHeader = false;
          $window.removeEventListener("scroll", checkPos);
        });
    }

})();
