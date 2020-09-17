// Menu
let dropUp = document.getElementById("drop-up-hide");
let mainHover = document.getElementById("hover-maintain");

mainHover.addEventListener("mouseenter", function () {
  dropUp.style.display = "block";
});

mainHover.addEventListener("mouseleave", function () {
  dropUp.style.display = "none";
});

// Photo Slider
let photoDiv = document.getElementById("photo-div");
let photos = document.querySelectorAll(".slide");
let prevBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");

// photos.forEach((photo) => {

// });

// Show first photo before set interval starts
photos[0].style.display = "inline";

let index = 0;

let slideInt = setInterval(() => {
  photos[index].style.display = "inline";

  photos.forEach((pic) => {
    if (pic === photos[index]) {
      photos[index].style.display = "inline";
    } else {
      pic.style.display = "none";
    }
  });

  if (index === photos.length - 1) {
    index = 0;
  } else {
    index++;
  }
}, 5000);

nextBtn.addEventListener("click", function () {
  if (index === photos.length - 1) {
    index = 0;
    photos.forEach((pic) => {
      pic.style.display = "none";
    });
    photos[index].style.display = "inline";
  } else {
    index++;

    photos.forEach((pic) => {
      pic.style.display = "none";
    });
    photos[index].style.display = "inline";
  }
});

prevBtn.addEventListener("click", function () {
  if (index === 0) {
    index = photos.length - 1;
    photos.forEach((pic) => {
      pic.style.display = "none";
    });
    photos[index].style.display = "inline";
  } else {
    index--;

    photos.forEach((pic) => {
      pic.style.display = "none";
    });
    photos[index].style.display = "inline";
  }
});
