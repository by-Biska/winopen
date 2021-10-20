$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $(".header__top").addClass('display-none');
    $(".header__bottom").addClass('header__bottom--active');
  } else {
    $(".header__top").removeClass('display-none');
    $(".header__bottom").removeClass('header__bottom--active');
  }
});
$('.workwith-slider').slick({
  arrows: false,
  slidesToShow:6,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        // dots: true
      }
    },
  ]
})