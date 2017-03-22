$(document).ready(() =>{

  $('.about').click(function(){
        $('html, body').animate({
          scrollTop: $('#about').offset().top - 20
        }, 1000);
      });

  $('.projects').click(function(){
        $('html, body').animate({
          scrollTop: $('#projects').offset().top - 20
        }, 1000);
      });

  $('.skills').click(function(){
        $('html, body').animate({
          scrollTop: $('#skills').offset().top - 20
        }, 1000);
      });

  $('.contact').click(function(){
        $('html, body').animate({
          scrollTop: $('#contact').offset().top - 20
        }, 1000);
      });

$('section').mouseenter(function(){
     var id = $(this).attr('id');
     console.log(id);
     console.log($('li.' + id + ''));
     console.log($('a.' + id));
     $('a').removeClass('active');
     $('a.' + id).addClass('active');
   });


});
