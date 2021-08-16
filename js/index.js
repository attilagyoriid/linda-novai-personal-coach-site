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

const block = document.querySelector(".column-1");

const blockTimeline = gsap
  .timeline({
    scrollTrigger: {
      trigger: block,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  })
  // Animate the header items
  .from(block.querySelectorAll(".column-1 .card-question"), {
    duration: 1,
    y: 40,
    opacity: 0,
    stagger: 0.25,
  });


