document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  const hero = document.querySelector(".hero");
  const headset = document.querySelector(".hero-headset img");

  if (!hero || !headset) return;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateY = percentX * 12;
    const rotateX = percentY * -8;

    headset.style.transform = `
      perspective(1400px)
      rotateY(${rotateY}deg)
      rotateX(${rotateX}deg)
      translateZ(20px)
    `;
  });

  hero.addEventListener("mouseleave", () => {
    headset.style.transform = `
      perspective(1400px)
      rotateY(0deg)
      rotateX(0deg)
      translateZ(0px)
    `;
  });
});
