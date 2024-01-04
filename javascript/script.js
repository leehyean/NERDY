
AOS.init();

var swiper = new Swiper(".section_1 .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: true,
  autoplay: {
    delay: 4000,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: { 반응형 width 

  //   1020: { 640 이상일 경우

  //   slidesPerView: 1,  }, 레이아웃 2 },

  //   768: { 
  //     slidesPerView: 3, 
  //   },

  //   },


});

var swiper = new Swiper(".section_6 .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: { 

    // 1020: { 640 이상일 경우

    // slidesPerView: 1,  }, 레이아웃 2 },

  

    1280: { 
      slidesPerView: 3, 
      slidesPerGroup: 3,
    },

    0: { 
      slidesPerView: 1, 
      slidesPerGroup: 1,
    },

    },


});











