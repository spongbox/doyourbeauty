(function () {
  'use strict';
  angular.module('app.core')
    .filter('getByName', getByName);

  function getByName() {
    return function(input, name) {
      for (var i = 0, length = input.length; i < length; i++) {
        if (input[i].value == name || input[i].name == name) {
          return input[i];
        }
      }
      return null;
    }
  }
})();
