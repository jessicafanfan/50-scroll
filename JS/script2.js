var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("digit");
for (var i = 0; i < revealElements.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 50,
    triggerHook: 0.9
  })
    .setClassToggle(revealElements[i], "visible")
    // .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
    .addTo(controller);
}
