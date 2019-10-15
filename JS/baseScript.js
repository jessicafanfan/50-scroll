window.onload = function(e) {
  document
    .querySelector(`a[href='${location.pathname.substring(1)}']`)
    .classList.add("current");
};
