// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var navClose = document.getElementById("navClose");

var body = document.body;
menuBtn.onclick = function () {
  menu.classList.add("active");
  menuBtn.classList.add("active");
  body.classList.add("active");
};
navClose.onclick = function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};
// menu end
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end

// // sliders
$(function () {
  $(".company__inner-slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true,
    cssEase: 'linear',
  });
});
$(function () {
  $(".company__inner-swiper").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: 'linear',
    rtl: true,
    variableWidth: true,
  });
});

 $(function () {
  $(".events__inner-slider").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows:false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3500,
    cssEase: 'linear',
    autoplaySpeed: 0,
        responsive: [
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});



