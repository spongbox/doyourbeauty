(function () {
  'use strict';

  angular.module('app.homepage').controller('HomeController', HomeController);

  HomeController.$inject = ['$state'];

  function HomeController($state){
    var vm = this;
    vm.goTo =  goTo;

    function goTo() {
      $state.go('lab.products');
    }

  }
})();
