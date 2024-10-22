document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".ad-banner");
  banner.style.opacity = 0;
  setTimeout(() => {
    banner.style.transition = "opacity 0.5s ease-in";
    banner.style.opacity = 1;
  }, 200);
});

document.addEventListener("DOMContentLoaded", function () {
  const logos = document.querySelector(".logos");

  setTimeout(() => {
    logos.style.animationPlayState = "running";
    setInterval(() => {
      logos.style.animationPlayState = "paused";
      setTimeout(() => {
        logos.style.animationPlayState = "running";
      }, 3000);
    }, 15000);
  }, 3000);
});
