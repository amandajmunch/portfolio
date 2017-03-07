$(document).ready(() =>{

// window.scrollBy({
//   top: 100, // could be negative value
//   left: 0,
//   behavior: 'smooth'
// });


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});





// $(document).on('scroll', function() {
//       var currentPosition = $(this).scrollTop();
//       $('.section').each(function() {
//         var sectionPosition = $(this).offset().top;
//         if(sectionPosition < currentPosition) {
//           $('a').removeClass('active');
//           $('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//         }
//       });
//     });
//     $('a').on('click', function() {
//       $('a').removeClass('active');
//       $(this).addClass('active');
//     });

// $(document).scroll(function() {
//   $('nav a[href="#'+$('section:hover').attr('id')+'"]').addClass('active').siblings('nav a').removeClass('active');
// });



// $(document).scroll(function(){
//         positionNav('name', 'name');
//         positionNav('about', 'about');
//         positionNav('projects', 'projects');
//         positionNav('skills', 'skills');
//         positionNav('contact', 'contact');
// });

 //    function positionNav(section, sectionClass) {
 //        // Get bottom position of section
 //        var bottom = $('#' + section).position().top + $('#' + section).outerHeight(true);
 //        var top = $(document).scrollTop()+230;

 //        if(top >= $('#' + section).position().top && top <= bottom){
 //            $('#' + sectionClass).addClass('active');
 //        } else {
 //            $('#' + sectionClass).removeClass('active');
 //        }
 // };


 var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});










});
