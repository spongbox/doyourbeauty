(function () {
  'use strict';

  angular.module('app.basket').controller('BasketController', BasketController);
  BasketController.$inject = ['$rootScope','$scope'];


  function BasketController($rootScope, $scope) {
  	$rootScope.smallHeader = true;
  	$scope.$on("$destroy", function() {
          $rootScope.smallHeader = false;
	});
    var vm = this;
    vm.title = 'Panier';
  }
})();