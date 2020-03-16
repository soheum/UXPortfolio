$( document ).ready(function() {
  AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back'
});
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#nori').fadeIn();                     
    }
  });
