$(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll < 300) {
        $(".sticky-top").css("background", "transparent");
        $(".sticky-top").css("z-index", "1000");
        $(".sticky-top").css(
          "box-shadow",
          "none"
        );
        $(".nav-link").removeClass("dark");
      } else {
        $(".sticky-top").css("background", "white");
        $(".sticky-top").css(
          "box-shadow",
          "rgba(0, 0, 0, 0.12) 0px 2px 4px 0px"
        );
        $(".nav-link").addClass("dark");
      }
    });