/* --swiper slider -- */
var swiper = new Swiper(".bannerSwiper", {
    autoplayDisableOnInteraction: false,
    pagination: {
      el: ".swiper-pagination",
    },
    direction: "horizontal",
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    speed: 1000,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
});

/* swiper slider deactivate on mouse hover and then activate again */
  $(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
      (this).swiper.autoplay.start();
  });

/* counter-up */
$('.counter').counterUp({
  delay: 100,
  time: 3000,
});

/* gallery mixitup */
var mixer = mixitup('.gallery-container');

/* gallery lightbox */
lightbox.option({
  alwaysShowNavOnTouchDevices:true,
  disableScrolling:true,
  fadeDuration:300,
  imageFadeDuration:300,
  resizeDuration:300,
  'wrapAround': true,
});

var swiper = new Swiper(".testimonialSwiper", {
  autoplayDisableOnInteraction: false,
  pagination: {
    el: ".swiper-pagination",
  },
  direction: "horizontal",
  loop: true,
  autoplay: {
      delay: 3000,
  },
  speed: 500,
});

