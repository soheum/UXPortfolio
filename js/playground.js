// document.getElementById("graphic").style.width = 500 + 'px';
// document.getElementById("norinuri").style.width = 300 + 'px';
// document.getElementById("journey").style.width = 400 + 'px';
// document.getElementById("comine").style.width = 400 + 'px';
// document.getElementById("algo").style.width = 400 + 'px';

document.onclick = userClicked;

  function userClicked(){
    var playground = ["./img/landing/baseball_landing.png", "./img/landing/insta_landing.png", "./img/landing/gaja_landing.png", "./img/landing/carui_landing.png", "./img/landing/zyga_landing.png"];
    var random;
    random = playground[Math.floor(Math.random() * playground.length)];

    document.getElementById('hide').querySelector("h6").innerHTML = "Now click when one of the photos";

    var img = document.createElement("img");
    img.setAttribute('src', random);
    var x = event.clientX;
    var y = event.clientY;
    var appear = document.getElementById('appear');
    var animation = document.getElementById('animation');
    animation.appendChild(img);
    img.style.position = 'absolute';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    img.style.width = "200px";
    if (random == "./img/landing/algo_landing.png" ){
      img.id = "carui";
      document.getElementById("carui").onclick = function(){
        location.replace("./playcarui.html");
      };
    } else if (random == "./img/landing/baseball_landing.png"){
      img.id = "baseball";
      document.getElementById("baseball").onclick = function(){
        location.replace("./playbaseball.html");
      };
    } else if (random == "./img/landing/gaja_landing.png"){
      img.id = "gaja";
      document.getElementById("gaja").onclick = function(){
        location.replace("./playgaja.html");
      };
    } else if (random == "./img/landing/insta_landing.png"){
      img.id = "insta";
      document.getElementById("insta").onclick = function(){
        location.replace("./playinsta.html");
      };
    } else if (random == "./img/landing/zyga_landing.png"){
      img.id = "zyga";
      document.getElementById("zyga").onclick = function(){
        location.replace("./playzyga.html");
      };
    }

  }



  $(document).ready(function(){

    $('#works').on('click', function(){
      window.location = "./work.html";
    });
    $('#playground').on('click', function(){
      window.location = "./playground.html";
    });
    $('#soheum').on('click', function(){
      window.location = "./indexcopy.html";
    });


  })
