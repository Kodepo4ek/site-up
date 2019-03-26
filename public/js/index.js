//Анимация кнопки

$(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 5400)
});
          
      
jQuery(function(){
  $("#Top").hide().removeAttr("href");
  if ($(window).scrollTop()>="200") $("#Top").fadeIn("slow")
  $(window).scroll(function(){
  if ($(window).scrollTop()<="200") $("#Top").fadeOut("slow")
  else $("#Top").fadeIn("slow")
  });

  $("#Bottom").hide().removeAttr("href");
  if ($(window).scrollTop()<=$(document).height()-"999") $("#Bottom").fadeIn("slow")
  $(window).scroll(function(){
  if ($(window).scrollTop()>=$(document).height()-"999") $("#Bottom").fadeOut("slow")
  else $("#Bottom").fadeIn("slow")
  });

  $("#Top").click(function(){
  $("html, body").animate({scrollTop:0},"slow")
  })
  $("#Bottom").click(function(){
  $("html, body").animate({scrollTop:$(document).height()},"slow")
  })
});

/* begin Scroll Down Button */
(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();
/* end Scroll Down Button */



