(function ($) {
    "use strict";
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.theme-header').addClass('is-sticky');
    } else {
       $('.theme-header').removeClass('is-sticky');
    }
});

$("#burger").click(function(){
    $(".burger").toggleClass("show-x");
    $(".menu-list").toggleClass("show");
  });
})(jQuery); 