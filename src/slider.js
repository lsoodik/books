let images = [{
  url:"../src/svg/banners/banner1.svg"
},{
  url:"../src/svg/banners/banner2.svg"
},{
  url:"../src/svg/banners/banner3.svg"
} ]

function initSlider () {
  if (!images || !images.length) return;
  let sliderImages = document.querySelector(".banners");
  let sliderCircles = document.querySelector(".dots");

  initImages();
  initCircles();
  initAutoPlay();

  function initImages() {
    images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${image.url});" data-index="${index}"></div>`;
        sliderImages.innerHTML +=imageDiv;
    });
    console.log(images.length)
}

function initCircles() {
    images.forEach((image, index) => {
        let circle = `<div class="dot n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
        sliderCircles.innerHTML +=circle;
    });
    
    sliderCircles.querySelectorAll(".dot").forEach(circle => {
        circle.addEventListener("click", function() {
            moveSlider(this.dataset.index);
            sliderCircles.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        });
    });
}

function initAutoPlay(){
  setInterval(()=>{
    let curNum = +sliderImages.querySelector(".active").dataset.index;
    let nextNum = curNum === images.length - 1? 0 : curNum + 1;
    moveSlider(nextNum)
  }, 5000)
}

  function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      sliderCircles.querySelector(".active").classList.remove("active");
      sliderCircles.querySelector(".n" + num).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded",initSlider);