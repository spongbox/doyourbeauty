(function() {
    'use strict';

    angular.module('app.layout')
          .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope'];

    /* @ngInject */
    function HeaderController($scope) {
      var vm = this;
    }

})();
