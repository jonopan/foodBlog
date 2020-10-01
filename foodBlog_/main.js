const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});

/* Hide anchor link in url */
jQuery(document).ready(function($) {

    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
    });
});

/*Scroll reveal */
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    diuration: 1000,
    distance: '25rem',
    delay:300
});

sr.reveal('.animate-right', {
    origin: 'right',
    diuration: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.animate-top', {
    origin: 'top',
    diuration: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    diuration: 1000,
    distance: '25rem',
    delay:600
});

