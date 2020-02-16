$(document).ready(function() {
  // $('#fullpage').fullpage({
  //   licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  //   autoScrolling: true,
  //   scollHorizontally: true,
  // });
  $(".header").on('click', function(){
    var state = $('.menu_btn').css('margin-left');
    var state2 = $('.sidenav').css('opacity');
    console.log(state2);
    if(state == '0px'){
      $('.menu_btn').css('margin-left', '6%');
      $('.sidenav').css('opacity', '1');
      $('.mainbody').css('margin-left', '10%');
      $('.header').css('margin-left', '10%');
    } else {
      $('.menu_btn').css('margin-left', '0%');
      $('.sidenav').css('opacity', '0');
      $('.mainbody').css('margin-left', '5%');
      $('.header').css('margin-left', '5%');
    }
  })
  //usertest 1_1
  $('#ut1_1').hide();
  $('.usertest_1_exp').mousemove(
    function(e){
      $('#ut1_1').stop(1, 1).fadeIn();
      $('#ut1_1').offset({
        top: e.pageY - $('#ut1_1').outerHeight(),
        left: e.pageX - ($('#ut1_1').outerWidth()/2)
      });
    });
  $('.usertest_1_exp').mouseleave(
    function(){
      $('#ut1_1').fadeOut();
    }
  );
  //usertest 1_2
  $('#ut1_2').hide();
  $('.usertest_1_exp2').mousemove(
    function(e){
      $('#ut1_2').stop(1, 1).fadeIn();
      $('#ut1_2').offset({
        top: e.pageY - $('#ut1_2').outerHeight(),
        left: e.pageX - ($('#ut1_2').outerWidth()/2)
      });
    });
  $('.usertest_1_exp2').mouseleave(
    function(){
      $('#ut1_2').fadeOut();
    }
  );
  //usertest 2_1
  $('#ut2_1').hide();
  $('.usertest_2_exp').mousemove(
    function(e){
      $('#ut2_1').stop(1, 1).fadeIn();
      $('#ut2_1').offset({
        top: e.pageY - $('#ut2_1').outerHeight(),
        left: e.pageX - ($('#ut2_1').outerWidth()/2)
      });
    });
  $('.usertest_2_exp').mouseleave(
    function(){
      $('#ut2_1').fadeOut();
    }
  );
  //usertest 2_2
  $('#ut2_2').hide();
  $('.usertest_2_exp2').mousemove(
    function(e){
      $('#ut2_2').stop(1, 1).fadeIn();
      $('#ut2_2').offset({
        top: e.pageY - $('#ut2_2').outerHeight(),
        left: e.pageX - ($('#ut2_2').outerWidth()/2)
      });
    });
  $('.usertest_2_exp2').mouseleave(
    function(){
      $('#ut2_2').fadeOut();
    }
  );

});
