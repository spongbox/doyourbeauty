(function () {
  'use strict';

  angular.module('app.homepage').controller('HomeController', HomeController);

  HomeController.$inject = ['$state'];

  function HomeController($state) {
    var vm = this;
    vm.goTo =  goTo;

    function goTo() {
      $state.go('lab.products');
    }

  }
})();

$(document).ready(function(){
	heightElem();
	heightElemResize();
});

var heightElem = function(){
	var windowHeight = $(window).outerHeight();
	var headerHeight = $('#header').outerHeight();
	var restHeight = windowHeight - headerHeight;
	$('.home-top').outerHeight(restHeight);
};

var heightElemResize = function(){
	$(window).resize(function(){
		setTimeout(function(){
			heightElem();
		}, 800);
	});
};
