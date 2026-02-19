particlesJS("particles-js", {
  particles: {
    number: { value: 90 },
    color: { value: "#a855f7" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#7c3aed",
      opacity: 0.5,
      width: 1
    },
    move: { enable: true, speed: 1.8 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});
