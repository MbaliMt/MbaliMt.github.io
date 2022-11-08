$(window).scroll(function () {
  if ($("#aboutus").isVisible()) {
    if (oneElementHasHoverEffect == 0) {
      $(".aboutList").addClass("hoverEffect");
      oneElementHasHoverEffect = 1;
    }
  } else {
    $(".aboutList").removeClass("hoverEffect");
    oneElementHasHoverEffect = 0;
  }

  if ($("#parallax").isVisible()) {
    if (oneElementHasHoverEffect == 0) {
      $(".thinkList").addClass("hoverEffect");
      oneElementHasHoverEffect = 1;
    }
  } else {
    $(".thinkList").removeClass("hoverEffect");
    oneElementHasHoverEffect = 0;
  }

  if ($("#services").isVisible()) {
    if (oneElementHasHoverEffect == 0) {
      $(".toolList").addClass("hoverEffect");
      oneElementHasHoverEffect = 1;
    }
  } else {
    $(".toolList").removeClass("hoverEffect");
    oneElementHasHoverEffect = 0;
  }
});
