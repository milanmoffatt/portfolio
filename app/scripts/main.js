/* global $ */
console.log('\'Allo \'Allo!');

$(document).ready(function(){
  'use strict';
          $(window).scroll(function(){
            if (window.outerWidth > 1126) {
              if ($(this).scrollTop() > 200) {
                $('.menu').css('top', '45%');
              } else {
                $('.menu').css('top', '0');
              }
            }
          });
        let bluePics = ['blue_01.jpg', 'blue_02.jpg', 'blue_03.jpg', 'blue_04.jpg'];
        let current = 0;
        function changePic() {
          if (current === bluePics.length - 1) {
            current = 0;
          } else {
            current += 1;
          }
        }
        $('#blueCard').attr('src', 'images/' + bluePics[current]);

        $('#blueCard').click(() => {
          changePic();
          console.log(current);
          $('#blueCard').attr('src', 'images/' + bluePics[current]);
        });

        $('.fixed-img-container').hover(
            function() {
             let transamount = $('.fixed-img-container').height() - $('.fixed-img-container img').height();
            $('.fixed-img-container img').css('transform', `translateY(${transamount}px)`);
          },
            function () {
            $('.fixed-img-container img').css('transform', 'translateY(0px)');
        });
    });
