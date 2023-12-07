//blob animation

var docStyle = document.documentElement.style;
var blobs = document.querySelector(".blobs");
var four = document.querySelector(".four");

if (window.innerWidth > 1079) {
  blobs.addEventListener("mousemove", function (e) {
    var offset = getOffset(blobs);
    docStyle.setProperty("--mouse-x", e.pageX - offset.left);
    docStyle.setProperty("--mouse-y", e.pageY - offset.top);
  });

  blobs.addEventListener("mouseleave", function () {
    four.classList.remove("vsfr");
  });

  blobs.addEventListener("mouseenter", function () {
    four.classList.add("vsfr");
  });
}

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
  };
}
