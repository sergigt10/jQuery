// Esperar que el DOM esté listo
$(document).ready(function () {
    var $input = $('#claim'),
        $h1 = $('.contenido').children('h1');

    $input.keyup(function (event) {
        // Afegim dins de h1, el contingut escrit a l'input
       $h1.text($input.val());
    });
});