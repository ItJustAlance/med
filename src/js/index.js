import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'slick-carousel';
//import popper from "popper.js";
//import bootstrap from "bootstrap";

$(function() {
    let win_w = $(document).width();

    console.log('srcipt.js')
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
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {

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
