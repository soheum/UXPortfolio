$(document).ready(function() {
  $('#about1').hide();
  $('#about2').hide();
  $('#about3').hide();
  $('#about4').hide();
  $('#about5').hide();
  $('#me').hide();

  $('.intro').mousemove(
    function(e){
      $('#about1').fadeIn();
      $('#about1').offset({
        top: e.pageY + ($('#about1').outerHeight()/10),
        left: e.pageX + ($('#about1').outerWidth()/10)
      });
    });
  $('.intro').mouseleave(
    function(){
      $('#about1').fadeOut();
    }
  );
  $('.me').mousemove(
    function(e){
      $('#me').fadeIn();
      $('#me').offset({
        top: e.pageY + ($('#me').outerHeight()/10),
        left: e.pageX + ($('#me').outerWidth()/10)
      });
    });
  $('.me').mouseleave(
    function(){
      $('#me').fadeOut();
    }
  );
  // $('#cv').mousemove(
  //   $('#about1').fadeOut();
  // );
  $('.education').mousemove(
    function(e){
      $('#about2').fadeIn();
      $('#about2').offset({
        top: e.pageY - ($('#about2').outerHeight()/10),
        left: e.pageX - ($('#about2').outerWidth()/2)
      });
    });
  $('.education').mouseleave(
    function(){
      $('#about2').fadeOut();
    }
  );

  $('.award').mousemove(
    function(e){
      $('#about3').fadeIn();
      $('#about3').offset({
        top: e.pageY - ($('#about3').outerHeight()/10),
        left: e.pageX - ($('#about3').outerWidth()/10)
      });
    });
  $('.award').mouseleave(
    function(){
      $('#about3').fadeOut();
    }
  );

  $('.experience').mousemove(
    function(e){
      $('#about4').fadeIn();
      $('#about4').offset({
        top: e.pageY - ($('#about4').outerHeight()/10),
        left: e.pageX - ($('#about4').outerWidth()/10)
      });
    });
  $('.experience').mouseleave(
    function(){
      $('#about4').fadeOut();
    }
  );

  $('.skill').mousemove(
    function(e){
      $('#about5').fadeIn();
      $('#about5').offset({
        top: e.pageY - ($('#about5').outerHeight()/10),
        left: e.pageX - ($('#about5').outerWidth()/10)
      });
    });
  $('.skill').mouseleave(
    function(){
      $('#about5').fadeOut();
    }
  );




});
