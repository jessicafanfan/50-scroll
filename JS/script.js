var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0.5,
  duration: "70%"
})
  .setClassToggle("#reveal1", "visible")
  .addTo(controller);
