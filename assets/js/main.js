(function ($) {
    "use strict";

    // Script for OffCanvas Menu Activation
    $(document).ready(function () {
        $('.toggle-bar').on('click', function () {
            $('.off-canvas-menu-wrap, .off-canvas-overlay').addClass('active');
        })

        $('.cls-off-canvas-menu').on('click', function () {
            $('.off-canvas-menu-wrap, .off-canvas-overlay').removeClass('active');
        })
    })

    // Script for Sticky Header 
    $(window).scroll(function(){
        var sticky = $('.header-area'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });



    // Script for One-page Scroll
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href')); 
        $('html, body').animate({
        scrollTop: $section.offset().top-50
        }, 1500,'easeInOutExpo');
    }
    $('[data-scroll]').on('click', scrollToSection);

    document.querySelectorAll('.main-menu li a').forEach(function(each){
        each.addEventListener('click', function(e){
            document.querySelectorAll('.main-menu li a').forEach(function(each){
                each.parentElement.classList.remove('active');
            })
            e.target.parentElement.classList.add('active');
        })
    })

    document.querySelectorAll('.off-canvas-menu li a').forEach(function(each){
        each.addEventListener('click', function(e){
            $('.off-canvas-menu-wrap,.off-canvas-overlay').removeClass('active');
        })
    })
    




    AOS.init({
        delay: 200, // values from 0 to 3000, with step 50ms
        duration: 800,
    });


    // Script for Slick Slider Activation
    $('.work-active').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // Script for Nice Select Activation 
    $(document).ready(function () {
        $('select').niceSelect();
    })


    // Script for Magnific Popup Activation 
    $(document).ready(function () {
        $('.iframe-link').magnificPopup({ type: 'iframe' });
    });



    // Script For Scroll to top Button
    $(document).ready(function () {
        var back = $('.back-to-top');
        back.on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        })
        $(window).on('scroll', function () {
            var self = $(this),
                height = self.height(),
                top = self.scrollTop();
            if (top > height) {
                back.addClass('visible');
            } else {
                back.removeClass('visible');
            }
        })

    })




    Util.cModal('#m-open','#c-modal-one', '.cls-modal')



  
})(jQuery);	 // End line