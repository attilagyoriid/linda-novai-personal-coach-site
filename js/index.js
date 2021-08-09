/** @format */

gsap.registerPlugin(ScrollTrigger);

gsap.to(".scale-in", {
  scrollTrigger: {
    trigger: ".scale-in",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 1,
  scale: 1,
  duration: 4,
});

gsap.to("#goal-animation-container", {
  scrollTrigger: {
    trigger: "#goal-animation-container",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: 0,
  opacity: 1,
  duration: 2,
});
