document.addEventListener("DOMContentLoaded", function () {
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");
  const scrollContainer = document.querySelector(".top10-list");

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });
});