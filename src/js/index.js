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
    if($(".gallery-thumbs").length > 0){
        if(win_w < 766) {

            let galleryTop = new Swiper('.js-gallery-top', {
                spaceBetween: 10,
                loop: false,
                freeMode: true,
                navigation: {
                    nextEl: '.b-item__slider__btn-next2',
                    prevEl: '.b-item__slider__btn-prev2',
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                // loopedSlides: 5, //looped slides should be the same
                breakpoints: {
                    1024: {},
                },
            });
        }
        if(win_w > 767) {
            let galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 10,
                slidesPerView: 3,
                freeMode: true,
                loop: false,
                direction: 'vertical',
                watchSlidesProgress: true,

                breakpoints: {
                    1024: {},
                },
            });
            let galleryTop = new Swiper('.js-gallery-top', {
                spaceBetween: 10,
                loop: false,
                navigation: {
                    nextEl: '.b-item__slider__btn-next',
                    prevEl: '.b-item__slider__btn-prev',
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                // loopedSlides: 5, //looped slides should be the same
                thumbs: {
                    swiper: galleryThumbs,
                },
            });
        }
    }

    $('ul.tabs').delegate('li:not(.current)', 'click', function() {
        $(this).addClass('current').siblings().removeClass('current')
            .parents('div.b-tabs').find('div.box').eq($(this).index()).fadeIn(0).siblings('div.box').fadeOut(0);
    })
    if($(".file").length > 0) {
        $('.file').change(function () {
            $(this).siblings('.text').text(this.value || 'Nothing selected')
        });
    }
    if($("#cost-slider").length > 0) {
        $("#cost-slider").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $(".cost-slider__values .inp1").val(ui.values[0]);
                $(".cost-slider__values .inp2").val(ui.values[1]);
            }
        });
    }


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
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    if($(".main-sliders-top").length > 0) {
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
    }
    if($(".slider-brands").length > 0) {
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
    }
    if(win_w < 1024){
        if($(".slider-lider").length > 0) {
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
    }
    $(".btn-toggle-filter").on("click", function(){
       $(".column-filters").toggle();
       return false;
    });
});
