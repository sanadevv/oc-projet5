const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// les variables
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
let currentSlideIndex = 0;

// clique droit
arrowRight.addEventListener("click", () => {
  if (currentSlideIndex === slides.length - 1) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
  }

  updateBanner();
  updateDot();
});

// clique gauche
arrowLeft.addEventListener("click", () => {
  if (currentSlideIndex === 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex--;
  }
  updateBanner();
  updateDot();
});

// fonction pour créer et mettre à jour les bullet points
function updateDot() {
  dotsContainer.innerHTML = "";

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === currentSlideIndex) {
      dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
  }
}
// fonction pour mettre a jour l'image et le text du banner
function updateBanner() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
  tagLine.innerHTML = slides[currentSlideIndex].tagLine;
}
updateBanner();
updateDot();
