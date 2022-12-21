jQuery(document).ready(function ($) {
    jQuery(".menu_link").click(function () {
     elementClick = jQuery(this).attr("href")
     destination = jQuery(elementClick).offset().top - 120;
     jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
     return false;
    });
    });


$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.menu_nav').toggleClass('open-menu');
        $('body').toggleClass('.lock');
    });
});

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        infinite:true,
        autoplay:false,
        autoplaySpeed:500,
        pauseOnFocus:true,
        pauseOnHover:true,
        draggable:false,
        swipe:true,
        waitForAnimate:false,
        responsive:[
            {
                breakpoint:840,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        mobileFirst:false,
        });
});

// $(document).ready(function(){
//     $('.slider_material').slick({
//         arrows:true,
//         adaptiveHeight:true,
//         slidesToShow:1,
//         slidesToScroll:1,
//         speed:1000,
//         easing:'linear',
//         infinite:true,
//         autoplay:false,
//         autoplaySpeed:500,
//         pauseOnFocus:true,
//         pauseOnHover:true,
//         draggable:false,
//         swipe:true,
//         waitForAnimate:false,
//         mobileFirst:false,
//         });
// });

// $('.single-item').slick();

$(document).ready(function(){
    $('.single-item').slick();XMLDocumentx
});

var buttons = document.querySelectorAll('.button_background_service');
var past = document.getElementsByClassName('pasting');
var det = document.getElementsByClassName('detailing');

buttons[1].addEventListener('click', function()
{
  buttons[1].classList.add("active");
  buttons[0].classList.remove("active");
  det[0].style.display = "flex";
  past[0].style.display = "none";
})

buttons[0].addEventListener('click', function()
{
  buttons[0].classList.add("active");
  buttons[1].classList.remove("active");
  past[0].style.display = "flex";
  det[0].style.display = "none";
})



