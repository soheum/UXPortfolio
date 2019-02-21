function randomImg1() {
    var myImages1 = new Array();
    myImages1[1] = "img/helsinki/hl_1.jpg";
    myImages1[2] = "img/helsinki/hl_2.jpg";
    myImages1[3] = "img/helsinki/hl_3.jpg";
    myImages1[4] = "img/helsinki/hl_4.jpg";
    myImages1[5] = "img/helsinki/hl_5.jpg";
    myImages1[6] = "img/helsinki/hl_6.jpg";
    myImages1[7] = "img/helsinki/hl_7.jpg";
    myImages1[8] = "img/helsinki/hl_8.jpg";
    myImages1[9] = "img/helsinki/hl_9.jpg";
    myImages1[10] = "img/helsinki/hl_10.jpg";
    myImages1[11] = "img/helsinki/hl_11.jpg";
    myImages1[12] = "img/helsinki/hl_12.jpg";
    myImages1[13] = "img/helsinki/hl_13.jpg";
    myImages1[14] = "img/helsinki/hl_14.jpg";

    var rnd = Math.floor( Math.random() * myImages1.length );
    if( rnd == 0) {
        rnd = 1;
    }
    document.getElementById("changeimg").src = myImages1[rnd];
}

function randomImg2() {
    var myImages2 = new Array();
    myImages2[1] = "img/paris/ps_1.jpeg";
    myImages2[2] = "img/paris/ps_2.jpeg";
    myImages2[3] = "img/paris/ps_3.jpeg";
    myImages2[4] = "img/paris/ps_4.jpeg";
    myImages2[5] = "img/paris/ps_5.jpeg";
    myImages2[6] = "img/paris/ps_6.jpeg";
    myImages2[7] = "img/paris/ps_7.jpeg";
    myImages2[8] = "img/paris/ps_8.jpeg";
    myImages2[9] = "img/paris/ps_9.jpeg";
    myImages2[10] = "img/paris/ps_10.jpeg";
    myImages2[11] = "img/paris/ps_11.jpeg";
    myImages2[12] = "img/paris/ps_12.jpeg";

    var rnd = Math.floor( Math.random() * myImages2.length );
    if( rnd == 0) {
        rnd = 1;
    }
    document.getElementById("changeimg1").src = myImages2[rnd];
}


function randomImg3() {
    var myImages3 = new Array();
    myImages3[1] = "img/porto/pr_1.JPG";
    myImages3[2] = "img/porto/pr_2.JPG";
    myImages3[3] = "img/porto/pr_3.JPG";
    myImages3[4] = "img/porto/pr_4.JPG";
    myImages3[5] = "img/porto/pr_5.JPG";
    myImages3[6] = "img/porto/pr_6.JPG";
    myImages3[7] = "img/porto/pr_7.JPG";
    myImages3[8] = "img/porto/pr_8.JPG";

    var rnd = Math.floor( Math.random() * myImages3.length );
    if( rnd == 0) {
        rnd = 1;
    }
    document.getElementById("changeimg2").src = myImages3[rnd];
}


