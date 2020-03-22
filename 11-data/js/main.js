// Esperar que el DOM esté listo
$(document).ready(function () {
    var $enlace = $('.lateral').find('a').last();
    // Podem veure el valor d'un atribut html
     $enlace.data('rrss', 'Nuevo valor'); // Setter
     var valorData = $enlace.data('rrss'); // Getter
     console.log(valorData);

    // Filtrar selección
    // $('*') tot el DOM
    var $datos = $('*').filter(function () {
        // Mirem si algu te l'atribut rrss
        var datos = $(this).data('rrss');
        // Si algu té atribut snapchat el retorna
        return datos == 'snapchat';
    });
    console.log($datos);
});