import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import 'slick-carousel';
$(function(){
    console.log('init loo');
    const headerOptions = {
        init: function(){
        $(".main-sliders-top .slider").slick({
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: false,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 5000
        });
        closeMenu: function(){
            $('.main-nav li a').click(function(){
                $('body').removeClass('is-menu-open');

                if ("ontouchstart" in document.documentElement) {
                    bodyScrollLock.clearAllBodyScrollLocks();
                }
            });
        },


    };

    return headerOptions.init();
});
