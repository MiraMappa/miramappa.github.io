if (localStorage.getItem('language') == null) {
    if (navigator.language.startsWith('ru')) {
        localStorage.setItem('language', 'ru');
    } else {
        localStorage.setItem('language', 'en');
    }
} 

if (window.location.pathname.startsWith('/ru') && localStorage.getItem('language') != 'ru') {
    location.href = window.location.pathname.substring(3);
} else if (!window.location.pathname.startsWith('/ru') && localStorage.getItem('language') != 'en') {
    location.href = "/ru" + window.location.pathname;
}

let langButton = document.getElementById('lang-button');
let dropdownList = langButton.querySelector('.dropdown-list');
langButton.addEventListener('click', () => {
    dropdownList.classList.toggle('active');
});
document.addEventListener('click', (event) => {
    if (!langButton.contains(event.target)) {
        dropdownList.classList.remove('active');
    }
});

let burgerButton = document.getElementById('burger-button');
let burgerMenu = document.querySelector('.burger-menu');
burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});

dropdownList.querySelector('#lang-en').addEventListener('click', () => {
    localStorage.setItem('language', 'en');
    if (window.location.pathname.startsWith('/ru')) {
        location.href = window.location.pathname.substring(3);
    }
});
dropdownList.querySelector('#lang-ru').addEventListener('click', () => {
    localStorage.setItem('language', 'ru');
    if (!window.location.pathname.startsWith('/ru/')) {
        location.href = "/ru" + window.location.pathname;
    }
});