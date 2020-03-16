$( document ).ready(function() {
  $(".ur").click(function() {
      $('html,body').animate({
          scrollTop: $(".page2").offset().top},
          'slow');
  });
});
