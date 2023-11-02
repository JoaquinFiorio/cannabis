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
    
    const h2Element = document.getElementById('accountInfo');
    h2Element.textContent = `Cuenta: ${formattedAccount}`;
    h2Element.style.display = 'block';
    const pElement = document.getElementById("connect_button");
    pElement.style.display = 'none'
    
    const buttonElement = document.getElementById('button_connect');
    buttonElement.textContent = formattedAccount;
}

document.getElementById("connect_button").addEventListener("click", handleConnection);
document.getElementById('button_connect').addEventListener("click", handleConnection);

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



