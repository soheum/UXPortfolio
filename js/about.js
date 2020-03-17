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
        top: e.pageY + ($('#about2').outerHeight()/3),
        left: e.pageX + ($('#about2').outerWidth()/3)
      });
    });
  $('.education').mouseleave(
    function(){
      $('#about2').fadeOut();
    }
  );

  // $('.ixda').mousemove(
  //   $('#about2').fadeOut();
  // $('.ixda').mouseleave(
  //   $('#about3').fadeIn();
  // );
  $('.ixda').on('click', function(){
    window.location = "https://awards.ixda.org/entry/2019/think-talk-and-play-nori-nuri/";
  });
  $('.mari').on('click', function(){
    window.location = "https://www.helsinkidesignweek.com/series/weekly-pics-marimekko-designathon/";
  });
  $('.algo').on('click', function(){
    window.location = "https://algostakes.xyz/";
  });
  $('.frum').on('click', function(){
    window.location = "http://www.frum.co.kr/en/main";
  });
  $('.iid').on('click', function(){
    window.location = "http://www.yonseiiid.com/";
  });
  $('.uid').on('click', function(){
    window.location = "http://www.uid.umu.se/en/";
  });
  // $('#playground').on('click', function(){
  //   window.location = "./playground.html";
  // });
  // $('#soheum').on('click', function(){
  //   window.location = "./index.html";
  // });



  $('.award').mousemove(
    function(e){
      $('#about3').fadeIn();
      $('#about3').offset({
        top: e.pageY + ($('#about3').outerHeight()/3),
        left: e.pageX + ($('#about3').outerWidth()/3)
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
        top: e.pageY + ($('#about4').outerHeight()/3),
        left: e.pageX + ($('#about4').outerWidth()/3)
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
        top: e.pageY + ($('#about5').outerHeight()/3),
        left: e.pageX + ($('#about5').outerWidth()/3)
      });
    });
  $('.skill').mouseleave(
    function(){
      $('#about5').fadeOut();
    }
  );




});
