$(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > 10) {
        $('.header').addClass('fixed-header');
      } else {
        $('.header').removeClass('fixed-header');
      }
    });
  });