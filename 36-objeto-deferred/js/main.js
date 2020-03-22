// Esperar que el DOM esté listo
$(document).ready(() => {
    function consultarAPI() {
        // Retorna l'objecte diferit en si
        const deferred = $.Deferred();
        // Tarda 2 segons
        setTimeout(function () {
            // Promesa satisfecha
            /*var respuesta = [
                {titulo: 'Aprender jQuery'},
                {titulo: 'Aprender JavaScript'},
                {titulo: 'Hacer la compra'},
            ];
            
            deferred.resolve(respuesta);*/

            // Promesa rechazada
            deferred.reject(Error('No puedo conectar'));
        }, 2000);
        // Retorna la promesa. Hi ha un resultat si o si.
        return deferred.promise();
    }

    consultarAPI()
        // Si tot va bé
        .then((respuesta) => console.log(respuesta))
        // Si falla capturen l'error
        .fail((error) => console.error(error))
        .always(() => console.info('Request finalizado'));
});
