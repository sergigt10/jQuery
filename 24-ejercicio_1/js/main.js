$(document).ready(function () {
    // Buscamos los elementos a guardar/seleccionar
    var $lis = $('li'),
        // Guardem les imatges de li
        $imagenes = $lis.find('img'),
        activo = 0,
        cantidad = $imagenes.length;

    // Ocultamos todas las imágenes
    $lis.hide();

    // Eliminar las imágenes como elemento/tag y añadirlas como fondo de su parent (li) (background-image)
    $imagenes.each(function (index, imagen) {
        // eq per referirse a un index de una colecció.
        // I apliquem css a cada li
        $lis.eq(index).css({
            'background-image': 'url(' + $(imagen).attr('src') + ')',
            'background-size': 'cover',
            'background-position': 'center center',
            'position': 'absolute',
        });
        // Eliminem les imatges que ja existeixen
        $(imagen).remove();
    });

    // Mostrar la primera imagen
    // eq: podem mostrar el primer valor de la llista d'objectes $li
    $lis.eq(activo).fadeIn();

    // Control de botons esquerra i dreta
    // Event listeners
    // Posem .click directament es un tip per no posar on(click,..)
    // Pero es lo mateix
    $('#derecha').click(function (evt) {
        evt.preventDefault();
        activo += 1;
        // Si estic a l'última diapo. reiniciem el valor activo.
        if (activo > cantidad - 1) {
            activo = 0;
        }
        mostrarImagen();
    });

    $('#izquierda').click(function (evt) {
        evt.preventDefault();
        // Restem perque tirem cap endarrera
        activo -= 1;
        // Si es menor no podem pasar
        if (activo < 0) {
            activo = cantidad - 1;
        }
        mostrarImagen();
    });

    function mostrarImagen() {
        // Ocultem totes les imatges menys la que toca en aquest moment.
        $lis.hide().eq(activo).fadeIn();
    }
});