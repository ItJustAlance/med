import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'slick-carousel';
//import popper from "popper.js";
//import bootstrap from "bootstrap";

$(function() {
    let win_w = $(document).width();

    console.log('srcipt.js')
    $(".hamburger-open").on("click",function(){
        $(".mobile-menu-wrapper").addClass('active')
    })
    $(".menu-close").on("click",function(){
        $(".mobile-menu-wrapper").removeClass('active')
    })
    $(".menu-list .arr").on("click",function(){
        $(this).next('ul').slideToggle()
    })
    $(".submenu .submenu-close").on("click",function(){
        $(".submenu").fadeOut()
    })
    $(".lnk-menu-prof").on("click",function(){
        $(".submenu.sub1").fadeIn();
        return false
    })
    $(".lnk-menu-prod").on("click",function(){
        $(".submenu.sub2").fadeIn();
        return false
    })


    $(".main-sliders-top .slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: false,
        arrows: false,
        variableWidth: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $(".slider-brands .slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        centerMode: false,
        arrows: true,
        variableWidth: false,
        speed: 500,
        slidesToScroll: 3,
        autoplay: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });
    if(win_w < 900){
        $(".slider-lider .slider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            centerMode: false,
            arrows: true,
            variableWidth: false,
            speed: 500,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});
