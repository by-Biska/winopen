$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $(".header__top").addClass("display-none");
    $(".header__bottom").addClass("header__bottom--active");
  } else {
    $(".header__top").removeClass("display-none");
    $(".header__bottom").removeClass("header__bottom--active");
  }
});
$(".workwith-slider").slick({
  arrows: false,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        // dots: true
      },
    },
  ],
});

// $(function () {
  // $(".accordion__title-wrapper").on("click", function () {
  //   if ((this).hasClass("active")) {
  //   } else {
  //     $(".accordion__title-wrapper").not($(this)).removeClass("active");
  //     $(".accordion__text").not($(this).next()).slideUp(300);
  //     $(this).toggleClass("active").next().slideDown(300);
  //   }
  // });

  $('.accordion__title-wrapper').on("click", function () {
  
    var $this = $(this);
  
    if ($this.hasClass('active')) {
        $this.removeClass('active');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.accordion__title-wrapper').removeClass('active');
        $this.parent().parent().find('.accordion__title-wrapper').next().slideUp(350);
        $this.addClass('active');
        $this.next().slideToggle(350);
    }
});
