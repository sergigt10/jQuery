// Esperar que el DOM esté listo
$(document).ready(() => {
    // Generem el plugin amb $.fn.blabla
    $.fn.cambiarColor = function(opciones) {

        // Tener un color de reemplazo si no ens passen res per parametres
        const configuracion = $.extend({
            color: 'red',
        }, opciones);

        // Recorremos cada elemento sobre el que se llama el plugin
        // this aqui son els elements p
        this.each((indice, elemento) => {
            // Obtenim el color obtingut a configuració
           let color = configuracion.color;
           // Assignem un color al paràgraf
           $(elemento).css('color', color);
        });
    };

    $('.contenido').find('p').cambiarColor({color: 'goldenrod'});
});
