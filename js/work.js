document.getElementById("seam").style.width = 500 + 'px';
document.getElementById("norinuri").style.width = 300 + 'px';
document.getElementById("journey").style.width = 400 + 'px';
document.getElementById("comine").style.width = 400 + 'px';
document.getElementById("algo").style.width = 400 + 'px';



$(document).ready(function() {
  $('#seam').hide();
  $('#norinuri').hide();
  $('#journey').hide();
  $('#comine').hide();
  $('#algo').hide();
  $('#joule').hide();
  $('.norinuri').mousemove(
    function(e){
      $(document.body).css('background-color', '#adb885');
      $('#joule').fadeIn();
      $('.norinuri h3').css('color', '#FFFFFF');
      $('.norinuri h3').css('font-weight', '600');
      $('.norinuri h6').css('color', '#FFFFFF');
      $('.norinuri h6').css('font-weight', '300');
    });
  $('.norinuri').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('#joule').fadeOut();
      $('.norinuri h3').css('color', '#404040');
      $('.norinuri h3').css('font-weight', '300');
      $('.norinuri h6').css('color', '#404040');
      $('.norinuri h6').css('font-weight', '100');
    }
  );
  $('.norinuri').on('click', function(){
    window.location = "./joule.html";
  });

  $('.journey').mousemove(
    function(e){
      $(document.body).css('background-color', '#F3796F');
      $('#comine').fadeIn();
      $('.journey h3').css('color', '#FFFFFF');
      $('.journey h3').css('font-weight', '600');
      $('.journey h6').css('color', '#FFFFFF');
      $('.journey h6').css('font-weight', '300');
    });
  $('.journey').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.journey h3').css('color', '#404040');
      $('.journey h3').css('font-weight', '300');
      $('.journey h6').css('color', '#404040');
      $('.journey h6').css('font-weight', '100');
      $('#comine').fadeOut();
    }
  );
  $('.journey').on('click', function(){
    window.location = "./comine.html";
  });

  $('.comine').mousemove(
    function(e){
      $(document.body).css('background-color', '#BFD4D1');
      $('#seam').fadeIn();
      $('.comine h3').css('color', '#FFFFFF');
      $('.comine h3').css('font-weight', '600');
      $('.comine h6').css('color', '#FFFFFF');
      $('.comine h6').css('font-weight', '300');
    });
  $('.comine').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.comine h3').css('color', '#404040');
      $('.comine h3').css('font-weight', '300');
      $('.comine h6').css('color', '#404040');
      $('.comine h6').css('font-weight', '100');
      $('#seam').fadeOut();
    }
  );
  $('.comine').on('click', function(){
    window.location = "./seam.html";
  });

  $('.algo').mousemove(
    function(e){
      $(document.body).css('background-color', '#66C18B');
      $('#norinuri').fadeIn();
      $('.algo h3').css('color', '#FFFFFF');
      $('.algo h3').css('font-weight', '600');
      $('.algo h6').css('color', '#FFFFFF');
      $('.algo h6').css('font-weight', '300');
    });
  $('.algo').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.algo h3').css('color', '#404040');
      $('.algo h3').css('font-weight', '300');
      $('.algo h6').css('color', '#404040');
      $('.algo h6').css('font-weight', '100');
      $('#norinuri').fadeOut();
    }
  );
  $('.algo').on('click', function(){
    window.location = "./norinuritest.html";
  });

  $('.graphic').mousemove(
    function(e){
      $(document.body).css('background-color', '#EFD2D3');
      $('#journey').fadeIn();
      $('.graphic h3').css('color', '#FFFFFF');
      $('.graphic h3').css('font-weight', '600');
      $('.graphic h6').css('color', '#FFFFFF');
      $('.graphic h6').css('font-weight', '300');
    });
  $('.graphic').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.graphic h3').css('color', '#404040');
      $('.graphic h3').css('font-weight', '300');
      $('.graphic h6').css('color', '#404040');
      $('.graphic h6').css('font-weight', '100');
      $('#journey').fadeOut();
    }
  );
  $('.graphic').on('click', function(){
    window.location = "./journey.html";
  });
  $('.retail').mousemove(
    function(e){
      $(document.body).css('background-color', '#2F2A51');
      $('#algo').fadeIn();
      $('.retail h3').css('color', '#FFFFFF');
      $('.retail h3').css('font-weight', '600');
      $('.retail h6').css('color', '#FFFFFF');
      $('.retail h6').css('font-weight', '300');
    });
  $('.retail').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.retail h3').css('color', '#404040');
      $('.retail h3').css('font-weight', '300');
      $('.retail h6').css('color', '#404040');
      $('.retail h6').css('font-weight', '100');
      $('#algo').fadeOut();
    }
  );
  $('.retail').on('click', function(){
    window.location = "./algo.html";
  });

});
