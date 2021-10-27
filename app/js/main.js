$(function () {
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

  $(".accordion__title-wrapper").on("click", function () {
    var $this = $(this);

    if ($this.hasClass("active")) {
      $this.removeClass("active");
      $this.next().slideUp(350);
    } else {
      $this
        .parent()
        .parent()
        .find(".accordion__title-wrapper")
        .removeClass("active");
      $this
        .parent()
        .parent()
        .find(".accordion__title-wrapper")
        .next()
        .slideUp(350);
      $this.addClass("active");
      $this.next().slideToggle(350);
    }
  });


  // CALENDAR
  var themonth = 1;
  renderCal(themonth);

  $(".minusmonth").click(function () {
    themonth += -1;
    renderCal(themonth);
  });

  $(".addmonth").click(function () {
    themonth += 1;
    renderCal(themonth);
  });

  function renderCal(themonth) {
    $(".calendar li").remove();
    $(".calendar ul").append(
      '<li class="week"><span>M</span></li><li class="week"><span>T</span></li><li class="week"><span>W</span></li><li class="week"><span>T</span></li><li class="week"><span>F</span></li><li class="week"><span>S</span></li> <li class="week"><span>S</span></li>'
    );
    var d = new Date(),
      currentMonth = d.getMonth() + themonth, // get this month
      days = numDays(currentMonth, d.getYear()), // get number of days in the month
      fDay = firstDay(currentMonth, d.getYear()) - 1, // find what day of the week the 1st lands on
      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]; // month names

    $(".calendar p.monthname").text(months[currentMonth - 1]); // add month name to calendar

    for (var i = 0; i < fDay - 1; i++) {
      // place the first day of the month in the correct position
      $('<li class="empty">&nbsp;</li>').appendTo(".calendar ul");
    }

    for (var i = 1; i <= days; i++) {
      // write out the days
      $("<li class='day'><span>" + i + "</span></li>").appendTo(".calendar ul");
    }

    function firstDay(month, year) {
      return new Date(year, month, 1).getDay();
    }

    function numDays(month, year) {
      return new Date(year, month, 0).getDate();
    }

    $(".calendar li.day").click(function () {
      $(".calendar li.day").removeClass("active");
      $(this).addClass("active");
    });
  }
});
