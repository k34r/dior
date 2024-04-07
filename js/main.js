const swiper = new Swiper('.swiper', {
    // Optional parameters
   // loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });