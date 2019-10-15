var controller = new ScrollMagic.Controller();
var animateElem = document.getElementById("animate2");
var animateElemText = document.querySelector("#animate2 p");
var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  duration: 800
})
  .on("enter", function() {
    animateElem.style.backgroundColor = "red";
    animateElem.style.transform = "rotate(45deg)";
    animateElemText.style.transform = "rotate(-45deg)";
  })
  .on("leave", function() {
    animateElem.style.backgroundColor = "";
    animateElem.style.transform = "";
    animateElemText.style.transform = "";
  })
  .addTo(controller);
