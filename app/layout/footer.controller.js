(function() {
    'use strict';

    angular.module('app.layout')
          .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope'];

    /* @ngInject */
    function FooterController($scope) {
      var vm = this;
    }

})();
