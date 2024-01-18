document.addEventListener("DOMContentLoaded", () => {

  const mediaQuery = "(min-width: 992px)";
  const desktop = window.matchMedia(mediaQuery);

  // Get all tab headings and tab content slides
  const tabHeadings = document.querySelectorAll(".tabs-headings button");
  const tabContentSlides = document.querySelectorAll(".tabs-content .slide");

  // Add click event listeners to each tab heading
  tabHeadings.forEach((heading, index) => {
    heading.addEventListener("click", () => {

      tabHeadings.forEach((h) => {
        h.classList.remove("active");
      });

      heading.classList.add("active");

      tabContentSlides.forEach((slide) => {
        slide.classList.remove("active");
        setTimeout(() => {
          slide.style.display = "none";
        }, 50);
      });


      const selectedSlide = tabContentSlides[index];

      setTimeout(() => {
        selectedSlide.style.display = index > 0 && desktop.matches ? "flex" : "block";
      }, 100)

      setTimeout(() => {
        selectedSlide.classList.add("active");
      }, 200);
    });
  });

  // Add an event listener to handle the end of the transition
  tabContentSlides.forEach((slide) => {
    slide.addEventListener("transitionend", () => {
      if (!slide.classList.contains("active")) {
        slide.style.display = "none";
      }
    });
  });
});
