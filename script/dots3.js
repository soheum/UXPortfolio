$(document).ready(function(){
    $('#cell1').mouseenter(function(){
        $(this).css('transform', 'scale(1, 1) translate(200px, 10px)');
        $(this).css('transition-duration', '1s');
        $('#cell1_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('user interaction with technology');
        };
        txt();
    });
    $('#cell1_img').mouseenter(function(){
        var txt = function() {
            $('.cell').find('span').text('user interaction with technology');
        }
        txt();
    });
    $('#cell2').mouseenter(function(){
        $(this).css('transform', 'scale(1, 1) translate(0px, -70px)');
        $(this).css('transition-duration', '1s');
        $('#cell2_img').css('opacity', '1');
        $('.cell #data_txt').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('UX design with machine learning');
        };
        txt();
    });
    $('#cell2_img').mouseenter(function(){
        var txt = function() {
            $('.cell').find('span').text('UX design with machine learning');
        }
        txt();
    });
    $('#cell3').mouseenter(function(){
        $(this).css('transform', 'scale(1, 1) translate(-200px, 10px)');
        $(this).css('transition-duration', '1s');
        $('#cell3_img').css('opacity', '1');
        $('.cell #soccer_txt').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('interactive data visualization');
        };
        txt();
    });
    $('#cell3_img').mouseenter(function(){
        var txt = function() {
            $('.cell').find('span').text('interactive data visualization');
        }
        txt();
    });
    $('#cell4').mouseenter(function(){
        $(this).css('transform', 'scale(1, 1) translate(100px, 60px)');
        $(this).css('transition-duration', '1s');
        $('#cell4_img').css('opacity', '1');
        $('.cell #school_txt').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('data visualization with social value');
        };
        txt();
    });
    $('#cell4_img').mouseenter(function(){
        var txt = function() {
            $('.cell').find('span').text('data visualization with social value');
        }
        txt();
    });
    $('#cell5').mouseenter(function(){
        $(this).css('transform', 'scale(1, 1) translate(-100px, 60px)');
        $(this).css('transition-duration', '1s');
        $('#cell5_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('international experience');
        };
        txt();
    });
    $('#cell5_img').mouseenter(function(){
        var txt = function() {
            $('.cell').find('span').text('international experience');
        }
        txt();
    });
    $('#cell6').mouseenter(function(){
        $(this).css('transform', 'scale(1, 1) translate(200px, 60px)');
        $(this).css('transition-duration', '1s');
        $('#cell6_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('experience with various forms');
        };
        txt();
    });
    $('#cell6_img').mouseenter(function(){
        var txt = function() {
            $('.cell').find('span').text('experience with various forms');
        }
        txt();
    });
    $('#cell7').mouseenter(function(){
        $(this).css('transform', 'scale(1, 1) translate(0px, 140px)');
        $(this).css('transition-duration', '1s');
        $('#cell7_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('graphic design with patterns');
        };
        txt();
    });
    $('#cell7_img').mouseenter(function(){
        var txt = function() {
            $('.cell').find('span').text('graphic design with patterns');
        }
        txt();
    });
    $('#cell8').mouseenter(function(){
        $(this).css('transform', 'scale(1, 1) translate(-200px, 60px)');
        $(this).css('transition-duration', '1s');
        $('#cell8_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('internship in Helsinki');
        };
        txt();
    });
    $('#cell8_img').mouseenter(function(){
        var txt = function() {
            $('.cell').find('span').text('internship in Helsinki');
        }
        txt();
    });
});
