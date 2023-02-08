AOS.init();

/****** Swiper **********/
let i =new Swiper(".mySwiper-header", {
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  effect: "fade",

  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  loop: true,
});

let e=new Swiper(".latestnews", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  initialSlide: 1.2,
  centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: false,

    },
  }
});

let A= new Swiper(".gridSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 2,
  grid:{
    rows: 2,
  },
  loop:true,
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});



let s=new Swiper(".Swiper-hagar", {
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  slidesPerView: 1.5,
  spaceBetween: 20,
  initialSlide: 5.5,
  centeredSlides: true,
  grabCursor: true,
  freeMode: true,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3.5,
      spaceBetween: 25,
    },
    1500: {
      slidesPerView: 5.1,
      spaceBetween: 40,
    },
  },
});


/******************* login **********************/
const togglePassword = document.getElementsByClassName("togglePassword");
const password = document.getElementsByClassName("password");

for (let tp = 0; tp < togglePassword.length; tp++) {
  togglePassword[tp].addEventListener("click", function () {
    password[tp].setAttribute("type", password[tp].getAttribute("type") === "password" ? "text" : "password");
    this.classList.toggle("fa-eye")
    this.classList.toggle("fa-eye-slash");
  });
}







/************************ Photo Gallery *********************************/

