window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.display = "inline-flex";
    document.querySelector("h1").style.fontSize = "1.5em";
    document.querySelector("#logo").style.height = "32px";
  } else {
    document.querySelector("header").style.display = "block";
    document.querySelector("h1").style.fontSize = "3em";
    document.querySelector("#logo").style.height = "64px";

  }
} 