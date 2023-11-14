var docStyle = document.documentElement.style;

$(".blobs").mousemove(function (e) {
  var offset = $(this).offset();
  docStyle.setProperty("--mouse-x", e.pageX - offset.left);
  docStyle.setProperty("--mouse-y", e.pageY - offset.top);
});

$(".blobs").mouseleave(function () {
  $(".four").removeClass("vsfr");
});

$(".blobs").mouseenter(function () {
  $(".four").addClass("vsfr");
});
