document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded


  console.log("loaded");
  // Get all tab headings and tab content slides
  const tabHeadings = document.querySelectorAll(".tabs-headings button");
  const tabContentSlides = document.querySelectorAll(".tabs-content .slide");

  // Add click event listeners to each tab heading
  tabHeadings.forEach(function (heading, index) {
    heading.addEventListener("click", function () {
      // Remove 'active' class from all tab headings and content slides
      tabHeadings.forEach(function (h) {
        h.classList.remove("active");
      });

      tabContentSlides.forEach(function (slide) {
        slide.classList.remove("active");
      });

      // Add 'active' class to the selected tab heading and content slide
      heading.classList.add("active");
      tabContentSlides[index].classList.add("active");
    });
  });
});
