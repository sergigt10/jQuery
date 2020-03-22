// Esperar que el DOM esté listo
$(document).ready(function(){
    // Descendientes directos (busca una imatge que sigui descendent directament de aside "de dreta a esquerra")
    $('aside > img').fadeOut('slow');

    // Búsqueda de elementos (selecciona tots els spans)
    $('a span').css('color', 'red');

    // Selectores múltiples (selecciona tots a's, span's i p's)
    $('a, span, p').slideToggle();

    // Pseudo clases (seleccionem els parragrafs que son pars)
    $('p:odd').css({
        'font-weight': 'bold',
        'color': 'goldenrod',
    });
});