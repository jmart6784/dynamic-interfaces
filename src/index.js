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
// Variables to be declared in render controls function
let prevBtn;
let nextBtn;
let dotDiv;

// Render controls
let renderControls = (() => {
  let mainDiv = document.getElementById("photo-controls");

  // Create previous btn
  prevBtn = document.createElement("button");
  let prevTxt = document.createTextNode("⟵");

  prevBtn.id = "previous";
  prevBtn.className = "ctrl-btn";

  prevBtn.appendChild(prevTxt);
  mainDiv.appendChild(prevBtn);

  // Create Div for naviagtion buttons
  let parentDiv = document.createElement("div");
  parentDiv.id = "p-div";
  mainDiv.appendChild(parentDiv);

  // Create next btn
  nextBtn = document.createElement("button");
  let nextTxt = document.createTextNode("⟶");

  nextBtn.id = "next";
  nextBtn.className = "ctrl-btn";

  nextBtn.appendChild(nextTxt);
  mainDiv.appendChild(nextBtn);

  // Create photo slider navigation links
  let count = 0;
  photos.forEach((pic) => {
    count++;
    dotDiv = document.createElement("div");
    dotDiv.className = "dots-div";
    dotDiv.id = `dot-div-${count}`;

    parentDiv.appendChild(dotDiv);

    let storedCount = count;

    dotDiv.onclick = () => {
      console.log(storedCount);
      console.log(pic);

      photos.forEach((pic) => {
        pic.style.display = "none";
      });

      let newIndex = storedCount - 1;
      index = newIndex;
      photos[newIndex].style.display = "inline";
    };
  });
})();

// Show first photo before set interval starts
photos[0].style.display = "inline";
document.getElementById("dot-div-1").style.backgroundColor = "white";

let index = 0;

let slideInt = setInterval(() => {
  photos[index].style.display = "inline";
  let dots = document.querySelectorAll(".dots-div");
  let currentDot = document.getElementById(`dot-div-${index + 1}`);

  // Clear background color for each dot that is not selected
  dots.forEach((dot) => {
    dot.style.backgroundColor = "rgb(0, 0, 0, 0.0)";
  });

  // Hide all photos
  photos.forEach((pic) => {
    pic.style.display = "none";
  });

  // Show photo that is defined by the current index
  photos[index].style.display = "inline";
  currentDot.style.backgroundColor = "white";

  // Allow index to increment only up to photos limit
  if (index === photos.length - 1) {
    index = 0;
  } else {
    index++;
  }
}, 5000);

nextBtn.addEventListener("click", function () {
  let dots = document.querySelectorAll(".dots-div");
  let currentDot;

  // Resets index counter when photos array index is reached
  if (index === photos.length - 1) {
    index = 0;

    // Finds current dot according to the index + 1
    currentDot = document.getElementById(`dot-div-${index + 1}`);

    // resets background color for every dot
    dots.forEach((dot) => {
      dot.style.backgroundColor = "rgb(0, 0, 0, 0.0)";
    });

    // Hides all photos
    photos.forEach((pic) => {
      pic.style.display = "none";
    });

    // Shows current photo and dot according to index counter
    photos[index].style.display = "inline";
    currentDot.style.backgroundColor = "white";
  } else {
    index++;
    currentDot = document.getElementById(`dot-div-${index + 1}`);

    dots.forEach((dot) => {
      dot.style.backgroundColor = "rgb(0, 0, 0, 0.0)";
    });

    photos.forEach((pic) => {
      pic.style.display = "none";
    });
    photos[index].style.display = "inline";
    currentDot.style.backgroundColor = "white";
  }
});

prevBtn.addEventListener("click", function () {
  let dots = document.querySelectorAll(".dots-div");
  let currentDot;

  if (index === 0) {
    index = photos.length - 1;
    currentDot = document.getElementById(`dot-div-${photos.length}`);

    dots.forEach((dot) => {
      dot.style.backgroundColor = "rgb(0, 0, 0, 0.0)";
    });

    photos.forEach((pic) => {
      pic.style.display = "none";
    });
    photos[index].style.display = "inline";
    currentDot.style.backgroundColor = "white";
  } else {
    index--;
    currentDot = document.getElementById(`dot-div-${index + 1}`);

    dots.forEach((dot) => {
      dot.style.backgroundColor = "rgb(0, 0, 0, 0.0)";
    });

    photos.forEach((pic) => {
      pic.style.display = "none";
    });
    photos[index].style.display = "inline";
    currentDot.style.backgroundColor = "white";
  }
});
