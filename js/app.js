$(document).ready(function() {

      if ($(window).width() < 767) {
        $('#fullpage').fullpage({
          autoScrolling: false,
          verticalCentered: false
        });
      }        
        $('#fullpage').fullpage({
          anchors: ['firstPage', 'secondPage', '3rdPage','4thpage', 'lastPage'],
          autoScrolling: true,
          verticalCentered: false,
          responsiveHeight: 100
        });

      var controller = new ScrollMagic.Controller();
      var desktopHero = new ScrollMagic.Scene({
        triggerElement: '#hero',
        duration: '100%',
        triggerHook: .2,
        reverse: true,
      })
      .setClassToggle('#menu-hero', 'link-active')
      .addTo(controller);
      // one
      var desktopOne = new ScrollMagic.Scene({
        triggerElement: '#one',
        duration: '100%',
        triggerHook: .2,
        reverse: true,
      })
      .setClassToggle('#menu-one', 'link-active')
      .addTo(controller);
      // two
      var desktopTwo = new ScrollMagic.Scene({
        triggerElement: '#two',
        duration: '100%',
        triggerHook: 0.2,
        reverse: true,
      })
      .setClassToggle('#menu-two', 'link-active')
      .addTo(controller);
      // three
      var desktopTwo = new ScrollMagic.Scene({
        triggerElement: '#three',
        duration: '100%',
        triggerHook: 0.2,
        reverse: true,
      })
      .setClassToggle('#menu-three', 'link-active')
      .addTo(controller);
      
      var controller = new ScrollMagic.Controller();
        
        var imgGallery = $('.img-gallery');
      
        var tl1 = new TimelineMax();
            tl1.staggerFrom(imgGallery, .5, {cycle:{y:[120, -120]}, autoAlpha: 0, ease:Power1.easeOut}, .2)
        new ScrollMagic.Scene({
                triggerElement: ('#two'),
                triggerHook: 0.5
              })
              .setTween(tl1)
              // .addIndicators({
              //   name: 'imgGallery',
              //   colorTrigger: 'black',
              //   colorStart: 'cyan',
              //   colorEnd: 'purple'
              // })
              .addTo(controller);

        var tl2 = new TimelineMax();
              var formWrapper = $('#form-wrapper')
        tl2.from(formWrapper, .5 , {autoAlpha: 0, ease:Back.easeIn})
      

    // init slick slider
    $('.slider-area').slick({
      autoplay: true,
      dots: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      pauseOnHover: false,
      prevArrow: '<button class="PrevArrow"></button>',
      nextArrow: '<button class="NextArrow"></button>',
      responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

});
