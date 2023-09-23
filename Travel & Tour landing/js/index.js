document.querySelector(".burger-lines").addEventListener("click", () => {
    document.querySelector(".burger-menu").classList.toggle("active");
});


var swiper = new Swiper(".mySwiper", {
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });