jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});
  
//Header scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".header-internal").addClass('header-internal--scroll');
  } else {
    $(".header-internal").removeClass('header-internal--scroll');
  };
});

});