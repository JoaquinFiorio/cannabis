window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("menuFixed", window.scrollY>50);
});

const swiper = new Swiper(".swiper", {
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

//TOOLTIP

const tooltipElements = document.querySelectorAll('.tooltip');


tooltipElements.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.getAttribute('data-tooltip') === 'Copy') {
            element.setAttribute('data-tooltip', 'Copied');
            
            const clipboardType = element.getAttribute('data-clipboard');
            const contentToCopy = getContentToCopy(clipboardType);
            copyToClipboard(contentToCopy);
            
            setTimeout(() => {
                element.setAttribute('data-tooltip', 'Copy');
            }, 1000);
        }
    });
});

function getContentToCopy(type) {
    if (type === 'URL') {
        return 'https://swapcoffeeup.com';
    } else if (type === 'CONTRACT') {
        return '0x88835252cae9e1aca2dd894924eb02dfa932ee85';
    }
}

function copyToClipboard(content) {
    const el = document.createElement('textarea');
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}



