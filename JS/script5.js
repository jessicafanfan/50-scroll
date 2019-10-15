var controller = new ScrollMagic.Controller();
var circleElements = document.getElementsByClassName("circle");

for (var i = 0; i < circleElements.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: circleElements[i],
    offset: 50,
    triggerHook: 0.5
  })
    .setClassToggle(circleElements[i], "stretch")
    .addTo(controller);
}
