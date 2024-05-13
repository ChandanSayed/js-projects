const accordions = document.querySelectorAll(".accordion ");

accordions.forEach(function (accordion) {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.maxHeight
      ? (panel.style.maxHeight = null)
      : (panel.style.maxHeight = panel.scrollHeight + "px");
  });
});
