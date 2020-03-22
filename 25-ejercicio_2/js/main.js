$(document).ready(function () {
    // Mostramos el contenido del primer panel
    $('.panel__contenido').first().slideDown();

    // Event listeners
    $('.panel__cabecera').on('click', function (evt) {
        evt.preventDefault();
        // Tots els panel__contenido menys el que hem clicat 
        $('.panel__contenido').not(this).each(function () {
            // Ocultem la resta que estiguin oberts
           $(this).slideUp();
        });
        // Amb siblings podem obtenir els germans en aquest cas els germans de panel__cabecera i per parametres indiquem quin germa volem afegirli un metode anomenat slidetoggle
        $(this).siblings('.panel__contenido').slideToggle();
    });
});