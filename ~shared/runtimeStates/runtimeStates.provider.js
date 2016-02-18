(function () {
  'use strict';

  angular.module('aphhhh').provider('runtimeStates', runtimeStates);

  runtimeStates.$inject = ['$stateProvider'];

  function runtimeStates($stateProvider) {
    this.$get = function($q, $timeout, $state) {
      return {
        addState: function(name, state) {
          $stateProvider.state(name, state);
        },
        exist: function (state) {
          return $state.get(state) !== null;
        }
      };
    };
  }
})();
