var controller = new ScrollMagic.Controller();
var circleElement = document.querySelector(".circle");

new ScrollMagic.Scene({
  triggerElement: circleElement,
  offset: 50,
  triggerHook: 0.5
})
  .on("enter", function() {
    circleElement.style.transform = "scale(5)";
  })
  .on("leave", function() {
    circleElement.style.transform = "scale(1)";
  })
  .addTo(controller);
