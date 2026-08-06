// Menu mobile
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  if (toggle) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Respecte prefers-reduced-motion : on coupe la vidéo de fond et on garde le poster
  const video = document.querySelector(".hero__video");
  if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.removeAttribute("autoplay");
    video.pause();
  }
});
