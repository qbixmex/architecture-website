const navbarLinks = document.querySelector("#navbar-links");
const menuBtn = document.querySelector("#menu-btn");
const links = document.querySelectorAll(".navbar-link");

menuBtn.addEventListener("click", () => {
  if (navbarLinks.classList.contains("nav-links-hidden")) {
    navbarLinks.classList.remove("nav-links-hidden");
  } else {
    navbarLinks.classList.add("nav-links-hidden");
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navbarLinks.classList.add("nav-links-hidden");
  })
});

