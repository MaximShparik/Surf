$(function(){

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__rirght" src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-dotshead'
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'
  });

  $('.serf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__rirght" src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-map',
    responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.serf-slider',
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1091,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 631,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });

  $('.holder__slider,.shop__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__rirght" src="img/arrows-right.svg" alt=""></img>',

  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
     $('.quantity').each(function() {
       var spinner = $(this),
         input = spinner.find('input[type="number"]'),
         btnUp = spinner.find('.quantity-up'),
         btnDown = spinner.find('.quantity-down'),
         min = input.attr('min'),
         max = input.attr('max');

       btnUp.click(function() {
         var oldValue = parseFloat(input.val());
         if (oldValue >= max) {
           var newVal = oldValue;
         } else {
           var newVal = oldValue + 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
       });

       btnDown.click(function() {
         var oldValue = parseFloat(input.val());
         if (oldValue <= min) {
           var newVal = oldValue;
         } else {
           var newVal = oldValue - 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
       });

     });

     $('.quantity-button').on('click',function(){
       let summ = $('.nights').val() * $('.summ').data('nights')+($('.guests').val()-1)*$('.summ').data('guests');
       $('.summ').html('$'+summ);
     });

     let summ = $('.nights').val() * $('.summ').data('nights')+($('.guests').val()-1)*$('.summ').data('guests');
     $('.summ').html('$'+summ);

     $('.surfboard-box__circle').on('click',function(){
       $(this).toggleClass('active')
     });

     $('.menu-btn').on('click',function(){
       $('.menu').toggleClass('active-menu'),
       $('.menu-btn').toggleClass('active-menu-btn'),
       $('.menu__list').toggleClass('animated fadeIn')
     });

    

     wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
});
