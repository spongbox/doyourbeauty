(function () {
  angular.module('app').config(configRoutes);

  function configRoutes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/lab', {
        templateUrl: 'app/components/lab/lab.view.html',
        controller: 'LabController',
        controllerAs: 'lab'
      });
  }
})();
