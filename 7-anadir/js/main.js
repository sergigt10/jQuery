// Esperar que el DOM esté listo
$(document).ready(function () {
    var $enlace = $('<a href="#">Conocer más gatos negros!</a>');
    // A tots el paragrafs afegim un enllaç amb l'after
    $('.contenido').find('p').after($enlace);
});