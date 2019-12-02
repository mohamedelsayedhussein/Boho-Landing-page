$(document).ready(function() {
  
      if ($(window).width() < 1024) {
        $('#fullpage').fullpage({
          autoScrolling: false,
          verticalCentered: false
        });
        
        var heroLink    = $('#link-hero');
        var hero        = $('#hero');
        var oneLink     = $('#link-one');
        var one         = $('#one');
        var twoLink     = $('#link-two');
        var two         = $('#two');
        var threeLink   = $('#link-three');
        var three       = $('#three');
    
        heroLink.on('click', function(){
            $('html, body').animate({
            scrollTop: hero.offset().top
          }, 500)
        });
        oneLink.on('click', function(){
            $('html, body').animate({
            scrollTop: one.offset().top
          }, 500)
        });
        twoLink.on('click', function(){
            $('html, body').animate({
            scrollTop: two.offset().top
          }, 500)
        });
        threeLink.on('click', function(){
            $('html, body').animate({
            scrollTop: three.offset().top
          }, 500)
        });
        
      } else {
        $('#fullpage').fullpage({
          anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
          autoScrolling: true,
          verticalCentered: false
        });
      }

      var controller = new ScrollMagic.Controller();
      var mobileHero = new ScrollMagic.Scene({
        triggerElement: '#hero',
        duration: '100%',
        triggerHook: 0,
        reverse: true,
      })
      .setClassToggle('#link-hero', 'link-active')
      // .addIndicators({
      //   colorTrigger: 'black',
      //   colorStart: '#000',
      // })
      .addTo(controller);
      // one
      var mobileOne = new ScrollMagic.Scene({
        triggerElement: '#one',
        duration: '100%',
        triggerHook: 0,
        reverse: true,
      })
      .setClassToggle('#link-one', 'link-active')
      .addTo(controller);
      // two
      var mobileTwo = new ScrollMagic.Scene({
        triggerElement: '#two',
        duration: '100%',
        triggerHook: 0,
        reverse: true,
      })
      .setClassToggle('#link-two', 'link-active')
      .addTo(controller);
      // three
      var mobileThree = new ScrollMagic.Scene({
        triggerElement: '#three',
        duration: '100%',
        triggerHook: 0,
        reverse: true,
      })
      .setClassToggle('#link-three', 'link-active')
      .addTo(controller);
      
      var desktopHero = new ScrollMagic.Scene({
        triggerElement: '#hero',
        duration: '100%',
        triggerHook: 0,
        reverse: true,
      })
      .setClassToggle('#menu-hero', 'link-active')
      .addTo(controller);
      // one
      var desktopOne = new ScrollMagic.Scene({
        triggerElement: '#one',
        duration: '100%',
        triggerHook: 0,
        reverse: true,
      })
      .setClassToggle('#menu-one', 'link-active')
      .addTo(controller);
      // two
      var desktopTwo = new ScrollMagic.Scene({
        triggerElement: '#two',
        duration: '100%',
        triggerHook: 0,
        reverse: true,
      })
      .setClassToggle('#menu-two', 'link-active')
      .addTo(controller);
      // three
      var desktopTwo = new ScrollMagic.Scene({
        triggerElement: '#three',
        duration: '100%',
        triggerHook: 0,
        reverse: true,
      })
      .setClassToggle('#menu-three', 'link-active')
      .addTo(controller);
      
      var controller = new ScrollMagic.Controller();
        
        var icon = $('.icon');
      
        var tl1 = new TimelineMax().add([
            TweenMax.from(icon, 1, {y: 50, autoAlpha: 0, ease:Power1.easeOut})]);

        new ScrollMagic.Scene({
                triggerElement: ('#one h1'),
                triggerHook: 0.5
              })
              .setTween(tl1)
              // .addIndicators({
              //   name: 'icon',
              //   colorTrigger: 'black',
              //   colorStart: 'cyan',
              //   colorEnd: 'purple'
              // })
              .addTo(controller);
      
    });