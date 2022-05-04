$(function () {
  // section background
  let container = document.getElementById("container");
  let count = 40;
  for (let i = 0; i < 40; i++) {
    let gooeyBox = document.createElement("div");
    gooeyBox.className = "box";
    container.appendChild(gooeyBox);
  }
  setInterval(function () {
    let gooey = document.getElementsByClassName("box");
    for (let i = 0; i < gooey.length; i++) {
      gooey[i].style.left = Math.floor(Math.random() * 90) + "vw";
      gooey[i].style.top = Math.floor(Math.random() * 70) + "vh";
    }
  }, 2000);

  //section2 profile
  const profileHeight = document.querySelector(".profile-card-face");
  const moreBtn = document.querySelector(".moreProfile");
  const prifileImg = document.querySelector(".profileImg img");
  moreBtn.addEventListener("click", (e) => {
    profileHeight.classList.toggle("active");
    moreBtn.classList.toggle("active");
    prifileImg.classList.toggle("active");
  });

  //section3 clickbtn

  let animateButton = function (e) {
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };

  let classname = document.getElementsByClassName("bubbly-button");

  for (let i = 0; i < classname.length; i++) {
    classname[i].addEventListener("mouseover", animateButton, false);
  }

  $(".etc li").click(function () {
    $(".etc li").removeClass("push");
    $(this).addClass("push");
  });
  $(".etclist").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".etcContents").show("1000");
    } else {
      $(".etcContents")
        .not("." + value)
        .hide("1000");
      $(".etcContents")
        .filter("." + value)
        .show("1000");
    }
  });

  // ending
  $(".anititle span").draggable();
});
