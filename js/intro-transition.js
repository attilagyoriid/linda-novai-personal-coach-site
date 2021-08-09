/** @format */

import gsap from "gsap";

gsap.to(".overlay h1", {
  duration: 2,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut,
});

gsap.to(".overlay", {
  duration: 2,
  delay: 1,
  top: "-100%",
  ease: Expo.easeInOut,
});
