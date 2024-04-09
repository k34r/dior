const swiperTop = new Swiper('.top__slider', {
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
    }
  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  document.querySelectorAll('.accordeon__triger').forEach( item => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accordeon__item-active')
    })
  })