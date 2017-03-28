$(document).ready(() =>{

  $('.about').click(function(){
        $('html, body').animate({
          scrollTop: $('#about').offset().top
        }, 1000);
      });

  $('.projects').click(function(){
        $('html, body').animate({
          scrollTop: $('#projects').offset().top
        }, 1000);
      });

  $('.skills').click(function(){
        $('html, body').animate({
          scrollTop: $('#skills').offset().top
        }, 1000);
      });

  $('.contact').click(function(){
        $('html, body').animate({
          scrollTop: $('#contact').offset().top
        }, 1000);
      });

var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("active");
            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("active");
                $("nav li:last-child a").addClass("active");
            }
        }
    });

  var $hamburger = $('.box-shadow-menu');
  var $modal = $('#modal');
  var $modalButton = $('.closebtn');

  var toggleModal = function(){
    $modal.fadeToggle('slow');
     // $modal.toggle('slide');
  }

  // $('.hamburger-close').click(toggleModal);
  // $('a.side-nav').click(toggleModal);
function openNav() {
    $(".side-nav").css("width", "0");
    $('.side-nav').css("width","250px");

    // $('.side-nav').addClass('open');
    $(".container").css("margin-left","0");
    $(".container").css("margin-left", "250px");
    // $('.container').addClass('open');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $(".side-nav").css("width", "0");
    $(".container").css("margin-left","0");
}


  $hamburger.click(openNav);
  $modal.click(closeNav);


$('.box-shadow-menu').click(function () {
      $('.side-nav').toggleClass('expand');
    })



});
