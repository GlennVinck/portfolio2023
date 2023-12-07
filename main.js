//event listeners

document.querySelector(".card1").addEventListener("click", () => {
  window.location.href = "project1.html";
});
document.querySelector(".card2").addEventListener("click", () => {
  window.location.href = "project2.html";
});
document.querySelector(".card3").addEventListener("click", () => {
  window.location.href = "project3.html";
});
document.querySelector(".card4").addEventListener("click", () => {
  window.location.href = "project4.html";
});

document.querySelector(".behance").addEventListener("click", () => {
  window.open("https://www.behance.net/glennvinck1", "_blank");
});
document.querySelector(".linkedin").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/glenn-vinck-6a1805bb/", "_blank");
});

document.querySelector(".service-box").addEventListener("mouseover", () => {
  document.querySelector(".service-info").classList.add("service-box-hover");
});

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

//service info animations

// const serviceHeader = document.querySelectorAll(".service-header");

// serviceHeader.forEach((header) => {
//   header.addEventListener("mouseover", showServiceInfo);
//   header.addEventListener("mouseout", hideServiceInfo);
// });

// function showServiceInfo(event) {
//   const serviceInfo = event.target.nextElementSibling;

//   serviceInfo.style.color = "red";
// }

// function hideServiceInfo(event) {
//   const serviceInfo = event.target.nextElementSibling;

//   serviceInfo.style.color = "white";
// }

// mailto button

document.querySelector(".mailto").addEventListener("click", () => {
  window.open("mailto:vinck_glenn@hotmail.com");
});
