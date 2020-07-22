"use strict";

//For toggle language
var lang_active = document.getElementById("lang_active");
lang_active.addEventListener("click", (e) => {
  e.preventDefault();
  var hidden = document.getElementById("hidden");
  hidden.classList.toggle("show");
});

  var mobile_lang_active = document.getElementById("mobile_lang_active");
  mobile_lang_active.addEventListener("click", (e) => {
    e.preventDefault();
    var hidden = document.getElementById("mobile_hidden");
    hidden.classList.toggle("show");
  });


window.addEventListener("scroll", function () {
  var nav = document.querySelector(".head_top");
  var mobile_nav = document.querySelector(".header_mobile_top");
  if (window.scrollY > 0) {
    document.getElementById("logo").src = "images/logo_white.png";
    document.getElementById("mobile_logo").src = "images/logo_white.png";
  } else {
    document.getElementById("logo").src = "images/logo_red.png";
  }
  nav.classList.toggle("fixed", window.scrollY > 0);
  mobile_nav.classList.toggle("mobile_fixed", window.scrollY > 0);
});

// ===== Scroll to Top ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});

$("#return-to-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500
  );
});

//For Hamburger
var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", (e) => {
  document.getElementsByClassName("head_top")[0].classList.toggle("show");
});

$("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
  $(this).toggleClass("open");
});


