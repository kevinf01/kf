console.log(" En estos momentos estamos realizaddo cambios")

console.log('Hola esto vivo')

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

//ScrollReveal().reveal('.showcase');
//ScrollReveal().reveal('.cards-banner-one', {delay: 500});