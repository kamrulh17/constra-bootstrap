/* --swiper slider -- */
var swiper = new Swiper(".mySwiper", {
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

  /* ===== counter-up ===== */
$('.counter').counterUp({
  delay: 100,
  time: 3000,
});

var mixer = mixitup('.gallery-container');

// $(document).ready(function() {
//   $('.image-link').magnificPopup({type:'image'});
// });

$('.test-popup-link').magnificPopup({
  type: 'image',
  // other options
  gallery:{
    enabled:true,
  },
});