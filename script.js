document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.querySelector(".hero-content");
    heroContent.classList.add("fly-in");
  });
document.addEventListener("DOMContentLoaded", function() {
    const processSection = document.querySelector("#process-section");
    const processImage = document.querySelector(".process-image");
    let isAnimated = false;
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function flyInAnimation() {
      if (!isAnimated && isInViewport(processSection)) {
        processImage.classList.add("fly-in");
        isAnimated = true;
      }
    }
  
    window.addEventListener("scroll", flyInAnimation);
  });
  
  
  
