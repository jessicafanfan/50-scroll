var controller = new ScrollMagic.Controller();
var bar = document.querySelector(".bar");

new ScrollMagic.Scene({
  triggerElement: bar,
  offset: 50,
  triggerHook: 0.5
})
  .on("enter", function() {
    bar.style.transform = "rotate(230deg)";
  })
  .on("leave", function() {
    bar.style.transform = "rotate(0)";
  })
  .addTo(controller);
