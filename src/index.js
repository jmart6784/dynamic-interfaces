let dropUp = document.getElementById("drop-up-hide");
let mainHover = document.getElementById("hover-maintain");

mainHover.addEventListener("mouseenter", function () {
  dropUp.style.display = "block";
});

mainHover.addEventListener("mouseleave", function () {
  dropUp.style.display = "none";
});
