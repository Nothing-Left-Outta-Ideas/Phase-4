$(document).ready(function () {
  $("#section-cover").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;",
    }
  );

  $(".btn-discover").hover(
    function () {
      if ($(window).width() <= "768") {
        $(this).addClass("shadow-pulse");
      } else {
        $(this).addClass("shadow-pulse");
      }
    },

    function () {
      $(this).removeClass("shadow-pulse");
    }
  );

  $(".js--section-listening").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").addClass("underline");
      } else {
        $(".about-us").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-youtube").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").removeClass("underline");
      }
      if (direction == "up") {
        $(".about-us").addClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-nonverbal").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".nonverbal").addClass("underline");
      }
      if (direction == "up") {
        $(".nonverbal").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-clarity").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".nonverbal").removeClass("underline");
        $(".clarity").addClass("underline");
      }
      if (direction == "up") {
        $(".nonverbal").addClass("underline");
        $(".clarity").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-clarity-div").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--section-clarity-div").css("margin-right", "0%");
      }
      if (direction == "up") {
        $(".js--section-clarity-div").css("margin-right", "-6%");
      }
    },
    {
      offset: "25%",
    }
  );

  $(".js--section-friend").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".clarity").removeClass("underline");
        $(".friend").addClass("underline");
        $(".js--section-clarity-div").css("margin-right", "-3%");
      }
      if (direction == "up") {
        $(".clarity").addClass("underline");
        $(".friend").removeClass("underline");
        $(".js--section-clarity-div").css("margin-right", "0%");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-medium").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".friend").removeClass("underline");
        $(".medium").addClass("underline");
      }
      if (direction == "up") {
        $(".friend").addClass("underline");
        $(".medium").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--medium-support-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-support-1").addClass("medium-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--medium-support-1").removeClass("medium-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--medium-support-2").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-support-2").addClass("medium-support-rs-hover");
        $(".js--medium-support-1").removeClass("medium-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--medium-support-2").removeClass("medium-support-rs-hover");
        $(".js--medium-support-1").addClass("medium-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--medium-support-3").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-support-3").addClass("medium-support-ls-hover");
        $(".js--medium-support-2").removeClass("medium-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--medium-support-3").removeClass("medium-support-ls-hover");
        $(".js--medium-support-2").addClass("medium-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--medium-support-4").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-support-4").addClass("medium-support-rs-hover");
        $(".js--medium-support-3").removeClass("medium-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--medium-support-4").removeClass("medium-support-rs-hover");
        $(".js--medium-support-3").addClass("medium-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  $(".js--medium-conclusion").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--medium-conclusion").addClass("medium-conclusion-hover");
        $(".js--medium-support-4").removeClass("medium-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--medium-conclusion").removeClass("medium-conclusion-hover");
        $(".js--medium-support-4").addClass("medium-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */

  $(".mobile-nav-icon").click(function () {
    var nav = $(".nav-section");
    var icon = $(".mobile-nav-icon i");
    var isActive = nav.is(":visible");
    nav.slideToggle(200);

    if (isActive == false) {
      icon.removeClass("fa-bars");
      icon.addClass("fa-times");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });
});
