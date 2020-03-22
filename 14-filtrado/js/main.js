// Esperar que el DOM esté listo
$(document).ready(function () {
    // Selector. Filtra tots els pars
    var $enlaces = $('.lateral').find('a').filter(':even');
     $enlaces.css('transform', 'scale(2)');

    // Función - test
    var $enlaceSnapchat = $('.lateral').find('a').filter(function (indice, elemento) {
        // elemento conté tots els elements trobats
        //console.log(elemento === this); // ES THIS elemento
        // Mirem si hi ha algun text amb Snapchat
        return $(elemento).find('span').text() === 'Snapchat';
    });

    console.log($enlaceSnapchat.css('transform', 'rotate(45deg)'));
});