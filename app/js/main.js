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
  
})