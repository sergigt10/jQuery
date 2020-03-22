// Esperar que el DOM esté listo
$(document).ready(function () {
    // Petición simple con Ajax
    $.ajax('social.html', {
        success: function (respuesta) {
            // S'afegeix al final
            $('.lateral').append($(respuesta));
        }
    });

    // Método atajo: GET semblan a l'anterior metode amb ajax
    $.get('social.html', function (respuesta) {
        $('.lateral').append($(respuesta));
    });

    // Cargar JSON desde el servidor
    // Intercanviar info entre javascript = JSON
    $.getJSON('https://randomuser.me/api/?results=500')
        // Cuando cargues JSON llavors:
        .then(function (respuesta) {
            // Insertar cada avatar del usuario fictício en el DOM
            respuesta.results.forEach(function (persona) {
                $('<img>')
                    // Asignem l'atribut src
                    .attr('src', persona.picture.thumbnail)
                    .appendTo('.contenido');
            });
        });
});
