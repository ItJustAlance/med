import $ from 'jquery';

import 'slick-carousel';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/slider';
// import Swiper JS
import Swiper from 'swiper';

import Inputmask from "inputmask";

window.jQuery = $;
window.$ = $;
window.Swiper = Swiper;

// import Swiper styles


let im = new Inputmask({"mask": "+7 (999) 999-9999", "placeholder": "_"});
im.mask(".phone_mask");
// import popper from "popper.js";
// import bootstrap from "bootstrap";

$(function() {
    let win_w = $(document).width();

    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        loop:false,
        direction: 'vertical',
        watchSlidesProgress: true,
        // mousewheel: true,
    });
    let galleryTop = new Swiper('.js-gallery-top', {
        spaceBetween: 10,
        loop:false,
        navigation: {
            nextEl: '.b-item__slider__btn-next',
            prevEl: '.b-item__slider__btn-prev',
        },
        // loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: galleryThumbs,
        },
    });



    $( "#cost-slider" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( ".cost-slider__values .inp1" ).val( ui.values[ 0 ] );
            $( ".cost-slider__values .inp2" ).val( ui.values[ 1 ] );
        }
    });


    $(".specific-item__title").on("click",function(){
        $(this).parent().toggleClass('active')
    })
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
