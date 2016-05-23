$(document).ready(function($) {
  
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-80
          }, 1000);
          return false;
        }
      }
    });
  });

  // var stickyNavTop = 144;
  var stickyNav = function(){
  var $nav = $('.js-nav');
  var $aboutUs = $('.js-aboutUs');

  var stickyNavTop = 144;

  var navHeight = $nav.innerHeight();

  var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $nav.addClass('sticky');
      $aboutUs.addClass('sticky');
      $aboutUs.css('margin-top', navHeight);
    } else {
      $nav.removeClass('sticky');
      $aboutUs.removeClass('sticky');
      $aboutUs.css('margin-top', 0);
    }
  };

  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });

});
