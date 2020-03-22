// Esperar que el DOM esté listo
$(document).ready(function () {
    // Agafem tots els paragrafs que son fills de la clase contenido.
    var $parrafos = $('.contenido').children('p');

    // EventListener. Si cliquem la imatge crida la funció per fer slideToggle.
    $('.lateral').children('img').on('click', function () {
        mostrarEnSecuencia($parrafos);
    });

    function mostrarEnSecuencia($coleccion, tiempo) {
        // Si ens pasen valor agafa aquell valor sino es posa a 1000
        tiempo = tiempo || 1000;
        // each permet recorre amb una funció.
        // Amb slideToggle podem mostrar el contingut en diferents temps
        $coleccion.each(function (indice, elemento) {
            $(elemento).slideToggle(tiempo * (indice + 1));
        });
    }
});