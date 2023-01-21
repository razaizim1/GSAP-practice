const tl = gsap.timeline({
  default: { duration: 0.75, ease: "Power3.easeOut" },
});

tl.fromTo(
  ".hero-img",
  { scale: 1.4, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.25,
    duration: 2.5,
    ease: "elastic.out(2.5,2",
  }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta3", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta4", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".btn", { y: "30%", opacity: 0 }, { y: 0, opacity: 1 });

const logo = document.querySelector(".logo");
const letter = logo.textContent.split("");

logo.textContent = "";
letter.forEach((letter) => {
  logo.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 1, stagger: 0.05, ease: "back.out" }
);
