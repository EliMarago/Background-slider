const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

const body = document.body;
const slides = document.querySelectorAll(".slide");

let activeSlide = 0;

const setBody = function () {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};
setBody();

const setActiveSlide = function () {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    slides[activeSlide].classList.add("active");
  });
};

btnRight.addEventListener("click", function () {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBody();
  setActiveSlide();
});
btnLeft.addEventListener("click", function () {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBody();
  setActiveSlide();
});
