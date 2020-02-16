document.getElementById("graphic").style.width = 500 + 'px';
document.getElementById("norinuri").style.width = 300 + 'px';
document.getElementById("journey").style.width = 400 + 'px';
document.getElementById("comine").style.width = 400 + 'px';
document.getElementById("algo").style.width = 400 + 'px';



$(document).ready(function() {
  $('#graphic').hide();
  $('#norinuri').hide();
  $('#journey').hide();
  $('#comine').hide();
  $('#algo').hide();
  $('#retail').hide();
  $('.norinuri').mousemove(
    function(e){
      $(document.body).css('background-color', '#66C18B');
      $('#norinuri').fadeIn();
      $('.norinuri h4').css('color', '#FFFFFF');
      $('.norinuri h4').css('font-weight', '600');
      $('.norinuri h6').css('color', '#FFFFFF');
      $('.norinuri h6').css('font-weight', '300');
    });
  $('.norinuri').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('#norinuri').fadeOut();
      $('.norinuri h4').css('color', '#404040');
      $('.norinuri h4').css('font-weight', '300');
      $('.norinuri h6').css('color', '#404040');
      $('.norinuri h6').css('font-weight', '100');
    }
  );
  $('.norinuri').on('click', function(){
    window.location = "./norinuritest.html";
  });

  $('.journey').mousemove(
    function(e){
      $(document.body).css('background-color', '#EFD2D3');
      $('#journey').fadeIn();
      $('.journey h4').css('color', '#FFFFFF');
      $('.journey h4').css('font-weight', '600');
      $('.journey h6').css('color', '#FFFFFF');
      $('.journey h6').css('font-weight', '300');
    });
  $('.journey').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.journey h4').css('color', '#404040');
      $('.journey h4').css('font-weight', '300');
      $('.journey h6').css('color', '#404040');
      $('.journey h6').css('font-weight', '100');
      $('#journey').fadeOut();
    }
  );
  $('.journey').on('click', function(){
    window.location = "./journey.html";
  });

  $('.comine').mousemove(
    function(e){
      $(document.body).css('background-color', '#F3796F');
      $('#comine').fadeIn();
      $('.comine h4').css('color', '#FFFFFF');
      $('.comine h4').css('font-weight', '600');
      $('.comine h6').css('color', '#FFFFFF');
      $('.comine h6').css('font-weight', '300');
    });
  $('.comine').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.comine h4').css('color', '#404040');
      $('.comine h4').css('font-weight', '300');
      $('.comine h6').css('color', '#404040');
      $('.comine h6').css('font-weight', '100');
      $('#comine').fadeOut();
    }
  );
  $('.comine').on('click', function(){
    window.location = "./comine.html";
  });

  $('.algo').mousemove(
    function(e){
      $(document.body).css('background-color', '#2F2A51');
      $('#algo').fadeIn();
      $('.algo h4').css('color', '#FFFFFF');
      $('.algo h4').css('font-weight', '600');
      $('.algo h6').css('color', '#FFFFFF');
      $('.algo h6').css('font-weight', '300');
    });
  $('.algo').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.algo h4').css('color', '#404040');
      $('.algo h4').css('font-weight', '300');
      $('.algo h6').css('color', '#404040');
      $('.algo h6').css('font-weight', '100');
      $('#algo').fadeOut();
    }
  );
  $('.algo').on('click', function(){
    window.location = "./algo.html";
  });

  $('.graphic').mousemove(
    function(e){
      $(document.body).css('background-color', '#B44724');
      $('#graphic').fadeIn();
      $('.graphic h4').css('color', '#FFFFFF');
      $('.graphic h4').css('font-weight', '600');
      $('.graphic h6').css('color', '#FFFFFF');
      $('.graphic h6').css('font-weight', '300');
    });
  $('.graphic').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.graphic h4').css('color', '#404040');
      $('.graphic h4').css('font-weight', '300');
      $('.graphic h6').css('color', '#404040');
      $('.graphic h6').css('font-weight', '100');
      $('#graphic').fadeOut();
    }
  );
  $('.graphic').on('click', function(){
    window.location = "./graphic.html";
  });
  $('.retail').mousemove(
    function(e){
      $(document.body).css('background-color', '#79797a');
      $('#retail').fadeIn();
      $('.retail h4').css('color', '#FFFFFF');
      $('.retail h4').css('font-weight', '600');
      $('.retail h6').css('color', '#FFFFFF');
      $('.retail h6').css('font-weight', '300');
    });
  $('.retail').mouseleave(
    function(){
      $(document.body).css('background-color', '#FFFFFF');
      $('.retail h4').css('color', '#404040');
      $('.retail h4').css('font-weight', '300');
      $('.retail h6').css('color', '#404040');
      $('.retail h6').css('font-weight', '100');
      $('#retail').fadeOut();
    }
  );
  $('.retail').on('click', function(){
    window.location = "./retail.html";
  });

});
