(function () {
  'use strict';

  angular.module('app.homepage').controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.title = 'Homepage';
  }
})();
