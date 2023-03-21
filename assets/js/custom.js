var templateDoc;
(function($) {
    'use strict';

    // Preloader
    $(window).on('load', function() {
        $('.preloader').addClass('hidden');
        $('[data-popup="tooltip"]').tooltip();
    });
    $(".hamburger>.hamburger_btn").on('click', function() {
        $(".header .navigation").toggleClass('open');
        $(this).toggleClass('active');
    });
    // Mobile Menu
    $(".header .menu-item-has-children > a").on('click', function(e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();
        submenu.slideToggle(200);
    });
    // Team Social
    $(".team_share").on('click', function(e) {
        var teamsocial = $(this).next(".team_share + .social");
        e.preventDefault();
        teamsocial.slideToggle(200);
    });

    
//Counter
    const counters = document.querySelectorAll('.counter')
    counters.forEach(counter => {
     counter.innerText = '0'
     const updatecounter =() => {
         const target = +counter.getAttribute('data-target')
         const c = +counter.innerText
         const increment = target / 200
         if (c<target) {
             counter.innerText = `${Math.ceil(c+increment)}`
             setTimeout(updatecounter,1 )
         }
         else{
             counter.innerText=target
         }
     }
     updatecounter()
 });

    // Sticky Header
    var header = $(".can-sticky");
    var footer = $(".ft-sticky");
    var headerHeight = header.innerHeight();
    var FooterHeight = footer.innerHeight();

    function doSticky() {
        if (window.pageYOffset > headerHeight) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
        if (window.pageYOffset > FooterHeight) {
            footer.addClass("d-flex");
        } else {
            footer.removeClass("d-flex");
        }
    }
    doSticky();
    //On scroll events
    $(window).on('scroll', function() {
        doSticky();
    });
    if ($(".back-to-top").length) {
        $(".back-to-top").on("click", function() {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );

            return false;
        });
    };
    $('.thm-btn .button_title').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='btn_letters'>$&</span>"));
    });
    var btnHover = document.querySelectorAll('.thm-btn');
    btnHover.forEach(function(btnHover) {
        btnHover.addEventListener('mouseenter', function() {
            var letter = btnHover.querySelectorAll('.btn_letters');
            anime.timeline({}).add({
                targets: letter,
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 50 * i
            });
        });
    });
    
    //youtube Video Popup
 $(document).ready(function(){
    var url = $("#cartoonVideo").attr('src');
    
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
    
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
});
 //
  // contact Form 
        $("#contactMail").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    var url  = form.attr('action');
    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               //var data = $.parseJSON(data);
               if(data=='Success')
               {
                   $("#msgBox").show();
                   $("#msgBox").html('<div class="alert alert-success" role="alert">Thank You.</div>');
                    $("#contactMail").trigger("reset");
                   
               }
               else
               {
                   $("#msgBox").show();
                   $("#msgBox").html('<div class="alert alert-danger" role="alert">'+data+'</div>');
               }
             
           }
           
         });
    });
        ///
        $('.banner_slider').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


        /////
    
    $('.b').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });

      // screenshort-slider
      $('.creenshort-slider').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 5,
  autoplay:true,
  arrows: false,
   dots: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    // service_slider
    $('.partner-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        dotsClass: "slick-dots d-flex",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    templateDoc = {
        init: function() {
            this.mainBaner();
        },
       

        // Main Banner
        mainBnner() {
            var sliderContent = $('.nner_slide'),
                countStatus = $('.slider-count');

            sliderContent.slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                speed: 1000,
                dots: true,
                dotsClass: "slick-dots container",
                appendDots: $('.slick-slider-dots'),
                arrows: true,
            });

            sliderContent.on('init reInit afterChange', function(
                event,
                slick,
                currentSlide,
                nextSlide
            ) {
                if (!slick.$dots) {
                    return;
                }
                var i = (currentSlide ? currentSlide : 0) + 1;
                var statusText = i > 10 ? i : '0' + i;
                countStatus.html(
                    '<span class="current">' +
                    statusText +
                    '</span>' +
                    '<small>/' + slick.$dots[0].children.length + '</small>'
                );
            });
        },
    };
    $(document).ready(function() {
        templateDoc.init();
    });
})(jQuery);