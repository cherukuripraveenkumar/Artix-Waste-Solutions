let lastScroll = 0;
const nav = document.querySelector(".smart-nav");

if (nav) {
  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      nav.classList.add("nav-hide");
    } else {
      nav.classList.remove("nav-hide");
    }

    if (currentScroll > 80) {
      nav.classList.add("nav-bg");
    } else {
      nav.classList.remove("nav-bg");
    }

    lastScroll = currentScroll;
  });
}
