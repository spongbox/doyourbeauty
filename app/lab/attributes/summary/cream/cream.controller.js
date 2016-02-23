(function() {
    'use strict';

    angular
        .module('app.lab.attributes')
        .controller('CreamController', CreamController);

    CreamController.$inject = ['$scope', '$document'];

    /* @ngInject */
    function CreamController($scope, $document) {
        var vm = this;
        vm.goToTop = goToTop;
        vm.goToPack = goToPack;
        vm.transformPercent = transformPercent;

        function goToTop() {
            $document.scrollTo(0, 0, 1000);
        }

        function transformPercent(percent) {
          return percent/100;
        }

        function goToPack() {
          $scope.attributesVm.showPack = true;
          $scope.attributesVm.goToNext(document.querySelector('#summary'));
        }
    }

})();
