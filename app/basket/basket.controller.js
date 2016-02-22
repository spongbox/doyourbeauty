(function () {
  'use strict';

  angular.module('app.basket').controller('BasketController', BasketController);

  function BasketController() {
    var vm = this;
    vm.title = 'Panier';
  }
})();