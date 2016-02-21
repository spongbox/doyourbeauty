(function () {
  'use strict';

  angular.module('app.homepage').controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.title = 'Homepage';
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