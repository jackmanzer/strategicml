document.getElementById("hamburger-menu").onclick = function () {
  if (document.getElementById("body").style.overflow === "hidden") {
    document.getElementById("body").style.overflow = "visible";
  } else {
    document.getElementById("body").style.overflow = "hidden";
  }
};
