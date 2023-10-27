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

document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }
});

document.getElementById("connect_button").addEventListener("click", async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const formattedAccount = `${account.substring(0, 4)}...${account.slice(-4)}`;
    // Modificar el contenido del <h2> con el valor de la cuenta
    const h2Element = document.getElementById('accountInfo');
    h2Element.textContent = `Cuenta: ${formattedAccount}`;
    h2Element.style.display = 'block';
    const pElement = document.getElementById("connect_button");
    pElement.style.display = 'none'
})

const handleConnection = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const formattedAccount = `${account.substring(0, 4)}...${account.slice(-4)}`;
    
    // Modificar el contenido del <h2> con el valor de la cuenta
    const h2Element = document.getElementById('accountInfo');
    h2Element.textContent = `Cuenta: ${formattedAccount}`;
    h2Element.style.display = 'block';
    const pElement = document.getElementById("connect_button");
    pElement.style.display = 'none'

    // Reemplazar el texto del botón
    const buttonElement = document.getElementById('button_connect');
    buttonElement.textContent = formattedAccount;
}

document.getElementById("connect_button").addEventListener("click", handleConnection);
document.getElementById('button_connect').addEventListener("click", handleConnection);

//TOOLTIP

// Obtén los elementos con la clase "tooltip"
const tooltipElements = document.querySelectorAll('.tooltip');

// Agrega un controlador de eventos 'click' a cada elemento
tooltipElements.forEach((element) => {
    element.addEventListener('click', () => {
        // Cambia el contenido del tooltip
        if (element.getAttribute('data-tooltip') === 'Copy') {
            element.setAttribute('data-tooltip', 'Copied');

            // Copia el contenido correspondiente al portapapeles
            const clipboardType = element.getAttribute('data-clipboard');
            const contentToCopy = getContentToCopy(clipboardType);
            copyToClipboard(contentToCopy);

            // Establece un temporizador para restaurar el tooltip a "Copy" después de un segundo
            setTimeout(() => {
                element.setAttribute('data-tooltip', 'Copy');
            }, 1000);
        }
    });
});

// Función para obtener el contenido a copiar
function getContentToCopy(type) {
    if (type === 'URL') {
        return 'https://swapcoffeeup.com';
    } else if (type === 'CONTRACT') {
        return '0x88835252cae9e1aca2dd894924eb02dfa932ee85';
    }
}

// Función para copiar al portapapeles
function copyToClipboard(content) {
    const el = document.createElement('textarea');
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}



