new kursor({
  type: 5,
});

const progress = document.getElementById("progress");
const next = document.getElementById("next");
const previews = document.getElementById("previews");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

previews.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    previews.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    previews.disabled = false;
    next.disabled = false;
  }
};
