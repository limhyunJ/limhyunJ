$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    menu: "#menu",
    anchors: ["slide1", "slide2", "slide3", "slide4", "slide5"],
    navigation: true,
    navigationPosition: "right",
    slidesNavigation: true,
    slidesNavPosition: "bottom",

    // Scrolling

    //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
    css3: false,
    loopTop: true,
    loopBottom: true,
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        new TypeIt("#simpleUsage", {
          speed: 50,
          waitUntilVisible: true,
          startDelay: 1000,
        }).go();
      } else if (index == 2) {
        new TypeIt("#tool", {
          speed: 50,
          waitUntilVisible: true,
          startDelay: 1000,
        }).go();
        $("circle").addClass("active");
      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (index == 2 && direction == "down") {
        $("circle").removeClass("active");
      }
    },
  });
});
