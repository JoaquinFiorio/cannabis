window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("menuFixed", window.scrollY>50);
});

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
    },
    breakpoints: {
        // Cuando el ancho de la ventana es igual o mayor a 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 40,

        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 70,
        },
    },
    loop: true,
    navigation: {
      nextEl: ".button-next", // Clase del botón "Next"
      prevEl: ".button-prev" // Clase del botón "Prev"
    },
});

document.getElementById("connect_button").addEventListener("click", () => {
    console.log(window)
})




