// Esperar que el DOM esté listo

// Enviem info desde el client al servidor i aquest ho retorna
$(document).ready(function () {
    // Cargamos el snippet de navegación lateral
    // Carrega contingut d'un altre html
    $.get('social.html')
        .done(function (respuesta) {
            $('.lateral').append($(respuesta));
        });

    // Libro de visitas
    // Capturem l'event submit
    $('form').on('submit', function (evt) {
        evt.preventDefault();

        // Realizamos la petición ajax
        $.ajax('http://dev.wmedia.es/do/jquery/ajax.php', {
            // Formulari funciona en POST
            type: 'POST',
            // Indiquem en el format que es troba
            dataType: 'json',
            // Les dades que enviarem
            data: {
                'nombre': $('#nombre').val(),
                'mensaje': $('#mensaje').val(),
            }
        // Quan tingui la resposta
        }).then(function (respuesta) {
            console.log(respuesta);
            // Després de rebre la resposta
            // Afegim el principi
            $('form').children('ol').prepend($(`
                <li>
                    ${respuesta.nombre} - <small>${respuesta.fecha.weekday}</small><br>
                    ${respuesta.mensaje}
                </li>
            `));
        });
    });
});
