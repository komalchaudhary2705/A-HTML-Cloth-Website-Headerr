const navbar = document.querySelector(".navbar");
const openBtn = document.querySelector(".navbar-open-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");
const navLink = document.querySelectorAll('.navbar-link')
/* Open Navbar */
openBtn.addEventListener("click", () => {
  navbar.classList.add("active");
  overlay.classList.add("active");
});

/* Close Navbar */
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});

/* Close on Overlay Click */
overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});
navLink.forEach((link)=>{
  link.addEventListener("click",()=>{
    navbar.classList.remove('active')
    overlay.classList.remove('active')
  })
})
/* Sticky Shadow on Scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
