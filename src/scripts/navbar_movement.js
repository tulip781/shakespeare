const initNavBarMovement = () => {
  var prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar-wrapper").style.top = "0";
    } else {
      document.querySelector(".navbar-wrapper").style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
  });
}

export { initNavBarMovement };
