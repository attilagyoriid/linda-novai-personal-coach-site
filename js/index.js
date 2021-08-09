/** @format */

gsap.registerPlugin(ScrollTrigger);

gsap.to(".scale-in", {
  scrollTrigger: {
    trigger: ".scale-in",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  scale: 1,
  opacity: 1,
  duration: 2,
  ease: "power3.out",
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


