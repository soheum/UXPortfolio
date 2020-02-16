$(document).ready(function() {
  $('#fullpage').fullpage({
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling: true,
    scollHorizontally: true,
  });
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
    // if(state == 'none'){
    //   $('.sidenav').css('display', 'flex');
    // } else{
    //   $('.sidenav').css('display', 'none');
    // }
  })
});
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#project01',
  duration: '100%'
})
.setClassToggle('#project01', 'fade-in')
.addTo(controller);

  // var controller = new ScrollMagic.Controller();
  //
  // var scene0 = new ScrollMagic.Scene({
  //   // triggerElement: '#pinned-trigger1',
  //   // duration: 50,
  //   duration: $(window).height(),
  //   triggerHook: 0,
  //   reverse: true
  // })
  // .setPin('#pinned-element0');
  //
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: '#pinned-trigger1',
  //   // duration: 50,
  //   duration: $(window).height() - 100,
  //   triggerHook: 0,
  //   reverse: true
  // })
  // .setPin('#pinned-trigger1');
  //
  // var scene2 = new ScrollMagic.Scene({
  //   triggerElement: '#pinned-trigger2',
  //   duration: 100
  // })
  // .setPin('#pinned-element2');
  //
  // controller.addScene([
  //   scene,
  //   scene2
  // ]);
